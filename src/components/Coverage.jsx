import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { MapPin, Search, Clock, ShieldCheck, Radio } from "lucide-react";
import mapsImg from "@/assets/maps.png";

export function Coverage() {
  return (
    <section id="coverage" className="py-12 lg:py-16 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Blue Card Banner */}
        <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
          
          {/* Subtle Decorative Background Wifi Signals */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Form Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold text-blue-200 tracking-wider uppercase">
                  Cek Ketersediaan
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  Cek Jangkauan Area
                </h2>
                <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-lg font-normal">
                  Masukkan alamat Anda untuk mengetahui ketersediaan layanan internet SATAK di lokasi Anda.
                </p>
              </div>

              {/* Form Input Group */}
              <div className="space-y-4 pt-2">
                {/* Address Input */}
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Masukkan alamat lengkap Anda"
                    className="pl-11 bg-white text-gray-900 placeholder:text-gray-400 border-none h-12 text-sm shadow-md"
                  />
                </div>

                {/* Dropdowns Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Select className="bg-white text-gray-700 border-none h-12 shadow-md">
                    <option value="">Pilih Kecamatan</option>
                    <option value="selong">Selong</option>
                    <option value="labuhan-haji">Labuhan Haji</option>
                    <option value="masbagik">Masbagik</option>
                    <option value="suralaga">Suralaga</option>
                  </Select>

                  <Select className="bg-white text-gray-700 border-none h-12 shadow-md">
                    <option value="">Pilih Kelurahan / Desa</option>
                    <option value="pancor">Pancor</option>
                    <option value="kelayu">Kelayu</option>
                    <option value="terara">Terara</option>
                  </Select>
                </div>

                {/* Search Action Button */}
                <Button className="w-full h-12 bg-blue-950 hover:bg-blue-900 text-white font-bold gap-2 text-base shadow-lg transition-transform active:scale-[0.99]">
                  <Search className="w-5 h-5" />
                  Cek Sekarang
                </Button>
              </div>
            </div>

            {/* Right Map Image */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-xs sm:max-w-md hover:scale-105 transition-transform duration-300">
                <img
                  src={mapsImg}
                  alt="SATAK Coverage Area Maps"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>

          </div>

          {/* Bottom Feature Badges Bar */}
          <div className="mt-10 pt-6 border-t border-blue-500/30 grid grid-cols-1 sm:grid-cols-3 gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 text-white">
            
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Mudah & Cepat</h4>
                <p className="text-xs text-blue-100">Cukup 1 menit untuk cek area</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Data Akurat</h4>
                <p className="text-xs text-blue-100">Diperbarui secara berkala</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-white/20 rounded-xl">
                <Radio className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Tersedia Luas</h4>
                <p className="text-xs text-blue-100">Jangkauan terus bertambah</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
