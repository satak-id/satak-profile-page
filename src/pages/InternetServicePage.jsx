import React, { useState } from "react";
import {
  Wifi,
  CheckCircle2,
  ArrowLeft,
  MessageCircle,
  Headphones,
  Zap,
  GraduationCap,
  Store,
  Hotel,
  Building,
  Sparkles,
} from "lucide-react";
import layanan1 from "@/assets/layanan1.png";
import layanan2 from "@/assets/layanan2.png";
import layanan3 from "@/assets/layanan3.png";
import layanan4 from "@/assets/layanan4.png";
import promoImg from "@/assets/promo.png";

const WA_PHONE_NUMBER = "6281947556108";

export function InternetServicePage({ onBackToHome, initialCategory = "school" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: "school", name: "SATAK School", icon: GraduationCap },
    { id: "umkm", name: "SATAK UMKM", icon: Store },
    { id: "hotel", name: "SATAK Hotel", icon: Hotel },
    { id: "office", name: "SATAK Office", icon: Building },
  ];

  const packagesData = {
    school: [
      {
        id: "school-lite",
        name: "School Lite",
        oldSpeed: "30 Mbps",
        speed: "50 Mbps",
        price: "299.000",
        image: layanan1,
        features: ["Filter Konten Kominfo Safe", "Unlimited No FUP", "Support 24/7"],
      },
      {
        id: "school-plus",
        name: "School Plus",
        oldSpeed: "75 Mbps",
        speed: "100 Mbps",
        price: "499.000",
        isPopular: true,
        image: layanan1,
        features: ["Prioritas Ujian CBT Online", "Filter Konten Kominfo Safe", "Gratis Router Dual-Band"],
      },
      {
        id: "school-pro",
        name: "School Pro",
        oldSpeed: "150 Mbps",
        speed: "200 Mbps",
        price: "899.000",
        image: layanan1,
        features: ["Prioritas Lab Komputer", "Bandwidth Dedicated Ujian", "On-Site Support Teknisi"],
      },
      {
        id: "school-ultra",
        name: "School Ultra",
        oldSpeed: "350 Mbps",
        speed: "500 Mbps",
        price: "1.499.000",
        image: layanan1,
        features: ["Multi-Subnet Campus Network", "Dedicated SLA 99.9%", "Personal Account Manager"],
      },
    ],
    umkm: [
      {
        id: "velo",
        name: "SATAK Velo",
        oldSpeed: "100 Mbps",
        speed: "150 Mbps",
        price: "250.000",
        image: promoImg,
        features: ["Koneksi Kasir POS Fast", "Unlimited Tanpa FUP", "Router Wi-Fi Gratis"],
      },
      {
        id: "nexus",
        name: "SATAK Nexus",
        oldSpeed: "200 Mbps",
        speed: "300 Mbps",
        price: "365.000",
        isPopular: true,
        image: layanan2,
        features: ["Terpisah Wi-Fi Tamu & Kasir", "Enterprise Dual-Band Router", "Bebas Biaya Pasang Baru"],
      },
      {
        id: "prime",
        name: "SATAK Prime",
        oldSpeed: "400 Mbps",
        speed: "500 Mbps",
        price: "565.000",
        image: layanan2,
        features: ["Support CCTV & Live Streaming", "Real-Time Dashboard Traffic", "Prioritas Support 24/7"],
      },
      {
        id: "wonder",
        name: "SATAK Wonder",
        oldSpeed: "600 Mbps",
        speed: "750 Mbps",
        price: "715.000",
        image: layanan2,
        features: ["Dedicated Fiber Optic Link", "Guaranteed High Speed", "Account Manager Khusus"],
      },
    ],
    hotel: [
      {
        id: "hotel-villa",
        name: "Hotel Villa",
        oldSpeed: "150 Mbps",
        speed: "200 Mbps",
        price: "750.000",
        image: layanan3,
        features: ["Captive Portal Branding Hotel", "Unlimited Tanpa Limit", "Garansi Uptime 99.9%"],
      },
      {
        id: "hotel-resort",
        name: "Hotel Resort",
        oldSpeed: "350 Mbps",
        speed: "500 Mbps",
        price: "1.450.000",
        isPopular: true,
        image: layanan3,
        features: ["Management Bandwidth Tamu", "Dual Backup Failover Link", "Support On-Site Prioritas"],
      },
      {
        id: "hotel-grand",
        name: "Hotel Grand",
        oldSpeed: "600 Mbps",
        speed: "750 Mbps",
        price: "2.250.000",
        image: layanan3,
        features: ["Dedicated 1:1 Symmetric Speed", "Free Public IP Static", "SLA Guarantee 99.9%"],
      },
      {
        id: "hotel-royal",
        name: "Hotel Royal Dedicated",
        oldSpeed: "800 Mbps",
        speed: "1 Gbps",
        price: "3.850.000",
        image: layanan3,
        features: ["Enterprise Backhaul Direct Link", "Multi-AP Mesh System", "Dedicated Engineering Team"],
      },
    ],
    office: [
      {
        id: "office-lite",
        name: "Office Lite",
        oldSpeed: "100 Mbps",
        speed: "150 Mbps",
        price: "450.000",
        image: layanan4,
        features: ["High Speed Fiber Optic", "Unlimited tanpa FUP", "Response Teknis < 15 Menit"],
      },
      {
        id: "office-corp",
        name: "Office Corporate",
        oldSpeed: "200 Mbps",
        speed: "300 Mbps",
        price: "850.000",
        isPopular: true,
        image: layanan4,
        features: ["Free IP Public Static", "Dual Router Failover", "Multi-User Corporate Access"],
      },
      {
        id: "office-ent",
        name: "Office Enterprise",
        oldSpeed: "450 Mbps",
        speed: "600 Mbps",
        price: "1.650.000",
        image: layanan4,
        features: ["Dedicated SLA 99.9%", "Enterprise Security Firewall", "Support Priority 24/7"],
      },
      {
        id: "office-dedicated",
        name: "Office Dedicated 1:1",
        oldSpeed: "800 Mbps",
        speed: "1 Gbps",
        price: "2.950.000",
        image: layanan4,
        features: ["Full 1:1 Symmetrical Upload/Download", "Direct Fiber Core Private", "Personal Account Executive"],
      },
    ],
  };

  const currentPackages = packagesData[activeCategory] || packagesData.umkm;

  const handleOrderWa = (pkgName, speed, price) => {
    const text = `Halo Admin SATAK, saya tertarik dan mau berlangganan paket ${pkgName} (${speed} - Rp ${price}/bulan). Bisa dibantu proses pendaftaran dan cek lokasinya? Terima kasih.`;
    window.open(`https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChatSales = () => {
    const text = `Halo Admin SATAK, saya ingin berkonsultasi mengenai paket langganan internet SATAK. Mohon informasinya, terima kasih.`;
    window.open(`https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50/70 pb-24 animate-in fade-in duration-300">
      
      {/* Top Header & Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500">
              <button
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-full"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </button>
              <span>/</span>
              <span className="text-gray-900 font-bold">Paket Langganan Internet</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Section Header Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pilihan Paket Langganan SATAK
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2 font-medium">
            Pilih kategori dan paket kecepatan internet terbaik untuk kebutuhan Anda.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 1. TOP CATEGORY FILTER TAB BAR (SATAK ROYAL BLUE IDENTITY)               */}
        {/* ========================================================================= */}
        <div className="max-w-5xl mx-auto mb-10">
          <div className="bg-white p-2 rounded-2xl border-2 border-blue-600/30 shadow-md flex flex-wrap sm:flex-nowrap items-center justify-between gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 cursor-pointer text-center ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-[1.02]"
                      : "text-blue-700 hover:bg-blue-50 font-bold"
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. 4 CARDS GRID LAYOUT (SATAK ROYAL BLUE IDENTITY)                       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between group ${
                pkg.isPopular
                  ? "border-blue-600 shadow-xl relative scale-[1.02]"
                  : "border-blue-200/90 hover:border-blue-600 shadow-md hover:shadow-2xl"
              }`}
            >
              {/* Top Image Banner Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-900">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Popular Badge Overlay */}
                {pkg.isPopular && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-white" />
                    Terpopuler
                  </div>
                )}

                {/* Speed Overlay Badge (SATAK Royal Blue Badge) */}
                <div className="absolute bottom-3 left-3 bg-blue-600/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/20">
                  <div className="text-[10px] font-bold opacity-90 leading-none">Kecepatan Hingga</div>
                  <div className="text-xl sm:text-2xl font-black leading-tight flex items-baseline gap-1">
                    <span>{pkg.speed.replace("Up to ", "")}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 sm:p-6 text-center space-y-4 flex-1 flex flex-col justify-between bg-white">
                
                {/* Title & Speed Detail */}
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-700 tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-gray-500">
                    <span className="line-through text-gray-400 mr-1.5">{pkg.oldSpeed}</span>
                    <span className="text-blue-600 font-black">{pkg.speed}</span>
                  </div>
                </div>

                {/* Pricing Box */}
                <div className="py-2 border-y border-gray-100 space-y-0.5">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm font-extrabold text-gray-900">Rp</span>
                    <span className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-bold text-gray-500">/ Bulan</span>
                  </div>
                  <p className="text-[10px] text-gray-400 font-medium">
                    Harga belum termasuk PPN 11%
                  </p>
                </div>

                {/* Key Features List */}
                <ul className="space-y-2 text-xs text-gray-600 text-left pt-1 font-medium">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Dual Buttons (Primary Blue Langganan + Outline Chat Sales) */}
                <div className="space-y-2.5 pt-3">
                  {/* Button 1: Langganan Sekarang */}
                  <button
                    onClick={() => handleOrderWa(pkg.name, pkg.speed, pkg.price)}
                    className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-sm cursor-pointer"
                  >
                    Langganan Sekarang
                  </button>

                  {/* Button 2: Chat Sales */}
                  <button
                    onClick={handleChatSales}
                    className="w-full py-2.5 px-4 bg-white border border-gray-200 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-bold rounded-xl transition-all text-xs sm:text-sm cursor-pointer"
                  >
                    Chat Sales
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
