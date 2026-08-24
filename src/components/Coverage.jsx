import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  MapPin,
  Search,
  Clock,
  ShieldCheck,
  Radio,
  Headphones,
  ClipboardList,
  Wrench,
  Wifi,
  ArrowRight,
} from "lucide-react";
import mapsImg from "@/assets/maps.png";

export function Coverage() {
  const steps = [
    {
      number: "1",
      title: "Hubungi Kami",
      description: "Konsultasikan kebutuhan internet Anda yang sesuai dengan tim SATAK.",
      icon: Headphones,
    },
    {
      number: "2",
      title: "Survey Lokasi",
      description: "Tim teknis kami akan melakukan pengecekan lokasi pemasangan.",
      icon: ClipboardList,
    },
    {
      number: "3",
      title: "Instalasi",
      description: "Teknisi profesional siap melakukan aktivasi dan instalasi perangkat.",
      icon: Wrench,
    },
    {
      number: "4",
      title: "Internet Aktif",
      description: "Nikmati koneksi internet cepat, stabil, dan tanpa batas!",
      icon: Wifi,
    },
  ];

  return (
    <section id="coverage" className="py-14 lg:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. MAIN BLUE COVERAGE CHECK BANNER (INLINE HORIZONTAL SEARCH BAR)         */}
        {/* ========================================================================= */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          
          {/* Subtle Decorative Background Blur */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Header & Search Content */}
            <div className="lg:col-span-8 space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-200 tracking-wider uppercase bg-white/10 px-3 py-1 rounded-full border border-blue-400/30">
                  Cek Ketersediaan
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
                  Cek Jangkauan Area
                </h2>
                <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-xl font-normal">
                  Masukkan alamat atau lokasi Anda untuk mengecek ketersediaan jaringan internet SATAK di area Anda secara langsung.
                </p>
              </div>

              {/* INLINE HORIZONTAL SEARCH BAR (Berjajar Rata) */}
              <div className="bg-white p-3 sm:p-3.5 rounded-2xl shadow-xl flex flex-col md:flex-row gap-3 items-center border border-gray-100">
                
                {/* Dropdown Kecamatan */}
                <div className="w-full md:w-5/12">
                  <Select className="bg-gray-50 text-gray-800 border-gray-200 h-12 text-sm focus:bg-white">
                    <option value="">Pilih Kecamatan</option>
                    <option value="selong">Selong</option>
                    <option value="labuhan-haji">Labuhan Haji</option>
                    <option value="masbagik">Masbagik</option>
                    <option value="suralaga">Suralaga</option>
                  </Select>
                </div>

                {/* Search Input Alamat / Jalan / Kelurahan */}
                <div className="relative w-full md:w-5/12">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-blue-600" />
                  <Input
                    placeholder="Tulis nama jalan / kelurahan / perumahan"
                    className="pl-10 bg-gray-50 text-gray-900 placeholder:text-gray-400 border-gray-200 h-12 text-sm focus:bg-white"
                  />
                </div>

                {/* Action Search Button */}
                <Button className="w-full md:w-3/12 h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 text-sm shadow-md transition-transform active:scale-[0.98]">
                  <Search className="w-4 h-4" />
                  Cek Sekarang
                </Button>

              </div>
            </div>

            {/* Right Map Image Graphic */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-full max-w-xs sm:max-w-sm hover:scale-105 transition-transform duration-300">
                <img
                  src={mapsImg}
                  alt="SATAK Coverage Area Maps"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>

          {/* Bottom Feature Badges Bar */}
          <div className="mt-10 pt-6 border-t border-blue-500/30 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Mudah & Cepat</h4>
                <p className="text-xs text-blue-100">Cukup 1 menit untuk cek area</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Data Akurat</h4>
                <p className="text-xs text-blue-100">Diperbarui secara berkala</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl flex-shrink-0">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Tersedia Luas</h4>
                <p className="text-xs text-blue-100">Jangkauan terus bertambah</p>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 2. CARA BERLANGGANAN (4 LANGKAH MUDAH)                                   */}
        {/* ========================================================================= */}
        <div className="pt-6">
          
          {/* Section Header */}
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              4 Langkah Berlangganan <span className="text-blue-600">Layanan SATAK ID</span>
            </h2>
            <div className="w-14 h-1.5 bg-blue-600 rounded-full mx-auto mt-2.5" />
          </div>

          {/* 4 Steps Grid Layout with Step Progress Indicators */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Connecting Step Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/3 left-12 right-12 h-0.5 border-t-2 border-dashed border-blue-200 -z-0" />

            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={idx}
                  className="relative z-10 bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center justify-between group"
                >
                  {/* Step Number Circle Badge */}
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-base flex items-center justify-center shadow-lg shadow-blue-600/30 mb-4 group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon Box */}
                  <div className="w-20 h-20 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center p-4 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                    <IconComponent className="w-10 h-10" />
                  </div>

                  {/* Text Information */}
                  <div className="space-y-2 flex-1 flex flex-col justify-center">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom Decorative Indicator */}
                  <div className="mt-4 pt-3 border-t border-gray-100 w-full flex justify-center items-center text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Langkah {step.number}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}
