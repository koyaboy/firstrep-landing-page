"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Users,
  Bell,
  Calendar,
  BarChart,
  Heart,
  ArrowRight,
  BookOpen,
  MapPin,
  ThumbsUp,
  Dumbbell,
  FileText,
  X,
  Menu,
  Smartphone,
  Globe,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AutoCarousel from "@/components/auto-carousel/page";
import "../styles/styles.css";
import TestimonialSlideshow from "@/components/testimonial-slideshow/page";
import { useState } from "react";

export default function LandingPage() {
  const heroImages = [
    {
      src: "/images/hero-2.jpg",
      alt: "Workout partners",
    },
    {
      src: "/images/hero-4.jpg",
      alt: "Workout partners",
    },
    {
      src: "/images/hero-3.jpg",
      alt: "Workout partners",
    },
    {
      src: "/images/hero-5.jpg",
      alt: "Workout Partners",
    },
    {
      src: "/images/hero-1.jpg",
      alt: "Workout Partners",
    },
  ];

  const buddyMockupImages = [
    {
      src: "/images/buddies-mockup/buddy-page.png",
      alt: "Person lifting weights",
    },
    {
      src: "/images/buddies-mockup/buddy-nearby.png",
      alt: "Person lifting weights",
    },
    {
      src: "/images/buddies-mockup/buddy-results.png",
      alt: "Person lifting weights",
    },
  ];

  const progressMockupImages = [
    {
      src: "/images/progress-mockups/dashboard.png",
      alt: "Person lifting weights",
    },
    {
      src: "/images/progress-mockups/calendar.png",
      alt: "Person lifting weights",
    },
    {
      src: "/images/progress-mockups/reminders.png",
      alt: "Person lifting weights",
    },
    {
      src: "/images/progress-mockups/progress-photos.png",
      alt: "Person lifting weights",
    },
  ];

  function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 p-2 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#1a1f2e] border-b border-[#242935] shadow-lg animate-slide-down">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <Link
                href="#how-it-works"
                className="text-sm text-gray-300 hover:text-white transition-colors py-2 border-b border-[#242935]"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-sm text-gray-300 hover:text-white transition-colors py-2 border-b border-[#242935]"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-sm text-gray-300 hover:text-white transition-colors py-2 border-b border-[#242935]"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="#faq"
                className="text-sm text-gray-300 hover:text-white transition-colors py-2 border-b border-[#242935]"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>
              <div className="mt-4">
                <p className="text-xs text-gray-400 mb-3 text-center">
                  Try FirstRep
                </p>
                <div className="flex flex-col gap-2 flex-wrap">
                  <Link
                    href="https://app.firstrep.xyz"
                    target="_blank"
                    className="inline-flex h-10 px-4 py-2 bg-[#ff6b53] text-white rounded-md text-sm font-medium transition-all hover:bg-[#ff6b53]/90 justify-center items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Web App
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      href="https://appdistribution.firebase.dev/i/36ea9f53c7e33092"
                      target="_blank"
                      className="inline-flex h-10 px-3 py-2 bg-[#242935] text-white rounded-md text-sm font-medium transition-all hover:bg-[#242935]/90 justify-center items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <Smartphone className="w-4 h-4 mr-1" />
                      Android
                    </Link>
                    <Link
                      href="https://testflight.apple.com/join/vGAsKpGg"
                      target="_blank"
                      className="inline-flex h-10 px-3 py-2 bg-[#242935] text-white rounded-md text-sm font-medium transition-all hover:bg-[#242935]/90 justify-center items-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <Smartphone className="w-4 h-4 mr-1" />
                      iOS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1f2e] text-white">
      {/* Header */}
      <header className="border-b border-[#242935] sticky top-0 z-50 bg-[#1a1f2e]/95 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-[#ff6b53]" />
            <span className="text-xl font-bold">FirstRep</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {/* <Link
              href="#features"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link> */}
            <Link
              href="#how-it-works"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2">
              <Link
                href="https://app.firstrep.xyz"
                target="_blank"
                className="inline-flex h-9 px-4 py-2 bg-[#ff6b53] text-white rounded-md text-sm font-medium transition-all hover:bg-[#ff6b53]/90 hover:scale-105 items-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                Web App
              </Link>
              <Link
                href="https://appdistribution.firebase.dev/i/36ea9f53c7e33092"
                target="_blank"
                className="inline-flex h-9 px-3 py-2 bg-[#242935] text-white rounded-md text-sm font-medium transition-all hover:bg-[#242935]/90 hover:scale-105 items-center"
              >
                <Smartphone className="w-4 h-4 mr-1" />
                Android
              </Link>
              <Link
                href="https://testflight.apple.com/join/vGAsKpGg"
                target="_blank"
                className="inline-flex h-9 px-3 py-2 bg-[#242935] text-white rounded-md text-sm font-medium transition-all hover:bg-[#242935]/90 hover:scale-105 items-center"
              >
                <Smartphone className="w-4 h-4 mr-1" />
                iOS
              </Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fitness is about{" "}
                <span className="text-[#ff6b53]">accountability</span>, not
                intensity
              </h1>
              <p className="text-lg text-gray-300 md:text-xl">
                FirstRep helps beginners and inconsistent individuals build
                lasting fitness habits through social connection and
                accountability, not just workouts.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-400 font-medium">
                  Choose your platform:
                </p>
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <Link
                    href="https://app.firstrep.xyz"
                    target="_blank"
                    className="inline-flex h-12 px-6 items-center justify-center bg-[#ff6b53] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#ff6b53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b53]/20"
                  >
                    <Globe className="w-5 h-5 mr-2" />
                    Try Web App
                  </Link>
                  <div className="flex gap-3">
                    <Link
                      href="https://appdistribution.firebase.dev/i/36ea9f53c7e33092"
                      target="_blank"
                      className="inline-flex h-12 px-4 items-center justify-center bg-[#242935] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#242935]/90 hover:scale-105 flex-1 sm:flex-none"
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      Android Beta
                    </Link>
                    <Link
                      href="https://testflight.apple.com/join/vGAsKpGg"
                      target="_blank"
                      className="inline-flex h-12 px-4 items-center justify-center bg-[#242935] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#242935]/90 hover:scale-105 flex-1 sm:flex-none"
                    >
                      <Smartphone className="w-5 h-5 mr-2" />
                      iOS Beta
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-[#242935] shadow-2xl transform transition-all duration-700 hover:scale-[1.02] animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b53]/10 to-transparent opacity-60 z-10"></div>
              {/* <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                alt="Person working out with determination"
                width={650}
                height={400}
                className="w-full h-auto object-cover"
              /> */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#1a1f2e] to-transparent">
                <div className="bg-[#242935]/80 backdrop-blur-sm rounded-xl p-4 border border-[#333] transform transition-all duration-500 hover:scale-[1.02]">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-30%20at%2018.10.42-8VjJUWeX9auzkWynxlxj8HmgFjtEwX.png"
                    alt="FirstRep App Dashboard"
                    width={650}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div> */}
              <AutoCarousel images={heroImages} type="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-[#242935] animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Most Fitness Journeys Fail
            </h2>
            <p className="text-lg text-gray-300">
              It's not about motivation or willpower. The real problem is lack
              of accountability and consistency.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inconsistency</h3>
              <p className="text-gray-300">
                Most people start strong but quickly fall off track without
                proper accountability systems.
              </p>
            </div>
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Isolation</h3>
              <p className="text-gray-300">
                Working out alone makes it easy to skip sessions with no one to
                hold you accountable.
              </p>
            </div>
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">No Tracking</h3>
              <p className="text-gray-300">
                Without tracking progress, it's hard to stay motivated and see
                how far you've come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="how-it-works" className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built for Accountability, Not Just Workouts
            </h2>
            <p className="text-lg text-gray-300">
              FirstRep focuses on helping you build consistency through features
              designed to keep you on track.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className="bg-[#242935] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <Dumbbell className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">
                Auto-generated Workouts
              </h3>
              <p className="text-gray-300">
                Get personalized workout plans based on your goals—no decision
                fatigue or guesswork required.
              </p>
            </div>
            <div
              className="bg-[#242935] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">In-app Workout Guides</h3>
              <p className="text-gray-300">
                Clear instructions and visual guides so you always know exactly
                what to do during your workout.
              </p>
            </div>
            <div
              className="bg-[#242935] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-[#ff6b53]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Learning Series</h3>
              <p className="text-gray-300">
                Learn the basics without overwhelm through bite-sized,
                easy-to-follow educational content.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="order-2 md:order-1 animate-slide-up">
              <div className="space-y-8">
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Buddy System</h3>
                    <p className="text-gray-300">
                      Connect with workout partners who will keep you
                      accountable and celebrate your wins.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Find Nearby Buddies
                    </h3>
                    <p className="text-gray-300">
                      Discover workout partners near your location for in-person
                      accountability and motivation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Send Kudos & Encouragement
                    </h3>
                    <p className="text-gray-300">
                      Keep each other motivated with positive reinforcement and
                      supportive messages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative rounded-xl overflow-hidden h-[750px] flex justify-center animate-slide-in-right">
              <AutoCarousel images={buddyMockupImages} type="mockup" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* <div className="relative rounded-xl overflow-hidden h-full flex justify-center shadow-sm animate-slide-in-left">
              <AutoCarousel images={progressMockupImages} type="mockup" />
            </div> */}
            <div className="relative rounded-xl overflow-hidden h-[750px] flex justify-center animate-slide-in-left">
              <AutoCarousel images={progressMockupImages} type="mockup" />
            </div>
            <div className="animate-slide-up">
              <div className="space-y-8">
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Progress Tracking
                    </h3>
                    <p className="text-gray-300">
                      Track your workouts and see your progress over time with
                      visual statistics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bell className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Smart Reminders</h3>
                    <p className="text-gray-300">
                      Get personalized notifications that adapt to your schedule
                      and keep you on track.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 transform transition-all duration-500 hover:translate-x-2">
                  <div className="w-12 h-12 bg-[#ff6b53]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-[#ff6b53]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      ...and more coming soon!
                    </h3>
                    <p className="text-gray-300">
                      We're constantly adding new features to help you stay
                      consistent and achieve your fitness goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      {/* <section
        id="how-it-works"
        className="py-16 md:py-24 bg-[#242935] animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              HOW IT WORKS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Three Simple Steps to Consistency
            </h2>
            <p className="text-lg text-gray-300">
              FirstRep makes it easy to build lasting fitness habits with a
              simple, effective approach.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-[#1a1f2e] p-8 rounded-xl relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff6b53] rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                Create Your Account
              </h3>
              <p className="text-gray-300 mb-4">
                Sign up in seconds and set your fitness goals and preferences.
              </p>
              <div className="rounded-lg overflow-hidden border border-[#333] transform transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-30%20at%2018.12.00-e758XrtNExLqQa9YvnjNdToW75AciS.png"
                  alt="FirstRep Sign Up"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              className="bg-[#1a1f2e] p-8 rounded-xl relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff6b53] rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                Connect with Buddies
              </h3>
              <p className="text-gray-300 mb-4">
                Find workout partners who will keep you accountable and
                motivated.
              </p>
              <div className="rounded-lg overflow-hidden border border-[#333] transform transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-30%20at%2018.10.55-PeaCLvUqsj1iSjrW9NwMypwGbgWDSQ.png"
                  alt="FirstRep Buddies"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div
              className="bg-[#1a1f2e] p-8 rounded-xl relative transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#ff6b53] rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Build Your Streak</h3>
              <p className="text-gray-300 mb-4">
                Check in daily, track your progress, and watch your consistency
                grow.
              </p>
              <div className="rounded-lg overflow-hidden border border-[#333] transform transition-all duration-500 hover:scale-[1.02]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-30%20at%2018.11.28-5DuD85baYA75GRk9jyURfsZ0BRQudZ.png"
                  alt="FirstRep Progress"
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Founder Story */}
      <section className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#242935] p-8 md:p-12 rounded-2xl transform transition-all duration-700 hover:shadow-2xl animate-slide-up">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 rounded-full bg-[#ff6b53]/20 flex items-center justify-center flex-shrink-0">
                {/* <Heart className="h-12 w-12 text-[#ff6b53]" /> */}
                <Image
                  src="/images/logo-koya.jpg"
                  alt="logo-koya"
                  width={160}
                  height={160}
                  className="rounded-full"
                />
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
                  MY STORY
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Why I Created FirstRep
                </h2>
                <p className="text-gray-300 mb-4">
                  "After years of starting and stopping my fitness journey, I
                  realized the problem wasn't the workouts—it was consistency. I
                  created FirstRep to solve the real problem: accountability.
                  This isn't just about getting fit; it's about becoming the
                  kind of person who follows through on commitments."
                </p>
                <p className="text-[#ff6b53] font-medium">
                  — Koya, FirstRep Founder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section
        id="testimonials"
        className="py-16 md:py-24 bg-[#242935] animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Are Saying
            </h2>
            <p className="text-lg text-gray-300">
              FirstRep is helping people build lasting fitness habits and
              transform their lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b53]/20 flex items-center justify-center mr-4">
                  <span className="text-[#ff6b53] font-bold">JM</span>
                </div>
                <div>
                  <h4 className="font-bold">Jamie M.</h4>
                  <p className="text-sm text-gray-400">2 month streak</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've tried countless fitness apps, but FirstRep is the only one
                that's helped me stay consistent. The buddy system keeps me
                accountable, and I love seeing my streak grow!"
              </p>
            </div>
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b53]/20 flex items-center justify-center mr-4">
                  <span className="text-[#ff6b53] font-bold">TK</span>
                </div>
                <div>
                  <h4 className="font-bold">Taylor K.</h4>
                  <p className="text-sm text-gray-400">45 day streak</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As someone who always struggled with consistency, FirstRep has
                been a game-changer. The reminders and check-ins make it easy to
                stay on track, even on busy days."
              </p>
            </div>
            <div
              className="bg-[#1a1f2e] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b53]/20 flex items-center justify-center mr-4">
                  <span className="text-[#ff6b53] font-bold">RL</span>
                </div>
                <div>
                  <h4 className="font-bold">Ryan L.</h4>
                  <p className="text-sm text-gray-400">3 month streak</p>
                </div>
              </div>
              <p className="text-gray-300">
                "I've never been able to stick with a fitness routine until
                FirstRep. The focus on accountability rather than just workouts
                has made all the difference for me."
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <section
        id="testimonials"
        className="py-16 md:py-24 bg-[#242935] animate-fade-in"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Users Are Saying
            </h2>
            <p className="text-lg text-gray-300">
              FirstRep is helping people build lasting fitness habits and
              transform their lives.
            </p>
          </div>

          <TestimonialSlideshow />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              PRICING
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300">
              Choose the plan that works best for your fitness journey.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> */}
          <div className="flex justify-center max-w-lg mx-auto">
            {/* <div
              className="bg-[#242935] p-8 rounded-xl border border-[#333] transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "100ms" }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-4">
                  $0
                  <span className="text-gray-400 text-lg font-normal">
                    /month
                  </span>
                </p>
                <p className="text-gray-300">
                  Perfect for getting started with accountability.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Basic progress tracking</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Connect with 2 workout buddies</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Daily check-ins</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Basic reminders</span>
                </li>
              </ul>
              <Link
                href="https://firstrep.app/early-access"
                className="inline-flex w-full h-12 items-center justify-center bg-[#1a1f2e] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#1a1f2e]/90 hover:scale-105"
              >
                Get Started
              </Link>
            </div> */}
            <div
              className="bg-[#242935] p-8 rounded-xl border border-[#ff6b53] transform transition-all duration-500 hover:scale-105 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-[#ff6b53] text-white rounded-full text-sm font-medium mb-2">
                  RECOMMENDED
                </div>
                <h3 className="text-xl font-bold mb-2">Premium (Beta)</h3>
                <p className="text-3xl font-bold mb-4">
                  {/* $9.99 */}$0
                  <span className="text-gray-400 text-lg font-normal">
                    /month
                  </span>
                </p>
                <p className="text-gray-300">
                  {/* Everything you need for maximum accountability. */}
                  Try all premium features at no cost while we’re in beta. Help
                  shape the future of FirstRep.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Advanced progress analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Unlimited workout buddies</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Smart reminders & notifications</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Personalized accountability coach</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-[#ff6b53] mr-2" />
                  <span>Premium workout templates</span>
                </li>
              </ul>
              <div className="space-y-3">
                <p className="text-xs text-gray-400 text-center">
                  Available on:
                </p>
                <Link
                  href="https://app.firstrep.xyz"
                  target="_blank"
                  className="inline-flex w-full h-12 items-center justify-center bg-[#ff6b53] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#ff6b53]/90 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b53]/20"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Web App
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="https://appdistribution.firebase.dev/i/36ea9f53c7e33092"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center bg-[#1a1f2e] text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#1a1f2e]/90 hover:scale-105"
                  >
                    <Smartphone className="w-4 h-4 mr-1" />
                    Android
                  </Link>
                  <Link
                    href="https://testflight.apple.com/join/vGAsKpGg"
                    target="_blank"
                    className="inline-flex h-10 items-center justify-center bg-[#1a1f2e] text-white rounded-md text-sm font-medium transition-all duration-300 hover:bg-[#1a1f2e]/90 hover:scale-105"
                  >
                    <Smartphone className="w-4 h-4 mr-1" />
                    iOS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-[#242935] animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
            <div className="inline-block px-3 py-1 bg-[#ff6b53]/20 text-[#ff6b53] rounded-full text-sm font-medium mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300">
              Everything you need to know about FirstRep.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  Is FirstRep only for beginners?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  While FirstRep is designed with beginners in mind, it's
                  perfect for anyone who struggles with consistency. Whether
                  you're just starting your fitness journey or you've been
                  working out for years but struggle to stay consistent,
                  FirstRep can help.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  Does FirstRep provide workout plans?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  Yes, FirstRep offers basic workout templates, but our primary
                  focus is on accountability. Premium users get access to more
                  personalized workout plans, but the core value of FirstRep is
                  helping you stay consistent with whatever fitness routine you
                  choose.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-3"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  How does the buddy system work?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  The buddy system connects you with other FirstRep users who
                  share similar fitness goals. You can see when your buddies
                  check in, message them for support, and celebrate each other's
                  streaks. This social accountability is a powerful motivator
                  that helps you stay consistent.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-4"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  Can I cancel my subscription anytime?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  Yes, you can cancel your Premium subscription at any time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-5"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  Is my data private?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  We take your privacy seriously. Your personal information is
                  never shared without your consent. You have full control over
                  what information is visible to your workout buddies and what
                  remains private.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-6"
                className="border border-[#333] rounded-lg overflow-hidden transform transition-all duration-300 hover:border-[#ff6b53]/50"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-[#1a1f2e]/50">
                  How can I contact support?
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-[#1a1f2e]/30 text-gray-300">
                  For bug reports, feature requests, or any support questions,
                  email us at koya@firstrep.xyz or use the contact form in our
                  mobile app.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="early-access" className="py-16 md:py-24 animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#ff6b53]/90 to-[#ff6b53]/70 p-8 md:p-12 rounded-2xl text-center transform transition-all duration-700 hover:shadow-2xl animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Lasting Fitness Habits?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join FirstRep today and transform your approach to fitness through
              accountability, not just workouts.
            </p>
            <div className="space-y-4">
              <Link
                href="https://app.firstrep.xyz"
                target="_blank"
                className="inline-flex h-14 px-8 items-center justify-center bg-[#1a1f2e] text-white rounded-md text-lg font-medium transition-all duration-300 hover:bg-[#1a1f2e]/90 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              >
                <Globe className="w-5 h-5 mr-2" />
                Try Web App <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="https://appdistribution.firebase.dev/i/36ea9f53c7e33092"
                  target="_blank"
                  className="inline-flex h-12 px-6 items-center justify-center bg-[#242935] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#242935]/90 hover:scale-105 hover:shadow-lg"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Test Android Beta
                </Link>
                <Link
                  href="https://testflight.apple.com/join/vGAsKpGg"
                  target="_blank"
                  className="inline-flex h-12 px-6 items-center justify-center bg-[#242935] text-white rounded-md text-base font-medium transition-all duration-300 hover:bg-[#242935]/90 hover:scale-105 hover:shadow-lg"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Test iOS Beta
                </Link>
              </div>
            </div>
            <p className="text-sm mt-4">
              By signing up, you agree to our{" "}
              <Link href="/terms">Terms of Service</Link> and{" "}
              <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#242935] animate-fade-in">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-[#ff6b53]" />
                <span className="text-xl font-bold">FirstRep</span>
              </div>
              <p className="text-gray-400 mb-4">
                Building consistency through accountability.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff6b53] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff6b53] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#ff6b53] transition-colors duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Fitness Tips
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    GDPR
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#333] text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} FirstRep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
