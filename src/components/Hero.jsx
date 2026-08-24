import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Zap, Wifi, CheckCircle2, Headphones, MapPin, ArrowRight } from "lucide-react";
import mascotImg from "@/assets/mascot.png";
import { TextType } from "@/components/ui/text-type";
import { DotField } from "@/components/ui/dot-field";

export function Hero() {
  const features = [
    { icon: Wifi, text: "Kecepatan Tinggi" },
    { icon: CheckCircle2, text: "Jaringan Stabil" },
    { icon: Headphones, text: "Support 24/7" },
    { icon: MapPin, text: "Lokal & Terpercaya" },
  ];

  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % features.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-10 pb-16 lg:py-20">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Pill Badge */}

            {/* Main Animated Headline with zero layout shift */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.2] min-h-[2.3em]">
              <i>#TerimaJadi</i> <br />
              <TextType
                text={["Anda Fokus Mengajar", "Kembangkan Bisnis", "Internetnya Kami yang Urus"]}
                typingSpeed={80}
                deletingSpeed={45}
                pauseDuration={1000}
                className="text-blue-600 text-5xl inline-block min-w-[220px] sm:min-w-[320px]"
              />
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed font-medium">
              Solusi internet andal untuk rumah, bisnis, sekolah, hotel, dan kantor.
              Koneksi stabil, support lokal, harga bersahabat.
            </p>

            {/* 4 Feature Badges Grid with Card-Level TrueFocus */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                const isFocused = idx === activeCardIndex;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveCardIndex(idx)}
                    className={`relative flex items-center gap-2.5 bg-white p-3 rounded-2xl border transition-all duration-500 cursor-pointer ${
                      isFocused
                        ? "border-blue-600 shadow-xl shadow-blue-500/20 scale-[1.04] opacity-100 z-10"
                        : "border-gray-100 shadow-sm opacity-50 blur-[0.4px] scale-100 hover:opacity-80 hover:blur-none"
                    }`}
                  >
                    <div
                      className={`p-2 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                        isFocused ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-bold leading-tight transition-colors duration-300 ${
                        isFocused ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {item.text}
                    </span>

                    {/* TrueFocus Active Corner Frame Overlay */}
                    {isFocused && (
                      <div className="absolute inset-0 pointer-events-none rounded-2xl border-2 border-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.35)] transition-all duration-300">
                        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-blue-600" />
                        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-blue-600" />
                        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-blue-600" />
                        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-blue-600" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold gap-2 shadow-xl shadow-blue-600/30">
                Lihat Layanan
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="secondary" className="font-semibold border-blue-600 text-blue-600 hover:bg-blue-50">
                Cek Jangkauan
              </Button>
            </div>
          </div>

          {/* Right Column Mascot Graphic - Enlarged */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Blue glowing aura ring */}
            <div className="absolute w-[420px] h-[420px] sm:w-[540px] sm:h-[540px] bg-gradient-to-tr from-blue-600 to-cyan-400 opacity-25 blur-3xl rounded-full" />

            <div className="relative z-10 w-full max-w-[650px] lg:scale-115 xl:scale-125 transition-transform duration-500">
              <img
                src={mascotImg}
                alt="SATAK Mascot - Konek Terus"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
