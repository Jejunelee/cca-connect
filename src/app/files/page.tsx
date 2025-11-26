'use client'

import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabaseClient'
import Link from 'next/link'
import { saveAs } from 'file-saver'

interface PDFFile {
  title: string
  name: string
  url?: string
  available: boolean
}

export default function DashboardPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthed, setIsAuthed] = useState(false)
  const [error, setError] = useState('')
  const [selectedPDF, setSelectedPDF] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const pdfFiles: PDFFile[] = [
    {
      title: 'Experience is the New Menu Handout',
      name: 'HANDOUT.pdf',
      url: supabase.storage.from('pdf-files').getPublicUrl('HANDOUT.pdf').data.publicUrl,
      available: true,
    },
    { title: 'Unavailable Doc 1', name: 'Coming Soon (2026)', available: false },
    { title: 'Unavailable Doc 2', name: 'Coming Soon (2025)', available: false },
  ]

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const { data: user, error: loginError } = await supabase
        .from('user_login')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()

      if (loginError || !user) {
        setError('Invalid username or password.')
        return
      }

      setIsAuthed(true)
    } catch (err) {
      console.error(err)
      setError('An error occurred. Try again.')
    }
  }

  const downloadPDF = (file: PDFFile) => {
    if (!file.available || !file.url) return
    saveAs(file.url, file.name)
  }

  // Mobile dropdown menu component
  const MobileDropdownMenu = () => (
    <div className={`absolute top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 transition-all duration-300 ${
      isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
    }`}>
      <div className="p-4">
        <div className="flex flex-col gap-2">
          {pdfFiles.map((file) => (
            <button
              key={file.name}
              onClick={() => {
                setSelectedPDF(file.name)
                setIsMobileMenuOpen(false)
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition ${
                selectedPDF === file.name
                  ? 'bg-[#a9cee7] text-gray-900'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {file.title}
            </button>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link
            href="/"
            className="inline-block w-full text-center bg-gradient-to-r from-[#a9cee7] to-[#6fb3dd] text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:from-[#6fb3dd] hover:to-[#3b82f6] hover:text-white transition"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ← Back to Site
          </Link>
        </div>
      </div>
    </div>
  )

  // Desktop sidebar component
  const DesktopSidebar = () => (
    <aside className="w-64 bg-white p-6 flex flex-col justify-between shadow-lg">
      <div className="flex flex-col items-center">
        <img src="/logo.png" alt="Logo" className="w-32 mb-6" />
        <div className="flex flex-col gap-3 w-full">
          {pdfFiles.map((file) => (
            <button
              key={file.name}
              onClick={() => setSelectedPDF(file.name)}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                selectedPDF === file.name
                  ? 'bg-[#a9cee7] text-gray-900'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {file.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-auto text-center">
        <Link
          href="/"
          className="inline-block bg-gradient-to-r from-[#a9cee7] to-[#6fb3dd] text-gray-900 font-semibold px-6 py-3 rounded-full shadow hover:from-[#6fb3dd] hover:to-[#3b82f6] hover:text-white transition"
        >
          ← Back to Site
        </Link>
      </div>
    </aside>
  )

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-[#a9cee7] via-[#d3eafc] to-[#f6f4f4] font-jost px-4">
        <img src="/logo.png" alt="Logo" className="w-36 mb-8" />

        <form
          onSubmit={handleLogin}
          className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900">User Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 md:p-4 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6fb3dd] text-gray-900 placeholder-gray-400 transition"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 md:p-4 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#6fb3dd] text-gray-900 placeholder-gray-400 transition"
          />

          {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#a9cee7] hover:bg-[#6fb3dd] text-gray-900 font-semibold p-3 md:p-4 rounded-xl transition shadow-md hover:shadow-lg"
          >
            Log In
          </button>

          <p className="text-center text-gray-500 mt-4 text-sm">
            Welcome back! Enter credentials to access the dashboard.
          </p>

          <div className="text-center mt-6">
            <Link
              href="/"
              className="text-[#6fb3dd] hover:text-[#3b82f6] transition text-sm font-medium"
            >
              ← Back to Site
            </Link>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex bg-[#f6f4f4] font-jost">
      {/* Desktop Sidebar */}
      {!isMobile && <DesktopSidebar />}

      {/* Main content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10">
        {/* Mobile Header with Hamburger */}
        {isMobile && (
          <div className="flex items-center justify-between mb-6 md:hidden bg-white p-4 rounded-2xl shadow-lg">
            <img src="/logo.png" alt="Logo" className="w-24" />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 bg-gray-100 rounded-xl hover:bg-gray-200 transition relative"
            >
              <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 mb-1.5 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-gray-700 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && <MobileDropdownMenu />}

        {/* Backdrop for mobile dropdown */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-gray-600 opacity-40 bg-opacity-20 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {pdfFiles.map((file) => (
            <div
              key={file.name}
              className={`flex flex-col p-4 md:p-6 rounded-2xl shadow-lg border transition ${
                file.available
                  ? 'bg-white hover:shadow-2xl'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              } ${selectedPDF === file.name ? 'border-4 border-[#6fb3dd]' : ''}`}
            >
              <h3 className={`text-base md:text-lg font-bold mb-2 ${file.available ? 'text-gray-800' : 'text-gray-400'}`}>
                {file.title}
              </h3>
              <p className={`text-xs md:text-sm mb-4 md:mb-6 ${file.available ? 'text-gray-600' : 'text-gray-400'}`}>
                {file.name}
              </p>

              <button
                onClick={() => downloadPDF(file)}
                disabled={!file.available}
                className={`mt-auto px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold shadow-md transition ${
                  file.available
                    ? 'bg-gradient-to-r from-[#a9cee7] to-[#6fb3dd] hover:from-[#6fb3dd] hover:to-[#3b82f6] text-gray-900 hover:shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed shadow-none'
                }`}
              >
                {file.available ? 'Download PDF' : 'Unavailable'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}