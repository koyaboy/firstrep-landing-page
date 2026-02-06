"use client";

import React from "react";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Heart, Calendar, User, Mail, ArrowLeft, Share2 } from "lucide-react";

const blogPosts: Record<string, any> = {
  "consistency-over-perfection": {
    title:
      "Consistency Over Perfection: Why Your First Rep Matters More Than Your Last",
    category: "People Stories",
    author: {
      name: "Koya",
      role: "Founder",
      bio: "Building FirstRep to help people become the kind of person who follows through. Believer in accountability over perfection.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "January 15, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
    content: `
The fitness industry has lied to you. 

Every Instagram fitness influencer, every six-pack abs program, every "perfect form" YouTube video—they all tell you the same story: the goal is perfection. Perfect workouts. Perfect diet. Perfect consistency with zero days off.

But here's what nobody talks about: perfection is the enemy of consistency.

## Why Perfect Routines Kill Your Dreams

When I started working out years ago, I became obsessed with doing everything "right." The perfect 5-day split. The perfect nutrition macros. The perfect sleep schedule. I'd spend hours optimizing every variable.

And you know what happened? Life got in the way. I had a bad day at work, skipped the gym, felt guilty, and quit. I had a stressful week and ate pizza three times instead of hitting my macros, so I gave up. One missed day felt like failure.

The problem wasn't me. The problem was that I made consistency dependent on perfection. And perfection is impossible.

## The Real Transformation Happens in the Mess

Last year, I decided to try something different. Instead of aiming for perfection, I committed to showing up—no matter what. Some days that meant a full workout. Some days it meant a 10-minute walk. Some days it meant doing pushups in my apartment at 11 PM because I was traveling.

Nothing was "perfect." But something shifted.

After three months of this "imperfect" consistency, I noticed something: I was stronger than I'd ever been. Not because every workout was optimal. But because I'd actually *shown up* consistently for 90 days. No excuses. No perfection. Just showing up.

That's when it hit me. Consistency beats perfection every single time.

## Your First Rep Is More Important Than Your Last

Here's something fitness culture gets backwards: they celebrate the person who hits a personal record. But they ignore the person who just showed up, even though they didn't feel like it.

Both matter. But one changes your life.

The first rep is the hardest. It's the rep that says "I'm going to do this even though I'm tired, even though I'm busy, even though I'm not feeling it." That rep builds discipline. That rep builds identity. That rep is what separates people who transform from people who wish they would.

Your last rep? That's just the consequence of actually showing up.

## How to Build Messy Consistency

If perfection is the goal, consistency is impossible. But if consistency is the goal, perfection becomes irrelevant.

Here's how to actually do it:

**Lower the bar so you can't miss it.** Your commitment should be so small that skipping it feels weird. Not "workout for an hour." Maybe "do 10 pushups." Not "meal prep all week." Maybe "eat protein at one meal today." Once it becomes automatic, you can level up.

**Accountability beats motivation.** Motivation fades. Accountability doesn't. Find someone to check in with. Announce your commitment publicly. Use an app (like FirstRep, shameless plug). Remove the option to silently quit.

**Celebrate showing up, not the output.** Did you work out even though you were tired? That's a win. Did you do fewer reps than last week? Doesn't matter—you showed up, and that's the real victory.

**Expect to fail and build recovery into the system.** You will have bad days. You will miss workouts. You will break your commitment. That's not failure—that's life. What matters is what happens next. The system should help you get back on track in < 24 hours, not shame you into quitting.

## The Identity Shift

After enough days of imperfect consistency, something happens. You stop thinking of yourself as "someone trying to get fit." You become "someone who works out." It's subtle, but it changes everything.

That identity makes the hard days easy. When you skip a day, it feels weird—not because you feel guilty, but because it doesn't fit who you are anymore.

That's the real win. Not the abs. Not the strength. The identity.

## The Uncomfortable Truth

Here's what FirstRep is actually about: it's not about building the perfect workout routine. It's about becoming the kind of person who follows through. On fitness. On health. On your goals. On your word.

And that starts with showing up, imperfectly, one rep at a time.

Your first rep matters more than your last one. Always.
    `,
  },
  "the-accountability-paradox": {
    title:
      "The Accountability Paradox: Why Buddy Systems Work (And How to Get One)",
    category: "Systems & Tactics",
    author: {
      name: "Koya",
      role: "Founder",
      bio: "Building FirstRep to help people become the kind of person who follows through. Believer in accountability over perfection.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "December 28, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1552091160-c1fb51014e3d?q=80&w=1200&auto=format&fit=crop",
    content: `
Here's the paradox: you're more likely to keep a promise to someone else than a promise to yourself.

This isn't a character flaw. This is human nature. And it's the most underrated tool for building lasting fitness habits.

## Why We Let Ourselves Off the Hook

When you make a commitment to yourself, the consequences are internal. You feel guilty. You feel disappointed. Maybe you avoid the mirror for a while. But these are soft consequences. Your brain can rationalize them away.

When you make a commitment to someone else, the consequences are social. You feel embarrassment. You feel like you're letting someone down. You might lose their trust or respect. These consequences are sharp, immediate, and deeply uncomfortable.

That's why buddy systems work. It's not because your buddy makes you work out harder. It's because failing to show up is harder than actually showing up.

## The Three Levels of Accountability

Not all accountability is equal. There's a spectrum.

**Level 1: Passive Accountability**
You tell someone you're going to work out. They don't check in. You might remember that you told them, so you feel a tiny bit of pressure. This is weak accountability. It helps, but not much.

**Level 2: Active Accountability**
You have someone who checks in. "Did you work out today?" That simple question changes everything. Now there's a mechanism. A checkpoint. A moment where you have to answer for yourself.

**Level 3: Mutual Accountability**
You and someone else are both committed. You both have skin in the game. You both check in on each other. You celebrate wins together. You hold each other through losses. This is the strongest form because it's reciprocal—they're counting on you just as much as you're counting on them.

FirstRep is built around level 3 accountability: the buddy system. You're not alone. Someone else is watching. Someone else cares.

## The Buddy System Formula

If you're going to use accountability to transform your habits, here's what actually works:

**Find someone who's also committed.** Not someone who will just cheer you on. Someone who's also trying to build the same habit. You need mutual accountability, not motivation from an observer. They need to have their own workouts to do, their own goals to chase.

**Set a specific check-in cadence.** "We'll text each other every day." "We'll meet at 6 AM every Monday, Wednesday, Friday." Vague accountability is useless. You need a specific time and place where you show up for each other.

**Make it easy to check in.** A text. A quick voice memo. A "hit the button" moment in an app. The easier it is to check in, the more likely you'll do it consistently.

**Be specific about what you're tracking.** "I'll work out 3 times this week." Not "I'll get fit." Vague goals don't create accountability. Specific, measurable commitments do.

**Celebrate the small wins.** When your buddy shows up, acknowledge it. Send a kudos. Say "I saw you crushed it." These small celebrations reinforce the behavior.

## Why Most Buddy Systems Fail

You know what kills most buddy systems? Life. And inconsistency.

Your buddy gets busy. You both miss a day. It feels awkward to check in. You skip a week. Soon you haven't texted in two weeks and suddenly it feels weird to restart.

That's why the mechanism matters more than the person. You can have the best buddy in the world, but if there's no *system* holding you both accountable, it will fizzle out.

This is why FirstRep has check-ins built into the app. Not because we want to surveil you. But because the *act of checking in* is what creates the accountability. Without it, human nature takes over and consistency dies.

## The Uncomfortable Truth About Self-Discipline

Here's what nobody wants to hear: self-discipline is a myth.

You don't have magical willpower that allows you to keep promises to yourself. Most people don't. What you have is the ability to create systems and structures that make keeping promises *easy* and breaking them *hard*.

A buddy system is one of the most powerful structures you can build. It literally changes the cost of quitting.

If you're alone, quitting costs you some internal guilt. If you have a buddy, quitting costs you external embarrassment. And embarrassment is the most powerful motivator there is.

## How to Start Your Buddy System This Week

You don't need a perfect buddy. You need someone:
- Who's also trying to improve something
- Who will commit to checking in with you consistently
- Who you actually like and don't dread talking to
- Who will be honest with you when you're slipping

That's it. Find that person. Make the specific commitment. Set the check-in time. And watch what happens.

The accountability paradox isn't a paradox at all. It's just human psychology, weaponized for good.

You're more likely to keep a promise to someone else. Use that. Build your accountability system around it. And watch yourself transform.
    `,
  },
  "field-notes-30-day-challenge": {
    title: "Field Notes: What Happens When You Work Out for 30 Days Straight",
    category: "Field Notes",
    author: {
      name: "Koya",
      role: "Founder",
      bio: "Building FirstRep to help people become the kind of person who follows through. Believer in accountability over perfection.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    },
    date: "December 10, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    content: `
I set out to work out every single day for 30 days. Not to get a six-pack. Not to hit a lifting PR. Just to see what happened.

Here's what I learned about myself, consistency, and what it actually takes to build a habit.

## Days 1-5: The Honeymoon Phase

This part is easy. You're excited. You have momentum. You're imagining the new version of yourself. Days 1-5 feel like a victory.

I worked out every day. Felt great. Slept better. Noticed my energy was up by day three. This is when your brain is flooded with dopamine and you think "Why don't I always do this?"

**The lesson:** The beginning is easy. Anyone can be consistent for five days. This is where motivation takes you, not discipline.

## Days 6-10: The Motivation Cliff

By day six, the excitement fades. This is no longer novel. It's just something you have to do.

On day seven, I didn't feel like working out. I had a stressful day at work. My body was sore. I had fifty things on my to-do list. Every part of me wanted to skip.

But I'd committed publicly. I told people I was doing this. And I didn't want to be the guy who quits at day seven.

So I showed up. I did a mediocre 20-minute workout. It wasn't impressive. But I did it.

**The lesson:** This is where commitment replaces motivation. This is also where most people quit. You'll feel the pull to stop. You'll rationalize why today can be an exception. Resist it. The habit is won or lost in days 6-10.

## Days 11-15: The Identity Shift

Something weird happened around day 11. I stopped thinking of this as a challenge and started thinking of it as just... what I do.

My morning started differently. Before checking email or my phone, I'd ask: "When am I working out today?" Not "Should I work out today?" but "When?"

The question changed.

One day I was about to skip because of a meeting that ran late. But something felt *off* about quitting. It wasn't guilt. It was more like... that's not who I am. So I did a 10-minute workout in my apartment at 10 PM.

**The lesson:** Identity shifts before behavior changes stick. You're not just building a habit. You're building a new version of yourself. And that version doesn't skip.

## Days 16-20: The Boredom Problem

By day 16, I was bored. The novelty was completely gone. I was doing this automatically, but there was no excitement left.

Some days I tried new workouts to stay entertained. Some days I just went through the motions. My brain was looking for an out. "You've already proven you can do this. You can stop now."

The temptation to quit was strongest around day 18. Not because I was tired. But because it wasn't interesting anymore.

**The lesson:** Consistency requires tolerating boredom. The magic isn't in the exciting first week or the "I'm transforming" phase. The magic is in the boring middle, when you show up for no other reason than because you said you would.

## Days 21-25: The Second Wind

Around day 21, something shifted. I'd been doing this for three weeks. The number felt significant. I was past the halfway point.

Now I wasn't fighting myself anymore. I wasn't trying to decide whether to work out. I was just... working out. It had become automatic.

And I noticed physical changes. My clothes fit differently. I had more energy throughout the day. I slept better. These weren't dramatic transformations, but they were *real*.

**The lesson:** The compound effect takes about three weeks to become noticeable. Before that, you're working on faith. After three weeks, you have evidence. And evidence is more powerful than motivation.

## Days 26-30: The Victory Lap

The final five days were different. I knew I was going to finish. There was no doubt.

I actually enjoyed the workouts more because I knew it was the final stretch. On day 30, I did a harder workout because I wanted to, not because I had to.

**The lesson:** Momentum is real. Once you've overcome the mental hurdle, finishing is easy. The hardest part is always the middle, not the end.

## What Actually Changed

After 30 days, did I have abs? No. Did I get significantly stronger? Not really.

Here's what actually changed:

**1. My belief in myself.** I followed through on something. Not because I'm special or have willpower. But because I created a structure where quitting was harder than showing up. That matters.

**2. My morning routine.** Working out became the first thing I did. This created momentum for the rest of my day. One habit unlocked others.

**3. My identity.** I don't think of myself as "someone trying to get fit." I think of myself as "someone who works out." That identity influences 1000 small decisions I make every day.

**4. My relationship with discomfort.** I learned that discomfort is temporary. That the voice telling me to quit isn't truth, it's just noise. That I can do hard things even when I don't want to.

## The Real Insight

Here's what I learned: 30 days isn't about the physical transformation. It's about proving to yourself that you're the kind of person who follows through.

Once you believe that about yourself, everything else becomes possible.

It's not about the workouts. It's about who you become.

And that only takes 30 days of showing up.
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

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
          src={post.image || "/placeholder.svg"}
          alt={post.title}
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
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author & Date */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between py-6 border-b border-[#242935]">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-400">{post.author.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            {post.content
              .split("\n\n")
              .map((paragraph: string, index: number) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold mt-8 mb-4 text-white"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                return (
                  <p
                    key={index}
                    className="text-gray-300 leading-relaxed mb-6 text-lg"
                  >
                    {paragraph}
                  </p>
                );
              })}
          </div>

          {/* Author Bio */}
          <div className="bg-[#242935] rounded-xl p-8 mb-12 border border-[#333]">
            <div className="flex gap-4">
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h3 className="font-bold text-lg mb-1">{post.author.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{post.author.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {post.author.bio}
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
                    className="bg-gradient-to-r from-[#ff6b53] to-[#ff6b53]/90 text-white rounded-lg px-6 py-3 font-medium transition-all hover:from-[#ff6b53]/90 hover:to-[#ff6b53]/80 hover:shadow-lg hover:shadow-[#ff6b53]/20 whitespace-nowrap"
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
