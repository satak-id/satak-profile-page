import React from "react";
import { ArrowRight } from "lucide-react";
import { TiltedCard } from "@/components/ui/tilted-card";
import layanan1 from "@/assets/layanan1.png";
import layanan2 from "@/assets/layanan2.png";
import layanan3 from "@/assets/layanan3.png";

export function Services() {
  const services = [
    {
      id: "internet",
      title: "INTERNET SERVICE",
      description: "Layanan internet cepat, stabil, dan tanpa batas untuk rumah, sekolah, dan bisnis.",
      image: layanan1,
    },
    {
      id: "cloud",
      title: "SATAK CLOUD",
      description: "Penyimpanan cloud aman dan server handal untuk efisiensi kinerja digital bisnis Anda.",
      image: layanan2,
    },
    {
      id: "digital",
      title: "SaaS & LAYANAN DIGITAL",
      description: "Ekosistem software cloud dan layanan digital terintegrasi untuk operasional Anda.",
      image: layanan3,
    },
  ];

  return (
    <section id="layanan" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Layanan
          </h2>
          <div className="w-12 h-1.5 bg-blue-600 rounded-full mx-auto mt-2" />
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mt-2.5 font-medium">
            Solusi internet andal dan layanan digital terintegrasi untuk Anda.
          </p>
        </div>

        {/* Perfectly Centered 3D Service Cards Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <TiltedCard
              key={service.id}
              rotateAmplitude={12}
              scaleOnHover={1.04}
              showGlare={true}
              className="w-full h-full"
            >
              <div className="p-6 sm:p-7 flex flex-col items-center justify-between h-full space-y-5 text-center bg-white hover:bg-blue-50/30 transition-colors rounded-3xl border border-gray-100 shadow-xs">
                
                {/* Top Centered 3D Icon Box */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 bg-blue-50/70 rounded-2xl flex items-center justify-center p-2.5 transition-transform duration-300 shadow-inner mx-auto">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain drop-shadow-md"
                  />
                </div>

                {/* Content Details with Aligned Titles */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-center items-center w-full">
                  <div className="min-h-[48px] flex items-center justify-center w-full">
                    <h3 className="text-sm sm:text-base lg:text-base font-extrabold text-gray-900 tracking-tight whitespace-nowrap">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal max-w-[260px]">
                    {service.description}
                  </p>
                </div>

                {/* Centered Footer Link */}
                <div className="pt-2 w-full flex justify-center">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-transform"
                  >
                    Selengkapnya
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </TiltedCard>
          ))}
        </div>

      </div>
    </section>
  );
}
