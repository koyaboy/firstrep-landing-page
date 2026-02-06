"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, Calendar, User, ArrowRight, Mail } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "consistency-over-perfection",
    title:
      "Consistency Over Perfection: Why Your First Rep Matters More Than Your Last",
    excerpt:
      "The fitness industry obsesses over perfect form, perfect diets, and perfect routines. But the real transformation happens when you show up, even when it's messy.",
    category: "People Stories",
    author: {
      name: "Koya",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "January 15, 2025",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    readTime: "6 min read",
  },
  {
    id: 2,
    slug: "the-accountability-paradox",
    title:
      "The Accountability Paradox: Why Buddy Systems Work (And How to Get One)",
    excerpt:
      "Being accountable to yourself is hard. Being accountable to someone else? That's where the magic happens. We break down why buddy systems create unstoppable consistency.",
    category: "Systems & Tactics",
    author: {
      name: "Koya",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "December 28, 2024",
    image:
      "https://images.unsplash.com/photo-1552091160-c1fb51014e3d?q=80&w=1200&auto=format&fit=crop",
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "field-notes-30-day-challenge",
    title: "Field Notes: What Happens When You Work Out for 30 Days Straight",
    excerpt:
      "I went all-in for 30 days. Spoiler: It wasn't about the workouts. It was about what I learned about myself, my habits, and what real consistency looks like.",
    category: "Field Notes",
    author: {
      name: "Koya",
      role: "Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "December 10, 2024",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    readTime: "7 min read",
  },
];

export default function BlogPage() {
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
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      {/* Header */}
      <header className="border-b border-[#242935] sticky top-0 z-50 bg-[#1a1f2e]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Heart className="h-6 w-6 text-[#ff6b53]" />
            <span className="text-xl font-bold">FirstRep</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-28 border-b border-[#242935]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Rep Report
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Stories, systems, and insights from the frontlines of consistency.
              Real people, real transformations, real accountability.
            </p>
            <p className="text-sm text-gray-400">
              Published monthly • Written by founders and community members
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-[#242935] border-b border-[#242935]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#1a1f2e] rounded-xl p-8 border border-[#333]">
              <div className="flex items-start gap-4 mb-4">
                <Mail className="h-6 w-6 text-[#ff6b53] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Get The Rep Report in Your Inbox
                  </h3>
                  <p className="text-gray-400 text-sm">
                    New story every month. No spam, just real accountability
                    insights.
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-[#242935] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b53] transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="text-[#ff6b53] text-sm mt-3">
                  Thanks! Check your email to confirm.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-full flex flex-col overflow-hidden rounded-xl border border-[#242935] hover:border-[#ff6b53]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b53]/10 bg-[#242935]/30">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-[#1a1f2e]">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col">
                    <h2 className="text-xl font-bold mb-3 group-hover:text-[#ff6b53] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="space-y-3 pt-4 border-t border-[#333]">
                      <div className="flex items-center gap-3">
                        <Image
                          src={post.author.image || "/placeholder.svg"}
                          alt={post.author.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white">
                            {post.author.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {post.author.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-4 flex items-center gap-2 text-[#ff6b53] font-medium text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#242935] border-t border-[#242935]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">More stories coming soon</h2>
          <p className="text-gray-300 mb-6">
            New articles published monthly. Subscribe to get them delivered to
            your inbox.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#1a1f2e] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b53] transition-colors"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#242935] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>&copy; 2025 FirstRep. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
