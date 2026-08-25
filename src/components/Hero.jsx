import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Wifi,
  CheckCircle2,
  Headphones,
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import mascotImg from "@/assets/mascot.png";
import mapsImg from "@/assets/maps.png";
import layanan1 from "@/assets/layanan1.png";
import promoImg from "@/assets/promo.png";
import promoImg1 from "@/assets/promo1.jpeg"
import { TextType } from "@/components/ui/text-type";
import { DotField } from "@/components/ui/dot-field";

export function Hero() {
  const features = [
    { icon: Wifi, text: "Kecepatan Tinggi" },
    { icon: CheckCircle2, text: "Jaringan Stabil" },
    { icon: Headphones, text: "Support 24/7" },
    { icon: MapPin, text: "Lokal & Terpercaya" },
  ];

  const slides = [
    {
      id: "promo-umkm",
      image: promoImg,
      alt: "WiFi Manage Service Untuk UMKM - SATAK",
      badge: "Promo UMKM 200Mbps",
      title: "WiFi Manage Service UMKM",
    },
    {
      id: "promo-umkm",
      image: promoImg1,
      alt: "WiFi Manage Service Untuk UMKM - SATAK",
      badge: "Promo UMKM 200Mbps",
      title: "WiFi Manage Service UMKM",
    },
    {
      id: "mascot",
      image: mascotImg,
      alt: "SATAK Mascot - Konek Terus",
      badge: "Maskot Resmi",
      title: "SATAK Konek Terus",
    },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle feature card focus
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  // Autoplay for Hero Media Slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-6 pb-16 lg:pt-10 lg:pb-20">
      {/* React Bits Interactive DotField Background */}
      <DotField
        dotColor="#2563eb"
        dotSize={1.5}
        gap={24}
        baseOpacity={0.35}
        hoverRadius={120}
        hoverStrength={8}
      />

      {/* Background Glow decor */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-400/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column Text Content (Cols 1-6, Order 2 on mobile, Order 1 on desktop) */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-6 lg:space-y-8 text-left">
            {/* Main Animated Headline with zero layout shift */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.18] min-h-[2.3em]">
              <i>#TerimaJadi</i> <br />
              <TextType
                text={["Anda Fokus Mengajar", "Kembangkan Bisnis", "Internetnya Kami yang Urus"]}
                typingSpeed={80}
                deletingSpeed={45}
                pauseDuration={1000}
                className="text-blue-600 text-2xl sm:text-4xl lg:text-5xl inline-block max-w-full leading-tight"
              />
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 max-w-xl leading-relaxed font-medium">
              Solusi internet andal untuk rumah, bisnis, sekolah, hotel, dan kantor.
              Koneksi stabil, support lokal, harga bersahabat.
            </p>

            {/* 4 Feature Badges Grid (Compact & Perfectly Fitted) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2 max-w-xl">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const isFocused = idx === activeCardIndex;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCardIndex(idx)}
                    className={`relative flex items-center gap-2 bg-white p-2.5 sm:p-3 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isFocused
                        ? "border-blue-600 shadow-lg shadow-blue-500/20 scale-[1.03] opacity-100 z-10"
                        : "border-gray-100 shadow-xs opacity-60 scale-100 hover:opacity-90"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                        isFocused ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[11px] sm:text-xs font-bold leading-tight transition-colors duration-300 ${
                        isFocused ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {item.text}
                    </span>

                    {/* TrueFocus Active Corner Frame Overlay */}
                    {isFocused && (
                      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-300">
                        <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-blue-600" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-blue-600" />
                        <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-blue-600" />
                        <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-blue-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons (Inline side-by-side on mobile & desktop) */}
            <div className="flex items-center gap-2.5 sm:gap-4 pt-3">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-1.5 sm:gap-2 shadow-xl shadow-blue-600/30 text-xs sm:text-base px-3.5 sm:px-6 py-2.5 sm:py-3 cursor-pointer">
                Lihat Layanan
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button size="lg" variant="secondary" className="font-semibold border-blue-600 text-blue-600 hover:bg-blue-50 text-xs sm:text-base px-3.5 sm:px-6 py-2.5 sm:py-3 cursor-pointer">
                Cek Jangkauan
              </Button>
            </div>
          </div>

          {/* Right Column Interactive Media Slider / Carousel (Order 1 on mobile, Order 2 on desktop) */}
          <div
            className="order-1 lg:order-2 lg:col-span-6 relative flex justify-center items-center group -mt-2 lg:-mt-6 lg:translate-x-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Blue glowing aura ring */}
            <div className="absolute w-[440px] h-[440px] sm:w-[580px] sm:h-[580px] bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-30 blur-3xl rounded-full" />

            <div className="relative z-10 w-full">
              
              {/* High-Impact Media Container Box */}
              <div className="relative h-[360px] sm:h-[460px] lg:h-[500px] w-full flex items-center justify-center overflow-hidden rounded-3xl p-2 sm:p-4 bg-white/40 border border-gray-100/60 shadow-2xl backdrop-blur-xs">
                {slides.map((slide, index) => {
                  const isActive = index === currentSlideIndex;

                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 p-2 sm:p-4 flex items-center justify-center transition-all duration-700 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-100 translate-x-0"
                          : "opacity-0 scale-95 pointer-events-none translate-x-8"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full h-full object-contain drop-shadow-2xl rounded-2xl hover:scale-[1.02] transition-transform duration-500"
                      />
                    </div>
                  );
                })}

                {/* Manual Navigation Arrows */}
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous Slide"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-gray-800 shadow-xl hover:bg-blue-600 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextSlide}
                  aria-label="Next Slide"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md text-gray-800 shadow-xl hover:bg-blue-600 hover:text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Slider Pagination Indicators / Dots */}
              <div className="flex items-center justify-center gap-2.5 mt-5 relative z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentSlideIndex
                        ? "w-9 bg-blue-600 shadow-md shadow-blue-600/40"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
