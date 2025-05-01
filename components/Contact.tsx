"use client";
import { useState } from 'react';
import axios from 'axios';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/contact', form);
    alert('Message sent successfully!');
  };
  return (
    <section id="contact" className="p-10 bg-gray-200">
      <h2 className="text-3xl text-gray-900 font-bold">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input type="text" placeholder="Name" className="p-2 mb-2" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" className="p-2 mb-2" onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <textarea placeholder="Message" className="p-2 mb-2" onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="bg-blue-500 text-white p-2" type="submit">Send</button>
      </form>
    </section>
  );
}
