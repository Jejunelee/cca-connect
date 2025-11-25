'use client'

import { useState } from 'react'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'

export default function DashboardPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isAuthed, setIsAuthed] = useState(false)
  const [emails, setEmails] = useState<any[]>([])
  const [error, setError] = useState('')

  // Move supabase import here
  const supabase = require('../../../lib/supabaseClient').supabase

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const { data: admin, error: adminError } = await supabase
        .from('dashboard_admins')
        .select('*')
        .eq('username', username)
        .eq('password', password)
        .single()

      if (adminError || !admin) {
        setError('Invalid username or password.')
        return
      }

      setIsAuthed(true)

      const { data: emailData } = await supabase
        .from('emails')
        .select('*')
        .order('created_at', { ascending: false })

      setEmails(emailData || [])
    } catch (err) {
      console.error(err)
      setError('An error occurred. Try again.')
    }
  }

  const downloadCSV = () => {
    if (emails.length === 0) return

    const headers = ['Email', 'Date Added']
    const rows = emails.map((row) => [row.email, new Date(row.created_at).toLocaleString()])

    const csvContent =
      [headers.join(','), ...rows.map((r) => r.join(','))].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    saveAs(blob, 'emails.csv')
  }

  const downloadXLSX = () => {
    if (emails.length === 0) return

    const wsData = emails.map((row) => ({
      Email: row.email,
      'Date Added': new Date(row.created_at).toLocaleString(),
    }))

    const ws = XLSX.utils.json_to_sheet(wsData)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Emails')

    XLSX.writeFile(wb, 'emails.xlsx')
  }

  if (!isAuthed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f4f4]">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200"
        >
          <h1 className="text-2xl font-semibold mb-4 text-black">Admin Login</h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-black text-black"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-xl mb-3 focus:outline-none focus:ring-2 focus:ring-black text-black"
          />

          {error && <p className="text-red-600 mb-2 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-900 transition"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f6f4f4] p-10">
      <h1 className="text-3xl font-bold mb-6 text-black">Dashboard – Email List</h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={downloadCSV}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
        >
          Download CSV
        </button>
        <button
          onClick={downloadXLSX}
          className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
        >
          Download XLSX
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
        {emails.length === 0 ? (
          <p className="text-gray-700 text-center">No emails saved yet.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b">
                <th className="p-3 font-medium text-black">Email</th>
                <th className="p-3 font-medium text-black">Date Added</th>
              </tr>
            </thead>
            <tbody>
              {emails.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-50">
                  <td className="p-3 text-black">{row.email}</td>
                  <td className="p-3 text-gray-700">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
