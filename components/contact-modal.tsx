"use client";

import { X, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const email = "ola@firstrep.xyz";
  const phone = "+234 901 224 4403";
  const whatsappUrl =
    "https://wa.me/2349012244403?text=Hi%20Ola%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20how%20FirstRep%20can%20help%20my%20fitness%20center.";

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 px-4 animate-scale-in">
        <div className="bg-[#1a1f2e] border border-[#242935] rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ff6b53]/10 to-[#ff6b53]/5 px-6 py-6 border-b border-[#242935] flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
              <p className="text-sm text-gray-400 mt-1">We're here to help</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-8">
            <p className="text-gray-300 mb-8">
              Reach out to us anytime. We typically respond within a few hours.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <button
                  onClick={() => handleCopy(email, "email")}
                  className="w-full flex items-center justify-between p-4 bg-[#242935] hover:bg-[#2a3140] border border-[#333] rounded-lg transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-[#ff6b53]" />
                    <span className="text-white font-medium">{email}</span>
                  </div>
                  <span className="text-xs font-medium text-gray-400 group-hover:text-[#ff6b53] transition-colors">
                    {copiedItem === "email" ? "✓ Copied" : "Copy"}
                  </span>
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">
                  WhatsApp & Phone
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(phone, "phone")}
                    className="flex-1 flex items-center justify-between p-4 bg-[#242935] hover:bg-[#2a3140] border border-[#333] rounded-lg transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <MessageCircle size={18} className="text-[#ff6b53]" />
                      <span className="text-white font-medium text-sm">
                        {phone}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover:text-[#ff6b53] transition-colors">
                      {copiedItem === "phone" ? "✓" : "Copy"}
                    </span>
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 bg-[#25d366] hover:bg-[#20ba58] text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center hover:scale-[1.02]"
                    title="Open WhatsApp"
                  >
                    <MessageCircle size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* <p className="text-xs text-gray-400 mt-8 text-center">
              We're available Monday-Friday, 9AM-6PM WAT
            </p> */}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-[#0f1419] border-t border-[#242935]">
            <button
              onClick={onClose}
              className="w-full h-10 px-4 bg-[#242935] hover:bg-[#2a3140] text-gray-300 hover:text-white rounded-lg font-medium transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
