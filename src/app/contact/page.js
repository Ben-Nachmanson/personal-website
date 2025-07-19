"use client";
import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch {
      setStatus("Error sending message.");
    }
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '2rem', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, color: '#27c46c', marginBottom: '1rem' }}>Contact</h1>
      <p style={{ fontSize: '1.1rem', color: '#bfc7d5', textAlign: 'center', maxWidth: 600 }}>
        Send me a message below and I'll get back to you!
      </p>
      <div style={{ background: '#181818', padding: 32, borderRadius: 16, boxShadow: '0 4px 24px rgba(39,196,108,0.08)', marginTop: 32, width: '100%', maxWidth: 400 }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem", borderRadius: 8, border: "1px solid #27c46c", background: "#222", color: "#fff", fontSize: "1rem" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: "0.75rem", borderRadius: 8, border: "1px solid #27c46c", background: "#222", color: "#fff", fontSize: "1rem" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            style={{ padding: "0.75rem", borderRadius: 8, border: "1px solid #27c46c", background: "#222", color: "#fff", fontSize: "1rem" }}
          />
          <button type="submit" style={{ background: "#27c46c", color: "#fff", border: "none", borderRadius: 8, padding: "0.9rem", fontWeight: 700, fontSize: "1.1rem", boxShadow: "0 2px 8px rgba(39,196,108,0.15)", transition: "background 0.2s" }}>
            Send Message
          </button>
        </form>
        {status && <p style={{ marginTop: "1rem", color: status === "Message sent!" ? "#27c46c" : "#f68c5c", fontWeight: 600 }}>{status}</p>}
      </div>
    </section>
  );
}
