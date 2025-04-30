"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function AnimationWrapper({ children, className = "", delay = 0 }: AnimationWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("section-visible")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  return (
    <div ref={sectionRef} className={`section-hidden ${className}`}>
      {children}
    </div>
  )
}
