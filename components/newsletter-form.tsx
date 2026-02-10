"use client";

import React, { useState } from "react";

type NewsletterFormProps = {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonLabel?: string;
  successMessage?: string;
};

export default function NewsletterForm({
  className,
  inputClassName,
  buttonClassName,
  buttonLabel = "Subscribe",
  successMessage = "Thanks! Check your email to confirm.",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName) {
      setError("Please fill in all fields");
      return;
    }

    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5001"
        : "https://api.firstrep.xyz";

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch(`${baseUrl}/api/auth/landing/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName: firstName || undefined,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          message?: string;
        } | null;
        throw new Error(payload?.message || "Failed to subscribe");
      }

      setSubscribed(true);
      setEmail("");
      setFirstName("");
      setTimeout(() => setSubscribed(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={className}>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={inputClassName}
        required
      />
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClassName}
        required
      />
      <button type="submit" className={buttonClassName}>
        {submitting ? "Subscribing..." : buttonLabel}
      </button>
      {subscribed && (
        <p className="text-[#ff6b53] text-sm mt-3">{successMessage}</p>
      )}
      {error && <p className="text-red-400 text-sm mt-3">{error}</p>}
    </form>
  );
}
