import React from "react";
import { Button } from "@/components/ui/button";
import { Play, MoreVertical, Wifi } from "lucide-react";

export function Testimonials() {
  const videos = [
    {
      id: "school",
      title: "Internet Stabil untuk Sekolah Bersama SATAK",
      tag: "INTERNET STABIL UNTUK SEKOLAH",
      duration: "1:24",
      views: "1,2 rb views",
      time: "2 minggu yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "umkm",
      title: "UMKM Makin Lancar dengan Internet SATAK",
      tag: "UMKM MAJU DENGAN INTERNET DARI SATAK",
      duration: "1:37",
      views: "890 views",
      time: "1 bulan yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0a670fc8077a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hotel",
      title: "Layanan Internet Terbaik untuk Hotel",
      tag: "KONEKSI ANDAL UNTUK HOTEL DAN TAMU",
      duration: "1:18",
      views: "1 rb views",
      time: "1 bulan yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Apa Kata Mereka
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-2" />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                {/* Banner overlay text inside thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-between">
                  <div className="self-start">
                    <span className="bg-blue-600/90 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-1 rounded-sm uppercase tracking-wider">
                      {video.tag}
                    </span>
                  </div>

                  {/* Big Red Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-500 group-hover:scale-110 transition-all cursor-pointer">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="self-end bg-black/80 text-white text-xs font-semibold px-2 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-4 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Channel Avatar */}
                  <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center flex-shrink-0 text-blue-600">
                    <Wifi className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-medium">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>

                <button className="text-gray-400 hover:text-gray-600 p-1">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-10 flex justify-center">
          <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50 font-bold gap-2 px-8">
            <span className="w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center text-[10px]">▶</span>
            Lihat Semua Video
          </Button>
        </div>

      </div>
    </section>
  );
}
