import React from "react";
import { Play, MoreVertical, Wifi, Eye, Clock } from "lucide-react";

export function Testimonials() {
  const videos = [
    {
      id: "school",
      title: "Internet Stabil untuk Sekolah Bersama SATAK",
      tag: "SATAK SCHOOL",
      duration: "1:24",
      views: "1,2 rb views",
      time: "2 minggu yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "umkm",
      title: "UMKM Makin Lancar dengan Internet SATAK",
      tag: "SATAK UMKM",
      duration: "1:37",
      views: "890 views",
      time: "1 bulan yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0a670fc8077a?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "hotel",
      title: "Layanan Internet Terbaik untuk Hotel & Operasional",
      tag: "SATAK HOTEL",
      duration: "1:18",
      views: "1 rb views",
      time: "1 bulan yang lalu",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="testimoni" className="py-14 lg:py-20 bg-gradient-to-b from-gray-50/80 via-blue-50/30 to-gray-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mt-3">
            Apa Kata Mereka
          </h2>
          <div className="w-14 h-1.5 bg-blue-600 rounded-full mx-auto mt-2.5" />
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mt-3 font-medium">
            Simak pengalaman langsung dari para pelanggan yang telah mempercayakan jaringan internet mereka bersama SATAK.
          </p>
        </div>

        {/* High-End Video Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-blue-200/90 hover:border-blue-600 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-gray-900">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20 p-4 flex flex-col justify-between">
                  {/* Category Tag */}
                  <div className="self-start">
                    <span className="bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {video.tag}
                    </span>
                  </div>

                  {/* Red Glossy Play Button */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-10 bg-red-600/95 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl shadow-red-600/40 group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300 cursor-pointer border border-white/30">
                      <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="self-end bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-lg border border-white/20">
                    {video.duration}
                  </div>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-5 flex items-start justify-between gap-3 bg-white">
                <div className="flex items-start gap-3.5">
                  {/* SATAK Channel Icon Avatar */}
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-600/20">
                    <Wifi className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium pt-0.5">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5 text-gray-400" />
                        {video.views}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        {video.time}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="text-gray-400 hover:text-gray-700 p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button with Official YouTube Logo */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-gray-900 border-2 border-blue-200/90 hover:border-red-500 hover:text-red-600 font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <svg className="w-7 h-5 fill-[#FF0000] group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm tracking-wide">Lihat Semua Video</span>
          </a>
        </div>

      </div>
    </section>
  );
}
