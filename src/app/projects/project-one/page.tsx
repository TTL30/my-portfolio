"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  "/projects/project-one/slide1.jpg",
  "/projects/project-one/slide2.jpg",
  "/projects/project-one/slide3.jpg",
  // Add more slides as needed
];

export default function ProjectOne() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen bg-[#f8f7ee] px-6 py-14 lg:px-24 lg:py-24">
      <Link href="/" className="text-[#193378] underline mb-8 inline-block">&larr; Back to Portfolio</Link>
      
      {/* Carousel - full width */}
      <div className="mb-12 flex flex-col items-center w-full">
        <div className="relative w-full max-w-5xl">
          <Image
            src={slides[current]}
            alt={`Slide ${current + 1}`}
            width={800}
            height={450}
            quality={100}
            className="rounded-lg object-contain w-full h-auto"
          />
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#193378] text-white rounded-full px-3 py-1"
            aria-label="Previous slide"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#193378] text-white rounded-full px-3 py-1"
            aria-label="Next slide"
          >
            &#8594;
          </button>
        </div>
        <div className="mt-2 text-[#193378]">
          Slide {current + 1} / {slides.length}
        </div>
      </div>

      {/* Demo Video - full width below */}
      <div className="mb-12 flex flex-col items-center w-full">
        <h2 className="text-xl font-bold text-[#193378] mb-4">Demo Video</h2>
        <video
          controls
          className="rounded-lg w-full max-w-4xl shadow"
          poster="/projects/project-one/poster.png"
        >
          <source src="/projects/project-one/0722.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
                    </div>

      <div className="mb-12 flex flex-col items-center w-full">

      <a
        href="https://github.com/yourusername/project-one"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-[#193378] text-white font-semibold rounded hover:bg-[#3575fe] transition"
      >
        View on GitHub
      </a>
            </div>

    </div>
  );
}