'use client'

import { useState, useRef, useEffect } from 'react'
import { supabase } from '../../lib/supabaseClient'

const emailDomains = ['@gmail.com', '@yahoo.com', '@outlook.com', '@protonmail.com', '@hotmail.com']

export default function Reach() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)

    const atIndex = value.indexOf('@')
    if (atIndex === -1) {
      setSuggestions(emailDomains)
      setIsDropdownOpen(true)
    } else {
      const typedDomain = value.slice(atIndex)
      const filteredSuggestions = emailDomains.filter((domain) =>
        domain.toLowerCase().startsWith(typedDomain.toLowerCase())
      )
      setSuggestions(filteredSuggestions)
      setIsDropdownOpen(filteredSuggestions.length > 0)
    }
  }

  const handleSelectSuggestion = (domain: string) => {
    const atIndex = email.indexOf('@')
    const newEmail = atIndex === -1 ? email + domain : email.slice(0, atIndex) + domain
    setEmail(newEmail)
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email.')
      setIsSuccess(false)
      return
    }

    const { data, error } = await supabase.from('emails').insert([{ email }])

    if (error) {
      console.error(error)
      setMessage('Failed to save email. Try again.')
      setIsSuccess(false)
    } else {
      setMessage('All set! Your email is now on the list.')
      setIsSuccess(true)
      setEmail('')
      setIsDropdownOpen(false)

      setTimeout(() => {
        setMessage('')
        setIsSuccess(false)
      }, 3000)
    }
  }

  return (
    <section
      id="reach"
      className="reach-container"
      style={{ fontFamily: 'var(--font-jost), sans-serif' }} // Jost font applied
    >
      <div className="reach-overlay"></div>

      <div className="reach-content">
        <h2 className="reach-heading">
          Get access to free material, and a network of experts to elevate your business.
        </h2>

        <div className="reach-form" style={{ position: 'relative' }}>
          <input
            ref={inputRef}
            type="email"
            placeholder="Enter your email"
            className="reach-input"
            value={email}
            onChange={handleChange}
            onFocus={() => {
              if (suggestions.length > 0) setIsDropdownOpen(true)
            }}
            maxLength={50}
            style={{ paddingRight: '1rem' }}
          />
          <button className="reach-button" onClick={handleSubmit}>
            Submit
          </button>

          {isDropdownOpen && suggestions.length > 0 && (
            <ul
              ref={dropdownRef}
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                margin: '4px 0 0 0',
                padding: '8px 0',
                listStyle: 'none',
                zIndex: 1000,
                maxHeight: '200px',
                overflowY: 'auto',
                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
              }}
            >
              {suggestions.map((domain) => {
                const displayEmail = email.includes('@')
                  ? email.slice(0, email.indexOf('@')) + domain
                  : email + domain
                return (
                  <li
                    key={domain}
                    style={{
                      padding: '8px 16px',
                      cursor: 'pointer',
                      fontSize: '0.9rem',
                      color: '#e0e0e0',
                      transition: 'background-color 0.2s ease',
                      fontFamily: 'var(--font-jost), sans-serif', // ensure suggestions use Jost
                    }}
                    onClick={() => handleSelectSuggestion(domain)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#333'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }}
                  >
                    {displayEmail}
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        {message && (
          <p
            className="reach-message"
            style={{
              color: isSuccess ? '#02070a' : '#7d1e1e',
              fontWeight: '600',
              marginTop: '0.5rem',
              opacity: 1,
              transition: 'opacity 0.5s ease-in-out',
            }}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  )
}
