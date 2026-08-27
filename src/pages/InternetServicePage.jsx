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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import layanan1 from "@/assets/layanan1.png";
import layanan2 from "@/assets/layanan2.png";
import layanan3 from "@/assets/layanan3.png";
import layanan4 from "@/assets/layanan4.png";
import promoImg from "@/assets/promo.png";

const WA_PHONE_NUMBER = "6281947556108";

export function InternetServicePage({ onBackToHome, onNavigateToSubscribe, initialCategory = "school" }) {
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
        features: [
          "Filtering Konten Kominfo Safe",
          "Unlimited Internet Tanpa FUP",
          "Include ONT / Modem High Range",
          "Gratis Biaya Pasang Baru Rp 500.000",
          "Ideal untuk 1 - 15 Device Sekolah",
          "Support Layanan 24/7 & Response Teknis",
        ],
      },
      {
        id: "school-plus",
        name: "School Plus",
        oldSpeed: "75 Mbps",
        speed: "100 Mbps",
        price: "499.000",
        isPopular: true,
        image: layanan1,
        features: [
          "Prioritas Ujian CBT Online",
          "Filtering Konten Kominfo Safe",
          "Gratis Router Enterprise Dual-Band",
          "Unlimited Internet Tanpa FUP",
          "Ideal untuk 15 - 40 Device Sekolah",
          "Gratis Biaya Pasang Baru Rp 500.000",
          "Dukungan Teknisi On-Site Prioritas",
        ],
      },
      {
        id: "school-pro",
        name: "School Pro",
        oldSpeed: "150 Mbps",
        speed: "200 Mbps",
        price: "899.000",
        image: layanan1,
        features: [
          "Prioritas Bandwidth Lab Komputer",
          "Dedicated Bandwidth Ujian CBT",
          "Sistem Subnet Wifi Area Sekolah",
          "On-Site Support Teknisi Prioritas",
          "Unlimited Tanpa FUP & Garansi SLA",
          "Ideal untuk 40 - 100 Device",
        ],
      },
      {
        id: "school-ultra",
        name: "School Ultra",
        oldSpeed: "350 Mbps",
        speed: "500 Mbps",
        price: "1.499.000",
        image: layanan1,
        features: [
          "Multi-Subnet Campus Network System",
          "Dedicated SLA 99.9% Always On",
          "Personal Account Manager Khusus",
          "Backup Link Failover Redundancy",
          "Free IP Public Static Dual Stack",
          "Response Teknis Prioritas < 15 Menit",
        ],
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
        features: [
          "Koneksi Kasir POS Fast & Smooth",
          "Unlimited Internet Tanpa FUP",
          "Include ONT / Modem High Range",
          "Gratis Biaya Pasang Rp 500.000",
          "Ideal untuk 1 - 12 Device Usaha",
          "Support Kendala Cepat 24/7",
        ],
      },
      {
        id: "nexus",
        name: "SATAK Nexus",
        oldSpeed: "200 Mbps",
        speed: "300 Mbps",
        price: "365.000",
        isPopular: true,
        image: layanan2,
        features: [
          "Pemisahan Wi-Fi Tamu & Kasir POS",
          "Enterprise Dual-Band Router AC1200",
          "Bebas Biaya Pasang Baru Rp 500.000",
          "Support Live Streaming & CCTV 4K",
          "Ideal untuk 12 - 30 Device Usaha",
          "Monitoring Real-Time via Dashboard",
        ],
      },
      {
        id: "prime",
        name: "SATAK Prime",
        oldSpeed: "400 Mbps",
        speed: "500 Mbps",
        price: "565.000",
        image: layanan2,
        features: [
          "Support Multi-CCTV & Live Streaming HD",
          "Real-Time Dashboard Traffic Monitor",
          "Prioritas Support Response 24/7",
          "Unlimited High Speed Fiber Optic",
          "Ideal untuk 30 - 60 Device Usaha",
          "Garansi Uptime Jaringan 99.9%",
        ],
      },
      {
        id: "wonder",
        name: "SATAK Wonder",
        oldSpeed: "600 Mbps",
        speed: "750 Mbps",
        price: "715.000",
        image: layanan2,
        features: [
          "Dedicated Fiber Optic Private Link",
          "Guaranteed Speed Upload/Download 1:1",
          "Personal Account Manager UMKM",
          "Free Public IP Static Dual-Stack",
          "Multi-AP Mesh System Included",
          "Response Time Teknis < 15 Menit",
        ],
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
        features: [
          "Captive Portal Login Branding Hotel",
          "Unlimited Tanpa Limit Kuota",
          "Garansi Uptime SLA 99.9%",
          "Management Bandwidth per Room/Villa",
          "Include Dual Router Enterprise",
          "Support Teknisi On-Site 24/7",
        ],
      },
      {
        id: "hotel-resort",
        name: "Hotel Resort",
        oldSpeed: "350 Mbps",
        speed: "500 Mbps",
        price: "1.450.000",
        isPopular: true,
        image: layanan3,
        features: [
          "Management Bandwidth Tamu / VIP Room",
          "Dual Backup Failover Redundancy Link",
          "Support On-Site Prioritas < 15 Menit",
          "Captive Portal Custom Logo & Promo Hotel",
          "Free Public IP Static Dual-Stack",
          "Monitoring Traffic Real-Time Dashboard",
        ],
      },
      {
        id: "hotel-grand",
        name: "Hotel Grand",
        oldSpeed: "600 Mbps",
        speed: "750 Mbps",
        price: "2.250.000",
        image: layanan3,
        features: [
          "Dedicated 1:1 Symmetric Upload/Download",
          "Free Public IP Static Dual-Stack",
          "SLA Guarantee 99.9% Always On",
          "Multi-AP Mesh Access Point System",
          "Personal Account Manager Hotel",
          "24/7 Dedicated Network Operation Center",
        ],
      },
      {
        id: "hotel-royal",
        name: "Hotel Royal Dedicated",
        oldSpeed: "800 Mbps",
        speed: "1 Gbps",
        price: "3.850.000",
        image: layanan3,
        features: [
          "Enterprise Backhaul Direct Core Link",
          "Multi-AP Mesh System Hotel & Villa",
          "Dedicated Engineering Team On-Site",
          "Automatic Instant Failover Protection",
          "Custom Bandwidth Allocator System",
          "Executive VIP Priority Service",
        ],
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
        features: [
          "High Speed Enterprise Fiber Optic",
          "Unlimited Tanpa Limit (No FUP)",
          "Response Teknis Prioritas < 15 Menit",
          "Ideal untuk 10 - 25 Device Perusahaan",
          "Include Enterprise Dual-Band Router",
          "Support Cloud Backup & Conference Call",
        ],
      },
      {
        id: "office-corp",
        name: "Office Corporate",
        oldSpeed: "200 Mbps",
        speed: "300 Mbps",
        price: "850.000",
        isPopular: true,
        image: layanan4,
        features: [
          "Free IP Public Static Dual Stack",
          "Dual Router Automatic Failover",
          "Multi-User Corporate Access System",
          "Garansi Uptime SLA 99.9% Perusahaan",
          "Dedicated Account Executive Support",
          "Real-Time Traffic Analytics Dashboard",
        ],
      },
      {
        id: "office-ent",
        name: "Office Enterprise",
        oldSpeed: "450 Mbps",
        speed: "600 Mbps",
        price: "1.650.000",
        image: layanan4,
        features: [
          "Dedicated SLA 99.9% Garansi Resmi",
          "Enterprise Security Firewall & VPN Support",
          "Support Priority 24/7 Response Instant",
          "Symmetrical Speed 1:1 Upload/Download",
          "Backhaul Backup Direct Circuit Link",
          "Account Manager Dedicated Perusahaan",
        ],
      },
      {
        id: "office-dedicated",
        name: "Office Dedicated 1:1",
        oldSpeed: "800 Mbps",
        speed: "1 Gbps",
        price: "2.950.000",
        image: layanan4,
        features: [
          "Full 1:1 Symmetrical Dedicated Fiber Core",
          "Direct Core Fiber Optic Private Circuit",
          "Personal Account Executive Dedicated",
          "Free Multiple Public IP Static Subnet",
          "Custom Firewall & VPN Network Manager",
          "Emergency Response On-Site < 15 Menit",
        ],
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

            <div className="text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              ⚡ Promo Pemasangan Gratis Hari Ini
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
        {/* 2. 4 CARDS GRID LAYOUT (BENEFITS BELOW BUTTONS & SCROLLABLE)              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {currentPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-3xl overflow-hidden border-2 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.02] shadow-md hover:shadow-2xl ${
                pkg.isPopular
                  ? "border-blue-600 relative"
                  : "border-blue-200/90 hover:border-blue-600"
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

                {/* Speed Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-blue-600/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/20">
                  <div className="text-[10px] font-bold opacity-90 leading-none">Kecepatan Hingga</div>
                  <div className="text-xl sm:text-2xl font-black leading-tight flex items-baseline gap-1">
                    <span>{pkg.speed.replace("Up to ", "")}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 sm:p-6 text-center space-y-4 flex-1 flex flex-col justify-between bg-white">
                
                {/* 1. Title & Speed Detail */}
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-700 tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-gray-500">
                    <span className="line-through text-gray-400 mr-1.5">{pkg.oldSpeed}</span>
                    <span className="text-blue-600 font-black">{pkg.speed}</span>
                  </div>
                </div>

                {/* 2. Pricing Box */}
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

                {/* 3. Action Buttons (Positioned directly under Pricing Box) */}
                <div className="space-y-2.5 py-1">
                  {/* Button 1: Langganan Sekarang */}
                  <button
                    onClick={() => {
                      if (onNavigateToSubscribe) {
                        onNavigateToSubscribe({ service: "internet", packageId: pkg.id });
                      } else {
                        handleOrderWa(pkg.name, pkg.speed, pkg.price);
                      }
                    }}
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

                {/* 4. Fitur dan Benefit Section (At Bottom, Scrollable with Fixed Height) */}
                <div className="pt-3 border-t border-gray-100 text-left space-y-2">
                  <div className="flex items-center justify-between text-blue-700 font-extrabold text-xs">
                    <span>Fitur dan Benefit</span>
                    <ChevronUp className="w-4 h-4" />
                  </div>

                  {/* Scrollable Benefits List Container */}
                  <div className="max-h-36 sm:max-h-40 overflow-y-auto pr-1 space-y-2 text-xs text-gray-700 font-medium custom-scrollbar">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-blue-50/40 p-2 rounded-lg border border-blue-100/50">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight text-[11px] font-semibold text-gray-800">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
