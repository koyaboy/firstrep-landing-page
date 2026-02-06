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
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={className}>
      <input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={inputClassName}
        required
      />
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
      {subscribed && (
        <p className="text-[#ff6b53] text-sm mt-3">{successMessage}</p>
      )}
    </form>
  );
}
