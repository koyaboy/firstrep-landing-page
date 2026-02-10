import React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Calendar,
  ArrowRight,
  Mail,
  ChevronDown,
  Newspaper,
} from "lucide-react";

import NewsletterForm from "@/components/newsletter-form";
import { client } from "@/sanity/client";
import { POSTS_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type Author = {
  name?: string;
  role?: string;
  bio?: string;
  avatar?: unknown;
};

type Post = {
  _id: string;
  slug?: string;
  title?: string;
  excerpt?: string;
  category?: string;
  author?: Author | null;
  publishedAt?: string;
  readTime?: string | number;
  image?: unknown;
  bodyText?: string;
};

function formatDate(date?: string) {
  if (!date) return "—";
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return "—";
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function formatReadTime(readTime?: string | number, bodyText?: string) {
  if (typeof readTime === "string" && readTime.trim().length > 0) {
    return readTime;
  }
  if (typeof readTime === "number" && Number.isFinite(readTime)) {
    return `${readTime} min read`;
  }
  if (bodyText) {
    const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
    if (words > 0) {
      const minutes = Math.max(1, Math.round(words / 200));
      return `${minutes} min read`;
    }
  }
  return "—";
}

function resolveImageUrl(source?: unknown, width = 1200, height = 700) {
  if (!source) return "/placeholder.svg";
  try {
    return urlFor(source).width(width).height(height).url();
  } catch {
    return "/placeholder.svg";
  }
}

export default async function BlogPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY);

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
              The intel you need to turn fitness into a lifestyle.
            </p>
            <p className="text-sm text-gray-400">
              Published bi-weekly • Written by the FirstRep team and community
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
                    New story every two weeks. No spam, just real accountability
                    insights.
                  </p>
                </div>
              </div>
              <NewsletterForm
                className="flex flex-col sm:flex-row gap-3"
                inputClassName="flex-1 bg-[#242935] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b53] transition-colors"
                buttonClassName="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          {posts.length === 0 ? (
            <div className="max-w-2xl mx-auto py-12">
              <div className="relative">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b53]/10 to-[#ff6b53]/5 rounded-2xl blur-3xl"></div>

                <div className="relative border border-[#242935] rounded-2xl p-10 md:p-14 bg-[#242935]/30 backdrop-blur-sm text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#ff6b53]/10 border border-[#ff6b53]/20 mb-6">
                    <Newspaper className="h-8 w-8 text-[#ff6b53]" />
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-white">
                    The Intel is Brewing
                  </h2>

                  <p className="text-gray-300 text-lg mb-2 font-medium">
                    We’re preparing the first drops of The Rep Report.
                  </p>
                  <p className="text-gray-400 text-base mb-8">
                    Deep dives into the systems, fire, and foundations of
                    high-level consistency.
                  </p>

                  {/* Stats - Re-aligned to your 3 Pillars */}
                  <div className="grid grid-cols-3 gap-2 mb-8 py-6 border-t border-b border-[#242935]">
                    <div>
                      <div className="text-xl font-bold text-[#ff6b53]">
                        The Fire
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                        Motivation
                      </div>
                    </div>
                    <div className="border-l border-r border-[#242935]">
                      <div className="text-xl font-bold text-[#ff6b53]">
                        Systems
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                        Tactics
                      </div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-[#ff6b53]">
                        Habits
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                        Foundations
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-sm text-gray-400 italic">
                      Bi-weekly drops. Join the list to get the first one.
                    </p>
                    <a href="#newsletter-cta" className="animate-bounce mt-4">
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-full flex flex-col overflow-hidden rounded-xl border border-[#242935] hover:border-[#ff6b53]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#ff6b53]/10 bg-[#242935]/30">
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden bg-[#1a1f2e]">
                      <Image
                        src={resolveImageUrl(post.image)}
                        alt={post.title ?? "Blog post"}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-xs font-medium">
                          {post.category ?? "General"}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-[#ff6b53] transition-colors line-clamp-2">
                        {post.title ?? "Untitled"}
                      </h2>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                        {post.excerpt ?? ""}
                      </p>

                      {/* Meta */}
                      <div className="space-y-3 pt-4 border-t border-[#333]">
                        <div className="flex items-center gap-3">
                          <Image
                            src={resolveImageUrl(post.author?.avatar, 96, 96)}
                            alt={post.author?.name ?? "Author"}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-white">
                              {post.author?.name ?? "FirstRep"}
                            </p>
                            <p className="text-xs text-gray-400">
                              {post.author?.role ?? "Contributor"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.publishedAt)}
                          </span>
                          <span>
                            {formatReadTime(post.readTime, post.bodyText)}
                          </span>
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
          )}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        id="newsletter-cta"
        className="py-16 bg-[#242935] border-t border-[#242935]"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">More stories coming soon</h2>
          <p className="text-gray-300 mb-6">
            New articles published bi-weekly. Subscribe to get them delivered to
            your inbox.
          </p>
          <NewsletterForm
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            inputClassName="flex-1 bg-[#1a1f2e] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b53] transition-colors"
            buttonClassName="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#242935] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400 text-sm">
            <p>&copy; 2026 FirstRep. All rights reserved.</p>
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
