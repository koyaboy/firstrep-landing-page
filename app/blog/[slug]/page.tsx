import React from "react";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";
import { Heart, Calendar, Mail, ArrowLeft } from "lucide-react";

import NewsletterForm from "@/components/newsletter-form";
import { client } from "@/sanity/client";
import { POST_BY_SLUG_QUERY } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

type Author = {
  name?: string;
  bio?: string;
  avatar?: unknown;
  role?: string;
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
  body?: PortableTextBlock[];
  bodyText?: string;
  content?: string | PortableTextBlock[];
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

function resolveImageUrl(source?: unknown, width = 1400, height = 900) {
  if (!source) return "/placeholder.svg";
  try {
    return urlFor(source).width(width).height(height).url();
  } catch {
    return "/placeholder.svg";
  }
}

function renderContentString(content?: string) {
  if (!content) return null;
  return content.split("\n\n").map((paragraph, index) => {
    if (paragraph.startsWith("##")) {
      return (
        <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-white">
          {paragraph.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p key={index} className="text-gray-300 leading-relaxed mb-6 text-lg">
        {paragraph}
      </p>
    );
  });
}

const portableComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 text-white">{children}</h2>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-gray-300 leading-relaxed mb-6 text-lg">{children}</p>
    ),
  },
  types: {
    image: ({
      value,
    }: {
      value?: {
        asset?: { metadata?: { dimensions?: { width?: number; height?: number } } };
        alt?: string;
      };
    }) => {
      const width = value?.asset?.metadata?.dimensions?.width ?? 1400;
      const height = value?.asset?.metadata?.dimensions?.height ?? 900;
      const src = value?.asset ? resolveImageUrl(value, width, height) : null;
      if (!src) return null;
      return (
        <div className="my-8">
          <Image
            src={src}
            alt={value?.alt ?? "Blog image"}
            width={width}
            height={height}
            className="w-full rounded-xl border border-[#242935]"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal pl-6 text-gray-300 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-gray-300">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="text-gray-300">{children}</li>
    ),
  },
};

export default async function BlogPost({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  console.log("slug", slug);

  if (!slug) {
    return (
      <div className="min-h-screen bg-[#1a1f2e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#ff6b53] hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const post = await client.fetch<Post>(POST_BY_SLUG_QUERY, { slug });

  console.log("post", post);
  if (!post) {
    return (
      <div className="min-h-screen bg-[#1a1f2e] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-[#ff6b53] hover:underline">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const portableValue: PortableTextBlock[] | null =
    Array.isArray(post.body) && post.body.length > 0
      ? post.body
      : Array.isArray(post.content)
        ? post.content
        : null;

  const stringContent =
    typeof post.content === "string" ? post.content : (post.excerpt ?? "");

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
            href="/blog"
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <Image
          src={resolveImageUrl(post.image)}
          alt={post.title ?? "Blog post"}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent"></div>
      </div>

      {/* Main Content */}
      <article className="border-b border-[#242935]">
        <div className="container mx-auto px-4 max-w-3xl py-12">
          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-xs font-medium">
                {post.category ?? "General"}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title ?? "Untitled"}
            </h1>

            {/* Author & Date */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-[#242935]">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Image
                  src={resolveImageUrl(post.author?.avatar, 96, 96)}
                  alt={post.author?.name ?? "Author"}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">
                    {post.author?.name ?? "FirstRep"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {post.author?.role ?? "Contributor"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.publishedAt)}
                </span>
                <span>{formatReadTime(post.readTime, post.bodyText)}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            {portableValue ? (
              <PortableText
                value={portableValue}
                components={portableComponents}
              />
            ) : (
              renderContentString(stringContent)
            )}
          </div>

          {/* Author Bio */}
          <div className="bg-[#242935] rounded-xl p-8 mb-12 border border-[#333]">
            <div className="flex gap-4">
              <Image
                src={resolveImageUrl(post.author?.avatar, 128, 128)}
                alt={post.author?.name ?? "Author"}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-lg mb-1">
                  {post.author?.name ?? "FirstRep"}
                </h3>
                <p className="text-sm text-gray-400 mb-3">
                  {post.author?.role ?? "Contributor"}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.author?.bio ?? ""}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Subscribe CTA */}
      <section className="py-16 bg-[#242935]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-[#1a1f2e] rounded-xl p-8 border border-[#333]">
            <div className="flex items-start gap-4 mb-4">
              <Mail className="h-6 w-6 text-[#ff6b53] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">
                  Get more stories like this
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Subscribe to The Rep Report for monthly insights about
                  accountability, consistency, and building better habits.
                </p>
                <NewsletterForm
                  className="flex flex-col sm:flex-row gap-3"
                  inputClassName="flex-1 bg-[#242935] border border-[#333] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#ff6b53] transition-colors"
                  buttonClassName="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20 whitespace-nowrap"
                />
              </div>
            </div>
          </div>
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
