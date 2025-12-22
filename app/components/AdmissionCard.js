'use client'
import { useState } from 'react'

export default function AdmissionCard() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    className: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.phone || !form.className) {
      alert('❌ Please fill all fields')
      return
    }

    alert('✅ Admission Form Submitted Successfully!')

    setForm({
      name: '',
      email: '',
      phone: '',
      className: '',
    })
  }

  return (
    <div className="w-full max-w-xl border rounded-2xl shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Admission Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Student Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Mobile</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="9876543210"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 outline-none"
          />
        </div>

        <div>
          <label className="block mb-1">Applying For Class</label>
          <input
            name="className"
            value={form.className}
            onChange={handleChange}
            placeholder="Class 10"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white/20 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Submit Admission
        </button>
      </form>
    </div>
  )
}
