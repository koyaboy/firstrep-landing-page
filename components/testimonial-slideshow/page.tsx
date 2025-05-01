// src/components/TestimonialSlideshow.jsx
import React from "react";
import "../../styles/styles.css";
const TestimonialSlideshow = () => {
  const testimonials = [
    {
      initials: "JM",
      name: "Jamie M.",
      streak: "2 month streak",
      quote:
        "I've tried countless fitness apps, but FirstRep is the only one that's helped me stay consistent. The buddy system keeps me accountable, and I love seeing my streak grow!",
    },
    {
      initials: "TK",
      name: "Taylor K.",
      streak: "45 day streak",
      quote:
        "As someone who always struggled with consistency, FirstRep has been a game-changer. The reminders and check-ins make it easy to stay on track, even on busy days.",
    },
    {
      initials: "RL",
      name: "Ryan L.",
      streak: "3 month streak",
      quote:
        "I absolutely love FirstRep. The focus on accountability rather than just workouts has made all the difference for me.",
    },
  ];

  return (
    <div className="overflow-hidden relative">
      <div className="flex animate-scroll md:animate-scroll-md w-max gap-8">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-[80vw] md:w-[30vw] px-4">
            <div className="bg-[#1a1f2e] h-[300px] md:h-[280px] p-6 rounded-xl transform transition-all duration-500 hover:scale-105 hover:shadow-xl flex flex-col justify-center">
              {" "}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#ff6b53]/20 flex items-center justify-center mr-4">
                  <span className="text-[#ff6b53] font-bold">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.streak}</p>
                </div>
              </div>
              <p className="text-gray-300 overflow-hidden text-ellipsis line-clamp-4">
                {testimonial.quote}
              </p>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlideshow;
