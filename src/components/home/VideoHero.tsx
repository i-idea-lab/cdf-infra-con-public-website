"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";

const videos = [
  {
    src: "/videos/khedCrop.mp4",
    title: "Highway Road",
  },
  {
    src: "/videos/herosection_new_part1.mp4",
    title: "Valley Corridor Reel 1",
  },
  {
    src: "/videos/herosection_new_part2.mp4",
    title: "Valley Corridor Reel 2",
  },
  {
    src: "/videos/herosection_new_part3.mp4",
    title: "Valley Corridor Reel 3",
  },
];

export default function VideoHero() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      // Ensure the video strictly starts from frame 0.0s without jumping ahead
      videoRef.current.currentTime = 0;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay handled safely
        });
      }
    }
  }, [currentVideoIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById("flagship-projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[640px] sm:h-[720px] lg:h-[820px] bg-black overflow-hidden select-none flex items-center justify-center">
      {/* Background Video (100% crisp, no opacity reduction, no backdrop blur) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          key={videos[currentVideoIndex].src}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
          src={videos[currentVideoIndex].src}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          onLoadedData={() => {
            if (videoRef.current && currentVideoIndex === 0) {
              videoRef.current.currentTime = 0;
            }
          }}
        />
      </div>

      {/* Clean, crisp dark overlay matching live site (No blur) */}
      <div className="absolute inset-0 bg-black/45 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full">
        <div className="max-w-3xl space-y-6">
          {/* Accreditation Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>ISO 9001:2015 Certified • Premier Infrastructure Firm</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Engineering for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-300 to-amber-400">
              Sustainable Infrastructure
            </span>
          </h1>

          {/* Quick Metrics */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium bg-black/50 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>100+ Major Highways Supervised</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium bg-black/50 px-3.5 py-2 rounded-xl border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold" />
              <span>Over Two Decades of Excellence</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-gold to-brand-amber hover:from-amber-400 hover:to-amber-600 text-brand-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-xl hover:shadow-amber-500/30 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Landmark Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm transition-all"
            >
              <span>Consulting Services</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Video Reel Sequence Indicator in bottom-right */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full border border-white/15 text-xs text-slate-300 backdrop-blur-sm">
        <span className="text-[11px] font-mono text-amber-300 font-semibold">
          Reel {currentVideoIndex + 1}/{videos.length}: {videos[currentVideoIndex].title}
        </span>
        <div className="flex items-center gap-1.5 ml-1">
          {videos.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentVideoIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentVideoIndex ? "w-6 bg-brand-gold" : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Switch to Reel ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Pulsing Scroll Indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-slate-300 hover:text-brand-gold transition-colors focus:outline-none group"
        aria-label="Scroll to Landmark Projects"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-300 group-hover:text-brand-gold drop-shadow">
          View Flagship Corridors
        </span>
        <ChevronDown className="w-5 h-5 animate-bounce text-brand-gold" />
      </button>
    </section>
  );
}
