import React, { useState } from "react";
import {
  Layers,
  CheckCircle2,
  ArrowLeft,
  ShoppingBag,
  GraduationCap,
  Hotel,
  Briefcase,
  Sparkles,
  ChevronUp,
  ShieldCheck,
} from "lucide-react";
import layanan3 from "@/assets/layanan3.png";

const WA_PHONE_NUMBER = "6281947556108";

export function SaasDigitalPage({ onBackToHome, onNavigateToSubscribe, initialCategory = "pos" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: "pos", name: "Point of Sales (POS)", icon: ShoppingBag },
    { id: "lms", name: "School LMS & Academic", icon: GraduationCap },
    { id: "pms", name: "Hotel Management (PMS)", icon: Hotel },
    { id: "erp", name: "Enterprise ERP & CRM", icon: Briefcase },
  ];

  const packagesData = {
    pos: [
      {
        id: "pos-starter",
        name: "POS UMKM Starter",
        oldSpec: "1 Kasir",
        spec: "1 Outlet / 2 Kasir",
        price: "129.000",
        image: layanan3,
        features: [
          "Aplikasi Kasir Android / iOS / Web",
          "Manajemen Stok & Inventori Real-Time",
          "Laporan Penjualan & Laba Rugi Otomatis",
          "Dukungan Pembayaran QRIS & E-Wallet",
          "Cetak Struk Thermal Bluetooth / USB",
          "Free Training & Support Penggunaan 24/7",
        ],
      },
      {
        id: "pos-pro",
        name: "POS Retail Pro",
        oldSpec: "2 Outlet",
        spec: "Multi Outlet & Gudang",
        price: "299.000",
        isPopular: true,
        image: layanan3,
        features: [
          "Manajemen Multi Outlet & Multi Gudang",
          "Manajemen Diskon, Member & Loyalty Point",
          "Laporan Analisis Produk Terlaris AI",
          "Integrasi Pembayaran QRIS Dinamis & EDC",
          "Fitur Kasir Offline Mode Auto Sync",
          "Dukungan Prioritas Live Chat & WA 24/7",
        ],
      },
      {
        id: "pos-resto",
        name: "POS Resto & Cafe",
        oldSpec: "Fitur Basic",
        spec: "Kitchen Display & Table",
        price: "499.000",
        image: layanan3,
        features: [
          "Manajemen Denah Meja & Order QR Code",
          "Kitchen Display System (KDS) Layar Dapur",
          "Resep, HPP, & Inventori Bahan Baku Detail",
          "Split Bill, Join Table, & Self Kiosk Order",
          "Integrasi GrabFood / GoFood / ShopeeFood",
          "Gratis Setup & Dampingan Go-Live Resto",
        ],
      },
      {
        id: "pos-franchise",
        name: "POS Enterprise Franchise",
        oldSpec: "5 Outlet",
        spec: "Unlimited Outlet",
        price: "999.000",
        image: layanan3,
        features: [
          "Unlimited Multi Outlet Franchise Network",
          "Royalty Management & Royalty Split System",
          "Custom API Integration & Central ERP",
          "Dedicated Account Executive & Consultant",
          "Garansi Uptime SLA Server 99.99%",
          "On-Site Support & Emergency Handling",
        ],
      },
    ],
    lms: [
      {
        id: "lms-starter",
        name: "Smart School Starter",
        oldSpec: "200 Siswa",
        spec: "Up to 500 Siswa",
        price: "399.000",
        image: layanan3,
        features: [
          "Portal Pembelajaran Online (LMS) Guru & Siswa",
          "Ujian Online Computer Based Test (CBT)",
          "Absensi Digital Siswa via QR & WhatsApp Ortum",
          "Manajemen Nilai & Rapor Kurikulum Merdeka",
          "Kirim Pengumuman & SPP via WhatsApp Automatic",
          "Backup Data Otomatis Setiap Hari",
        ],
      },
      {
        id: "lms-pro",
        name: "Smart Campus Pro",
        oldSpec: "1.000 Siswa",
        spec: "Up to 2.000 Siswa",
        price: "899.000",
        isPopular: true,
        image: layanan3,
        features: [
          "Integrasi Pembayaran SPP Online Payment Gateway",
          "Manajemen Jadwal Pelajaran & E-Jurnal Guru",
          "Perpustakaan Digital (E-Library) & Repository",
          "CBT Ujian Massal Anti-Curang (Lockdown Browser)",
          "Aplikasi Mobile Branding Nama Sekolah/Kampus",
          "Dukungan Layanan Dampingan Operator 24/7",
        ],
      },
      {
        id: "lms-ultra",
        name: "Smart Institution Ultra",
        oldSpec: "3.000 Siswa",
        spec: "Up to 5.000 Siswa",
        price: "1.750.000",
        image: layanan3,
        features: [
          "Multi-Cabang Yayasan / Kampus Terintegrasi",
          "Integrasi Feeder Dikti / Dapodik Automatic",
          "Analitik Performa Akademik Siswa berbasis AI",
          "Server Dedicated High Bandwidth CBT Ujian",
          "Personal Account Executive Education",
          "Custom Domain & Branding Yayasan",
        ],
      },
      {
        id: "lms-enterprise",
        name: "Smart Enterprise Education",
        oldSpec: "5.000 Siswa",
        spec: "Unlimited Siswa",
        price: "3.499.000",
        image: layanan3,
        features: [
          "Unlimited Multi-Branch Foundation System",
          "Custom Module Development & API Integration",
          "Dedicated Infrastructure & Database Private",
          "Garansi Service Level Agreement 99.99%",
          "On-Site Training & Emergency Operator",
          "Priority Technical Support SLA < 15 Menit",
        ],
      },
    ],
    pms: [
      {
        id: "pms-villa",
        name: "PMS Hotel Villa",
        oldSpec: "10 Kamar",
        spec: "Up to 20 Kamar",
        price: "450.000",
        image: layanan3,
        features: [
          "Property Management System (PMS) Front Desk",
          "Reservation, Check-In, & Check-Out Management",
          "Housekeeping & Room Status Real-Time",
          "Laporan Keuangan & Occupancy Rate Hotel",
          "Support Multi-Currency & Invoicing",
          "Free Training Staf & Support 24/7",
        ],
      },
      {
        id: "pms-resort",
        name: "PMS Hotel Resort",
        oldSpec: "40 Kamar",
        spec: "Up to 60 Kamar",
        price: "950.000",
        isPopular: true,
        image: layanan3,
        features: [
          "Integrasi OTA Channel Manager (Agoda, Traveloka, Booking)",
          "Direct Booking Engine Website Hotel Logo",
          "Integrasi Kunci Pintu Digital Key / RFID",
          "Manajemen Resto, Spa, & Laundry Hotel",
          "Automatic Guest Registration & WhatsApp Reminder",
          "Support Technical Dampingan 24/7",
        ],
      },
      {
        id: "pms-grand",
        name: "PMS Hotel Grand",
        oldSpec: "100 Kamar",
        spec: "Up to 150 Kamar",
        price: "1.850.000",
        image: layanan3,
        features: [
          "2-Way Auto Sync OTA Channel Manager 50+ OTAs",
          "Integrasi POS Resto, Banquet, & Function Hall",
          "Accounting Module & General Ledger Hotel",
          "Multi-Property Management Single Dashboard",
          "Dedicated Server Instance & High Uptime",
          "Personal Account Manager Hospitality",
        ],
      },
      {
        id: "pms-enterprise",
        name: "PMS Hotel Enterprise",
        oldSpec: "150 Kamar",
        spec: "Unlimited Kamar",
        price: "3.250.000",
        image: layanan3,
        features: [
          "Unlimited Multi-Property Hotel Group ERP",
          "Custom API Integration System & Hardware Kiosk",
          "Dedicated On-Site Engineering & Training Team",
          "Garansi Uptime SLA 99.99% Always On",
          "Custom Branding Mobile App & Guest Portal",
          "24/7 Priority Emergency Hospitality Response",
        ],
      },
    ],
    erp: [
      {
        id: "erp-finance",
        name: "ERP Finance & HR",
        oldSpec: "5 User",
        spec: "10 User Licenses",
        price: "650.000",
        image: layanan3,
        features: [
          "Modul Akuntansi, Keuangan, & Cashflow Control",
          "Manajemen Payroll, BPJS, & PPh 21 Otomatis",
          "Manajemen Absensi Mobile GPS & Cuti Karyawan",
          "Laporan Laba Rugi, Neraca, & Audit Trail",
          "Enkripsi Keamanan Data ISO 27001",
          "Free Setup & Pendampingan Implementasi",
        ],
      },
      {
        id: "erp-complete",
        name: "ERP Complete Suite",
        oldSpec: "15 User",
        spec: "30 User Licenses",
        price: "1.450.000",
        isPopular: true,
        image: layanan3,
        features: [
          "Paket Lengkap: Finance, HR, CRM, Supply Chain, & Procurement",
          "Manajemen Stok, Pembelian, & Purchase Order (PO)",
          "CRM Leads Management & Sales Pipeline Tracking",
          "Dashboard Executive Real-Time Analytics AI",
          "Mobile App Android / iOS untuk Manager",
          "Priority Dampingan Technical Support 24/7",
        ],
      },
      {
        id: "erp-custom",
        name: "ERP Custom Enterprise",
        oldSpec: "50 User",
        spec: "100 User Licenses",
        price: "2.950.000",
        image: layanan3,
        features: [
          "Custom Workflow & Custom Report Builder Engine",
          "Integrasi Sistem Legacy / E-Faktur / E-Bupot",
          "Dedicated Private Server Instance",
          "Custom Role-Based Access Control Detail",
          "Personal Business Analyst & Project Manager",
          "Garansi SLA 99.9% Uptime Agreement",
        ],
      },
      {
        id: "erp-unlimited",
        name: "ERP Unlimited Corporate",
        oldSpec: "100 User",
        spec: "Unlimited Users",
        price: "5.850.000",
        image: layanan3,
        features: [
          "Unlimited User Licenses Enterprise Wide",
          "Full Dedicated Infrastructure & Database Cluster",
          "On-Premise or Hybrid Private Cloud Deployment",
          "Dedicated Development & Support Team",
          "Executive Priority Emergency SLA < 15 Menit",
          "Compliance Audit & Security Certificate",
        ],
      },
    ],
  };

  const currentPackages = packagesData[activeCategory] || packagesData.pos;

  const handleOrderWa = (pkgName, spec, price) => {
    const text = `Halo Admin SATAK, saya tertarik dan mau berlangganan SaaS & Layanan Digital paket ${pkgName} (${spec} - Rp ${price}/bulan). Bisa dibantu proses demo aplikasi dan pendaftarannya? Terima kasih.`;
    window.open(`https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChatSales = () => {
    const text = `Halo Admin SATAK, saya ingin berkonsultasi mengenai solusi SaaS & Layanan Digital (POS/LMS/PMS/ERP). Mohon informasinya, terima kasih.`;
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
                className="inline-flex items-center gap-1.5 font-bold text-blue-600 hover:text-blue-700 transition-colors bg-blue-50 px-3 py-1.5 rounded-full cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </button>
              <span>/</span>
              <span className="text-gray-900 font-bold">Paket SaaS & Layanan Digital</span>
            </div>

            <div className="text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Ekosistem Digital Terintegrasi & Cloud Native
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Section Header Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pilihan Paket SaaS & Layanan Digital
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2 font-medium">
            Software kasir POS, LMS Sekolah, Sistem Hotel PMS, dan ERP Perusahaan terintegrasi.
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
        {/* 2. 4 CARDS GRID LAYOUT (MATCHING REFERENCE MODEL)                          */}
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

                {/* Spec Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-blue-600/95 backdrop-blur-md text-white p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/20">
                  <div className="text-[10px] font-bold opacity-90 leading-none">Kapasitas Paket</div>
                  <div className="text-xs sm:text-sm font-black leading-tight flex items-baseline gap-1 mt-0.5">
                    <span>{pkg.spec}</span>
                  </div>
                </div>
              </div>

              {/* Card Body Content */}
              <div className="p-5 sm:p-6 text-center space-y-4 flex-1 flex flex-col justify-between bg-white">
                
                {/* 1. Title & Spec Detail */}
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-blue-700 tracking-tight">
                    {pkg.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-gray-500">
                    <span className="line-through text-gray-400 mr-1.5">{pkg.oldSpec}</span>
                    <span className="text-blue-600 font-black">{pkg.spec}</span>
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
                        onNavigateToSubscribe({ service: "saas", packageId: "saas-2" });
                      } else {
                        handleOrderWa(pkg.name, pkg.spec, pkg.price);
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
