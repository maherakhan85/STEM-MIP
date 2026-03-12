"use client";

import { useState, useCallback } from "react";

const EMAIL = "communications@projxon.com";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const subject = encodeURIComponent(`Contact from ${name || "Website"}`);
      const body = encodeURIComponent(
        [message, name && `From: ${name}`, email && `Reply to: ${email}`].filter(Boolean).join("\n\n")
      );
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    },
    [name, email, message]
  );

  return (
    <form onSubmit={handleSubmit} className="card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <div className="mb-3">
          <label htmlFor="contact-name" className="form-label fw-semibold text-dark">
            Name
          </label>
          <input
            type="text"
            id="contact-name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact-email" className="form-label fw-semibold text-dark">
            Email
          </label>
          <input
            type="email"
            id="contact-email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact-message" className="form-label fw-semibold text-dark">
            Message
          </label>
          <textarea
            id="contact-message"
            className="form-control"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message..."
            required
          />
        </div>
        <button type="submit" className="btn btn-dark px-4 py-2">
          Submit
        </button>
      </div>
    </form>
  );
}
