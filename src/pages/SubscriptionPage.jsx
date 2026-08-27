import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DotField } from "@/components/ui/dot-field";
import { TextType } from "@/components/ui/text-type";
import {
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  User,
  Phone,
  Mail,
  GraduationCap,
  Store,
  Hotel,
  Building,
  Cloud,
  Layers,
  Check,
  MapPin,
  Tag,
  CreditCard,
  Send,
  Sparkles,
  Search,
  ShieldCheck,
  MessageCircle,
  X
} from "lucide-react";
import mascotImg from "@/assets/mascot.png";
import layanan1Img from "@/assets/layanan1.png";
import layanan2Img from "@/assets/layanan2.png";
import layanan3Img from "@/assets/layanan3.png";
import layanan4Img from "@/assets/layanan4.png";

const WA_ADMIN = "6281947556108";

export function SubscriptionPage({ onBackToHome, initialData = null }) {
  // Navigation step anchor state
  const [activeStep, setActiveStep] = useState("data-diri");

  // Temporary catalog structure. The service options can be replaced by the admin API later.
  const satakCategories = [
    {
      id: "school",
      name: "Internet Service",
      subtext: "Internet untuk sekolah, usaha, hotel, dan kantor",
      icon: GraduationCap,
      services: [
        { id: "satak-school", name: "SATAK School", packageKey: "internet", image: layanan1Img },
        { id: "satak-office", name: "SATAK Office", packageKey: "internet", image: layanan4Img },
        { id: "satak-hotel", name: "SATAK Hotel", packageKey: "internet", image: layanan3Img },
        { id: "satak-umkm", name: "SATAK UMKM", packageKey: "internet", image: layanan2Img },
      ],
    },
    {
      id: "cloud",
      name: "SATAK Cloud",
      subtext: "Cloud Storage, VPS, dan server",
      icon: Cloud,
      services: [
        { id: "cloud-storage", name: "Cloud Storage", packageKey: "cloud", image: layanan2Img },
        { id: "cloud-vps", name: "VPS & Cloud Server", packageKey: "cloud", image: layanan2Img },
        { id: "cloud-private", name: "Private Cloud", packageKey: "cloud", image: layanan2Img },
        { id: "cloud-database", name: "Database Cloud", packageKey: "cloud", image: layanan2Img },
      ],
    },
    {
      id: "saas",
      name: "SaaS & Layanan Digital",
      subtext: "Aplikasi bisnis, sekolah, dan enterprise",
      icon: Layers,
      services: [
        { id: "saas-pos", name: "Point of Sales (POS)", packageKey: "saas", image: layanan3Img },
        { id: "saas-lms", name: "School LMS & Academic", packageKey: "saas", image: layanan3Img },
        { id: "saas-pms", name: "Hotel Management (PMS)", packageKey: "saas", image: layanan3Img },
        { id: "saas-erp", name: "Enterprise ERP & CRM", packageKey: "saas", image: layanan3Img },
      ],
    },
  ];

  // Packages Master List aligned directly with SATAK's offerings
  const packagesList = {
    internet: [
      {
        id: "satak-school",
        name: "SATAK School",
        speed: "Up to 100 Mbps",
        price: 499000,
        priceFormatted: "499.000",
        type: "Internet Service",
        badge: "Terfavorit",
        isPopular: true,
        desc: "Internet stabil untuk sekolah, ujian CBT online, lab komputer, dan aktivitas akademik.",
      },
      {
        id: "satak-office",
        name: "SATAK Office",
        speed: "Up to 300 Mbps",
        price: 850000,
        priceFormatted: "850.000",
        type: "Internet Service",
        badge: "Pilihan Utama",
        desc: "Koneksi enterprise untuk kantor dengan prioritas cloud ERP, konferensi, dan operasional bisnis.",
      },
      {
        id: "satak-hotel",
        name: "SATAK Hotel",
        speed: "Up to 500 Mbps",
        price: 1450000,
        priceFormatted: "1.450.000",
        type: "Internet Service",
        badge: "Hospitality",
        desc: "Internet andal untuk tamu dan operasional hotel dengan captive portal serta manajemen bandwidth.",
      },
      {
        id: "satak-umkm",
        name: "SATAK UMKM",
        speed: "Up to 300 Mbps",
        price: 365000,
        priceFormatted: "365.000",
        type: "Internet Service",
        badge: "Promo UMKM",
        desc: "Internet cepat untuk kasir POS, toko, kafe, restoran, CCTV, dan kebutuhan usaha harian.",
      },
    ],
    school: [
      {
        id: "school-lite",
        name: "School Lite",
        speed: "Up to 50 Mbps",
        price: 299000,
        priceFormatted: "299.000",
        type: "Sekolah Dasar / Menengah",
        badge: "Hemat",
        desc: "Filtering Kominfo Safe, Unlimited Tanpa FUP, ONT Modem High Range.",
      },
      {
        id: "school-plus",
        name: "School Plus",
        speed: "Up to 100 Mbps",
        price: 499000,
        priceFormatted: "499.000",
        type: "Sekolah & Lab Komputer",
        badge: "Terfavorit",
        isPopular: true,
        desc: "Prioritas Ujian CBT Online, Router Enterprise Dual-Band, Teknisi On-Site.",
      },
      {
        id: "school-pro",
        name: "School Pro",
        speed: "Up to 200 Mbps",
        price: 899000,
        priceFormatted: "899.000",
        type: "Kampus / Sekolah Besar",
        badge: "High Capacity",
        desc: "Dedicated Bandwidth CBT, Subnet WiFi Sekolah, SLA Garansi Uptime.",
      },
      {
        id: "school-ultra",
        name: "School Ultra",
        speed: "Up to 500 Mbps",
        price: 1499000,
        priceFormatted: "1.499.000",
        type: "Campus Network",
        badge: "Enterprise",
        desc: "Multi-Subnet Campus System, IP Public Static Dual Stack, SLA 99.9%.",
      },
    ],
    umkm: [
      {
        id: "velo",
        name: "SATAK Velo",
        speed: "Up to 150 Mbps",
        price: 250000,
        priceFormatted: "250.000",
        type: "UMKM & Toko Retail",
        badge: "Promo UMKM",
        desc: "Koneksi Kasir POS Fast & Smooth, Unlimited No FUP, 1-12 Device Usaha.",
      },
      {
        id: "nexus",
        name: "SATAK Nexus",
        speed: "Up to 300 Mbps",
        price: 365000,
        priceFormatted: "365.000",
        type: "Cafe, Resto & Toko",
        badge: "Best Seller",
        isPopular: true,
        desc: "Pemisahan Wi-Fi Tamu & Kasir POS, Router Dual-Band, Support Live Streaming.",
      },
      {
        id: "prime",
        name: "SATAK Prime",
        speed: "Up to 500 Mbps",
        price: 565000,
        priceFormatted: "565.000",
        type: "Bisnis Berkembang",
        badge: "Super Fast",
        desc: "Support Multi-CCTV 4K, Dashboard Traffic Monitor, SLA 99.9%.",
      },
      {
        id: "wonder",
        name: "SATAK Wonder",
        speed: "Up to 750 Mbps",
        price: 715000,
        priceFormatted: "715.000",
        type: "Bisnis Skala Besar",
        badge: "Ultimate",
        desc: "Dedicated Fiber 1:1, Public IP Static, Multi-AP Mesh System Included.",
      },
    ],
    hotel: [
      {
        id: "hotel-villa",
        name: "Hotel Villa",
        speed: "Up to 200 Mbps",
        price: 750000,
        priceFormatted: "750.000",
        type: "Villa & Guest House",
        badge: "Hospitality",
        desc: "Captive Portal Login Branding, Bandwidth Management per Room.",
      },
      {
        id: "hotel-resort",
        name: "Hotel Resort",
        speed: "Up to 500 Mbps",
        price: 1450000,
        priceFormatted: "1.450.000",
        type: "Resort & Hotel",
        badge: "Rekomendasi",
        isPopular: true,
        desc: "Dual Backup Redundancy Link, Custom Promo Logo Hotel, Teknisi On-Site 24/7.",
      },
      {
        id: "hotel-grand",
        name: "Hotel Grand",
        speed: "Up to 750 Mbps",
        price: 2250000,
        priceFormatted: "2.250.000",
        type: "Hotel Bintang 3-4",
        badge: "Dedicated",
        desc: "Dedicated 1:1 Symmetric Speed, Multi-AP Mesh System, Public IP Static.",
      },
      {
        id: "hotel-royal",
        name: "Hotel Royal Dedicated",
        speed: "Up to 1 Gbps",
        price: 3850000,
        priceFormatted: "3.850.000",
        type: "Hotel Bintang 5 / Chain",
        badge: "Ultra Dedicated",
        desc: "Direct Core Backhaul Link, Tim Engineering Khusus On-Site, SLA 99.99%.",
      },
    ],
    office: [
      {
        id: "office-lite",
        name: "Office Lite",
        speed: "Up to 150 Mbps",
        price: 450000,
        priceFormatted: "450.000",
        type: "Startup / Small Office",
        badge: "Office Starter",
        desc: "High Speed Enterprise Fiber Optic, No FUP, Support Cloud & Conference Call.",
      },
      {
        id: "office-corp",
        name: "Office Corporate",
        speed: "Up to 300 Mbps",
        price: 850000,
        priceFormatted: "850.000",
        type: "Perusahaan Menengah",
        badge: "Pilihan Utama",
        isPopular: true,
        desc: "Dual Bandwidth Prioritas Cloud ERP, IP Public Static, Router Enterprise.",
      },
      {
        id: "office-ent",
        name: "Office Enterprise",
        speed: "Up to 500 Mbps",
        price: 1450000,
        priceFormatted: "1.450.000",
        type: "Head Office / Corporate",
        badge: "Enterprise",
        desc: "Bandwidth Symmetric 1:1, Failover Link Redundancy, Garansi SLA 99.9%.",
      },
      {
        id: "office-ded",
        name: "Office Dedicated Gig",
        speed: "Up to 1 Gbps",
        price: 2750000,
        priceFormatted: "2.750.000",
        type: "Corporate Headquarters",
        badge: "Dedicated",
        desc: "Dedicated Fiber Optic Private Core, Account Manager Khusus, 24/7 Priority NOC.",
      },
    ],
    cloud: [
      {
        id: "cld-1",
        name: "SATAK Cloud Basic",
        speed: "100 GB SSD NVMe",
        price: 199000,
        priceFormatted: "199.000",
        type: "Cloud Storage",
        badge: "Cloud Starter",
        desc: "Penyimpanan dokumen & backup instansi otomatis terenkripsi SSL.",
      },
      {
        id: "cld-2",
        name: "SATAK Cloud Business VPS",
        speed: "500 GB NVMe + RAM 8GB",
        price: 599000,
        priceFormatted: "599.000",
        type: "Managed VPS Cloud",
        badge: "Rekomendasi",
        isPopular: true,
        desc: "Server VPS siap pakai untuk aplikasi CBT, SIM Sekolah, & Web ERP.",
      },
      {
        id: "cld-3",
        name: "SATAK Dedicated Cluster",
        speed: "2 TB NVMe + RAM 32GB",
        price: 1499000,
        priceFormatted: "1.499.000",
        type: "Dedicated Server",
        badge: "Maximum Power",
        desc: "Cluster server private dedicated high throughput untuk instansi besar.",
      },
    ],
    saas: [
      {
        id: "saas-1",
        name: "SATAK POS Smart Cashier",
        speed: "Unlimited Transaction",
        price: 149000,
        priceFormatted: "149.000",
        type: "SaaS Kasir & Stok",
        badge: "UMKM Choice",
        desc: "Aplikasi kasir cloud, laporan penjualan real-time, & barcode scanner.",
      },
      {
        id: "saas-2",
        name: "SATAK School ERP Suite",
        speed: "Full Academic Modules",
        price: 699000,
        priceFormatted: "699.000",
        type: "SaaS Manajemen Sekolah",
        badge: "Best Seller",
        isPopular: true,
        desc: "Sistem informasi akademik, SPP online, absensi QR, & rapor digital.",
      },
      {
        id: "saas-3",
        name: "SATAK Custom Enterprise SaaS",
        speed: "Custom Workflow",
        price: 1250000,
        priceFormatted: "1.250.000",
        type: "Integrasi Sistem Custom",
        badge: "Customizable",
        desc: "Pengembangan software cloud custom sesuai kebutuhan bisnis Anda.",
      },
    ],
  };

  // Determine initial category
  const getInitialCategory = () => {
    if (initialData?.category) return initialData.category;
    if (initialData?.service === "cloud") return "cloud";
    if (initialData?.service === "saas") return "saas";
    return "school";
  };

  // Form State
  const [formData, setFormData] = useState({
    namaLengkap: "",
    noHandphone: "",
    email: "",
    kebutuhan: getInitialCategory(), // school | umkm | hotel | office | cloud | saas
    selectedService: initialData?.serviceId || satakCategories.find((category) => category.id === getInitialCategory())?.services[0].id || "satak-school",
    persetujuan: false,
    
    // Lokasi
    provinsi: "Nusa Tenggara Barat",
    kota: "Lombok Timur",
    kecamatan: "Selong",
    kelurahan: "Khusus Selong",
    alamatLengkap: "",
    patokan: "",

    // Paket
    selectedPackageId: initialData?.packageId || (getInitialCategory() === "school" ? "satak-school" : packagesList[getInitialCategory()] ? packagesList[getInitialCategory()][1].id : "satak-school"),

    // Promo
    promoCode: "",
    appliedPromo: null,
    promoError: "",
  });

  // Coverage check state
  const [coverageChecked, setCoverageChecked] = useState(true);
  const [checkingCoverage, setCheckingCoverage] = useState(false);

  // Success Modal
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Sync initial selection if provided
  useEffect(() => {
    if (initialData?.category || initialData?.packageId) {
      const cat = initialData.category || (initialData.service === "cloud" ? "cloud" : initialData.service === "saas" ? "saas" : "school");
      const pkgId = initialData.packageId || (cat === "school" ? "satak-school" : packagesList[cat] ? packagesList[cat][0].id : "satak-school");
      setFormData((prev) => ({
        ...prev,
        kebutuhan: cat,
        selectedService: initialData.serviceId || satakCategories.find((category) => category.id === cat)?.services[0].id || "satak-school",
        selectedPackageId: pkgId,
      }));
    }
  }, [initialData]);

  // Active package details
  const activePackageList = formData.kebutuhan === "school" ? packagesList.internet : packagesList[formData.kebutuhan] || packagesList.school;
  const currentSelectedPackage =
    activePackageList.find((p) => p.id === formData.selectedPackageId) || activePackageList[0];
  const selectedServiceName = satakCategories
    .find((category) => category.id === formData.kebutuhan)
    ?.services.find((service) => service.id === formData.selectedService)?.name || "-";

  // Calculation values
  const basePrice = currentSelectedPackage?.price || 499000;
  const installationFee = 0; // Promo Gratis Pemasangan
  const normalInstallationFee = 500000;
  
  let discountAmount = 0;
  if (formData.appliedPromo) {
    if (formData.appliedPromo.type === "percent") {
      discountAmount = (basePrice * formData.appliedPromo.value) / 100;
    } else if (formData.appliedPromo.type === "fixed") {
      discountAmount = formData.appliedPromo.value;
    }
  }

  const subtotalAfterDiscount = Math.max(0, basePrice - discountAmount);
  const taxAmount = Math.round(subtotalAfterDiscount * 0.11); // PPN 11%
  const totalFirstMonth = subtotalAfterDiscount + taxAmount + installationFee;

  // Promos Available
  const promoCodesDatabase = [
    { code: "SATAK2026", type: "fixed", value: 50000, label: "Diskon Rp 50.000 Pelanggan Baru" },
    { code: "SATAKMERDEKA", type: "percent", value: 20, label: "Diskon 20% Khusus Hari Ini" },
    { code: "SATAKSEKOLAH", type: "percent", value: 15, label: "Diskon 15% Edukasi & Sekolah" },
  ];

  const handleApplyPromo = () => {
    const trimmedCode = formData.promoCode.trim().toUpperCase();
    if (!trimmedCode) {
      setFormData((prev) => ({ ...prev, promoError: "Silakan masukkan kode promo." }));
      return;
    }

    const found = promoCodesDatabase.find((p) => p.code === trimmedCode);
    if (found) {
      setFormData((prev) => ({
        ...prev,
        appliedPromo: found,
        promoError: "",
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        appliedPromo: null,
        promoError: "Kode promo tidak valid atau sudah kadaluarsa.",
      }));
    }
  };

  const handleCheckCoverage = () => {
    setCheckingCoverage(true);
    setTimeout(() => {
      setCheckingCoverage(false);
      setCoverageChecked(true);
    }, 800);
  };

  const handleCategoryChange = (categoryId) => {
    const targetPackages = categoryId === "school" ? packagesList.internet : packagesList[categoryId] || packagesList.school;
    const defaultPackage = targetPackages[0].id;
    const selectedCategory = satakCategories.find((category) => category.id === categoryId);
    setFormData((prev) => ({
      ...prev,
      kebutuhan: categoryId,
      selectedService: selectedCategory?.services[0].id || "satak-school",
      selectedPackageId: defaultPackage,
    }));
  };

  const handleServiceChange = (serviceId) => {
    const selectedService = satakCategories
      .find((category) => category.id === formData.kebutuhan)
      ?.services.find((service) => service.id === serviceId);
    const targetPackages = packagesList[selectedService?.packageKey] || packagesList.school;
    setFormData((prev) => ({
      ...prev,
      selectedService: serviceId,
      selectedPackageId: selectedService?.packageKey === "internet" ? serviceId : targetPackages[0].id,
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmitRegistration = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!formData.namaLengkap || !formData.noHandphone || !formData.email) {
      alert("Mohon lengkapi Data Diri (Nama, Nomor HP, Email) terlebih dahulu.");
      return;
    }

    if (!formData.persetujuan) {
      alert("Mohon centang persetujuan syarat & ketentuan registrasi.");
      return;
    }

    setShowSuccessModal(true);
  };

  const handleSendToWhatsApp = () => {
    const selectedCatInfo = satakCategories.find((c) => c.id === formData.kebutuhan);
    const categoryName = selectedCatInfo ? selectedCatInfo.name : formData.kebutuhan.toUpperCase();

    const message = `*FORM PENDAFTARAN LAYANAN SATAK* 🚀
=================================
👤 *DATA DIRI PELANGGAN*
• Nama Lengkap: ${formData.namaLengkap}
• No. WhatsApp: ${formData.noHandphone}
• Email: ${formData.email}
• Kategori Kebutuhan: *${categoryName}*
• Layanan: *${selectedServiceName}*

📍 *LOKASI PEMASANGAN*
• Provinsi: ${formData.provinsi}
• Kota/Kabupaten: ${formData.kota}
• Kecamatan: ${formData.kecamatan}
• Kelurahan: ${formData.kelurahan}
• Alamat Lengkap: ${formData.alamatLengkap || "-"}
• Patokan Lokasi: ${formData.patokan || "-"}

📦 *PAKET LAYANAN TERPILIH*
• Kategori: ${categoryName}
• Layanan: *${selectedServiceName}*
• Nama Paket: *${currentSelectedPackage.name}*
• Spesifikasi/Speed: ${currentSelectedPackage.speed}
• Biaya Bulanan: Rp ${currentSelectedPackage.priceFormatted}

🏷️ *PROMO & DISKON*
• Kode Promo: ${formData.appliedPromo ? formData.appliedPromo.code : "Tidak ada"}
• Diskon: Rp ${discountAmount.toLocaleString("id-ID")}
• Biaya Pemasangan: Rp 0 (PROMO BEBAS PASANG Rp 500.000)

💰 *ESTIMASI BIAYA BULAN PERTAMA*
• Subtotal: Rp ${subtotalAfterDiscount.toLocaleString("id-ID")}
• PPN (11%): Rp ${taxAmount.toLocaleString("id-ID")}
• *TOTAL DIBAYAR:* *Rp ${totalFirstMonth.toLocaleString("id-ID")}*

=================================
Mohon diproses pendaftaran & verifikasi jadwal pemasangan SATAK. Terima kasih!`;

    window.open(`https://wa.me/${WA_ADMIN}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-slate-50 relative pb-32 animate-in fade-in duration-300">
      
      {/* Top Breadcrumb Navigation */}
      <div className="bg-white border-b border-gray-100 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-2 rounded-full transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Beranda
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
              <span className="hidden sm:inline text-gray-400">Portal Resmi</span>
              <span className="bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Registrasi Aman & Resmi SATAK ID
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Banner Header */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-700 to-cyan-700 text-white pt-10 pb-16">
        <DotField
          dotColor="#ffffff"
          dotSize={1.5}
          gap={24}
          baseOpacity={0.2}
          hoverRadius={100}
          hoverStrength={6}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-extrabold tracking-wider uppercase text-cyan-200">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                Formulir Berlangganan SATAK
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Hai <TextType text={["Sobat SATAK", "Mitra Edukasi", "Pelaku UMKM", "Pengelola Hotel"]} typingSpeed={70} deletingSpeed={40} pauseDuration={1200} className="text-cyan-300 inline-block" />
              </h1>
              <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                Lengkapi seluruh informasi di bawah ini untuk mendapatkan layanan <strong className="text-white font-black">#WiFiTerbaik</strong>, SATAK Cloud, & Solusi Digital terandal untuk Anda!
              </p>
            </div>

            {/* Visual Mascot Header Card */}
            <div className="relative flex-shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 bg-white/10 backdrop-blur-md rounded-3xl p-3 border border-white/20 shadow-2xl flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-500/10 opacity-50 group-hover:opacity-80 transition-opacity" />
                <img
                  src={mascotImg}
                  alt="SATAK Mascot"
                  className="w-full h-full object-contain drop-shadow-xl relative z-10 transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sticky Jump Navigation / Steps Bar (Cols 1-3) */}
          <div className="lg:col-span-3">
            <div className="sticky top-28 bg-white rounded-3xl p-5 border border-gray-200/80 shadow-md space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-2">
                Tahap Pendaftaran
              </div>

              <nav className="space-y-1.5">
                {[
                  { id: "data-diri", label: "1. Data Diri & Kategori", icon: User },
                  { id: "lokasi", label: "2. Lokasi Pemasangan", icon: MapPin },
                  { id: "promo", label: "3. Promo & Diskon", icon: Tag },
                  { id: "biaya", label: "4. Biaya & Ringkasan", icon: CreditCard },
                ].map((step) => {
                  const StepIcon = step.icon;
                  const isActive = activeStep === step.id;

                  return (
                    <a
                      key={step.id}
                      href={`#${step.id}`}
                      onClick={() => setActiveStep(step.id)}
                      className={`flex items-center gap-3 p-3 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-blue-600 text-white shadow-md shadow-blue-600/25 translate-x-1"
                          : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <StepIcon className={`w-4 h-4 ${isActive ? "text-white" : "text-blue-600"}`} />
                      <span>{step.label}</span>
                    </a>
                  );
                })}
              </nav>

              {/* Assistance Box */}
              <div className="pt-4 border-t border-gray-100 bg-blue-50/70 p-3.5 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-blue-900">
                  <MessageCircle className="w-4 h-4 text-blue-600" />
                  <span>Butuh Bantuan?</span>
                </div>
                <p className="text-[11px] text-gray-600 leading-snug">
                  Tim Layanan SATAK siap memandu Anda melalui WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${WA_ADMIN}?text=Halo%20Admin%20SATAK,%20bisa%20dibantu%20proses%20pendaftaran%20langganan?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2 px-3 bg-white hover:bg-blue-600 hover:text-white border border-blue-200 text-blue-700 font-extrabold text-xs rounded-xl transition-all shadow-xs"
                >
                  Hubungi Admin WA
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Content Sections (Cols 4-12) */}
          <div className="lg:col-span-9 space-y-8">
            
            {/* ========================================================================= */}
            {/* STEP 1: DATA DIRI & KATEGORI SATAK                                       */}
            {/* ========================================================================= */}
            <div id="data-diri" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6 scroll-mt-28">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg shadow-inner">
                    1
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Data Diri & Kategori Layanan</h2>
                    <p className="text-xs text-gray-500 font-medium">Lengkapi data pemesan dan tentukan kategori layanan SATAK yang Anda butuhkan.</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 font-bold">
                  Wajib Diisi
                </Badge>
              </div>

              {/* Alert Warning Box */}
              <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-300/80 text-amber-900 flex items-start gap-3 shadow-xs">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                  Pilih kategori layanan SATAK yang sesuai agar kami dapat menyesuaikan spesifikasi paket dan penawaran terbaik untuk Anda.
                </p>
              </div>

              {/* Form Input Fields */}
              <div className="space-y-5">
                {/* Nama Lengkap */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Nama Lengkap / Nama Instansi <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Masukkan nama lengkap atau nama instansi / sekolah / usaha"
                      value={formData.namaLengkap}
                      onChange={(e) => handleInputChange("namaLengkap", e.target.value)}
                      className="pl-10 h-12 bg-gray-50/50 border-gray-200 focus:bg-white text-sm rounded-xl font-medium"
                      required
                    />
                  </div>
                </div>

                {/* Grid 2 Cols: Nomor WA & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Handphone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Nomor Handphone / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3 font-extrabold text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded-md">
                        +62
                      </div>
                      <Input
                        type="tel"
                        placeholder="812 3456 7890"
                        value={formData.noHandphone}
                        onChange={(e) => handleInputChange("noHandphone", e.target.value)}
                        className="pl-14 h-12 bg-gray-50/50 border-gray-200 focus:bg-white text-sm rounded-xl font-medium"
                        required
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium">
                      Pastikan nomor yang dimasukkan aktif WhatsApp untuk jadwal instalasi.
                    </p>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Email Aktif <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="emailanda@domain.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="pl-10 h-12 bg-gray-50/50 border-gray-200 focus:bg-white text-sm rounded-xl font-medium"
                        required
                      />
                    </div>
                    <p className="text-[11px] text-gray-400 mt-1 font-medium">
                      Untuk pengiriman invoice & resi aktivasi langganan.
                    </p>
                  </div>
                </div>

                {/* ========================================================================= */}
                {/* PILIH KATEGORI RESMI SATAK (ADAPTED TO SATAK'S OFFICIAL PRODUCT LINES)    */}
                {/* ========================================================================= */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="block text-xs font-bold text-gray-800">
                      Pilih Kategori Layanan SATAK <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-blue-600 font-bold">Kategori Resmi SATAK</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {satakCategories.map((item) => {
                      const ItemIcon = item.icon;
                      const isSelected = formData.kebutuhan === item.id;

                      return (
                        <div
                          key={item.id}
                          onClick={() => handleCategoryChange(item.id)}
                          className={`flex items-center justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                            isSelected
                              ? "bg-blue-50/90 border-blue-600 shadow-md shadow-blue-500/15 scale-[1.01]"
                              : "bg-white border-gray-200 hover:border-blue-300 hover:bg-gray-50/50"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-xl transition-colors ${
                              isSelected ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                            }`}>
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5 text-left">
                              <h4 className={`text-xs font-black tracking-tight ${isSelected ? "text-blue-900" : "text-gray-900"}`}>
                                {item.name}
                              </h4>
                              <p className="text-[10px] text-gray-500 font-medium leading-tight">
                                {item.subtext}
                              </p>
                            </div>
                          </div>

                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ml-2 ${
                            isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

                {/* Package selection stays directly with the selected service. */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-gray-800">
                      Pilih Paket Layanan <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[11px] text-blue-600 font-bold">Paket Tersedia</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activePackageList.map((pkg) => {
                      const isSelected = formData.selectedPackageId === pkg.id;

                      return (
                        <div
                          key={pkg.id}
                          onClick={() => {
                            if (formData.kebutuhan === "school" && pkg.id.startsWith("satak-")) {
                              handleServiceChange(pkg.id);
                            } else {
                              handleInputChange("selectedPackageId", pkg.id);
                            }
                          }}
                          className={`relative p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-3 ${
                            isSelected
                              ? "bg-blue-50/60 border-blue-600 shadow-xl shadow-blue-500/15 scale-[1.01]"
                              : "bg-white border-gray-200 hover:border-blue-300 shadow-sm"
                          }`}
                        >
                          {pkg.isPopular && (
                            <div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-black px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                              Rekomendasi
                            </div>
                          )}

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="bg-blue-100 text-blue-800 font-extrabold text-[10px]">
                                {pkg.badge}
                              </Badge>
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                                isSelected ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 bg-white"
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>

                            <h3 className="text-base font-black text-gray-900 tracking-tight">{pkg.name}</h3>
                            <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{pkg.desc}</p>
                          </div>

                          <div className="pt-3 border-t border-gray-100/80 flex items-center justify-between">
                            <div>
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Spesifikasi / Speed</div>
                              <div className="text-xs font-black text-blue-700">{pkg.speed}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-[10px] text-gray-400 font-bold uppercase">Harga Bulanan</div>
                              <div className="text-sm font-black text-gray-900">
                                Rp {pkg.priceFormatted} <span className="text-[10px] font-normal text-gray-500">/bln</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Terms Agreement Checkbox */}
                <div className="pt-3">
                  <label className="flex items-start gap-3 p-3.5 rounded-2xl bg-gray-50/80 border border-gray-100 cursor-pointer hover:bg-gray-100/60 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.persetujuan}
                      onChange={(e) => handleInputChange("persetujuan", e.target.checked)}
                      className="mt-0.5 h-4.5 w-4.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="text-xs text-gray-600 font-medium leading-relaxed">
                      Saya menyetujui bahwa data diri tersebut akan digunakan untuk proses pendaftaran & verifikasi pemasangan layanan SATAK ID.
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 2: LOKASI PEMASANGAN                                                */}
            {/* ========================================================================= */}
            <div id="lokasi" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6 scroll-mt-28">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg shadow-inner">
                    2
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Lokasi Pemasangan</h2>
                    <p className="text-xs text-gray-500 font-medium">Cek apakah lokasi Anda sudah tercakup jaringan jangkauan SATAK Fiber.</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-800 font-bold">
                  Coverage Check
                </Badge>
              </div>

              {/* Status Coverage Card */}
              <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 text-emerald-900 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase text-emerald-900">Kabar Baik! Area Tercover</h4>
                    <p className="text-xs text-emerald-700 font-medium">
                      Jaringan SATAK Ultra Fiber Speed siap dipasang di area Lombok & seluruh wilayah NTB.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCheckCoverage}
                  disabled={checkingCoverage}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-extrabold rounded-xl shadow-xs transition-colors flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>{checkingCoverage ? "Mengecek..." : "Cek Ulang Area"}</span>
                </button>
              </div>

              {/* Inputs Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Provinsi */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Provinsi</label>
                  <Select
                    value={formData.provinsi}
                    onChange={(e) => handleInputChange("provinsi", e.target.value)}
                    className="h-11 bg-gray-50/50"
                  >
                    <option value="Nusa Tenggara Barat">Nusa Tenggara Barat</option>
                    <option value="Bali">Bali</option>
                    <option value="Jawa Timur">Jawa Timur</option>
                    <option value="DKI Jakarta">DKI Jakarta</option>
                    <option value="Jawa Barat">Jawa Barat</option>
                  </Select>
                </div>

                {/* Kota / Kabupaten */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Kota / Kabupaten</label>
                  <Select
                    value={formData.kota}
                    onChange={(e) => handleInputChange("kota", e.target.value)}
                    className="h-11 bg-gray-50/50"
                  >
                    <option value="Lombok Timur">Lombok Timur (Selong)</option>
                    <option value="Kota Mataram">Kota Mataram</option>
                    <option value="Lombok Barat">Lombok Barat</option>
                    <option value="Lombok Tengah">Lombok Tengah</option>
                    <option value="Lombok Utara">Lombok Utara</option>
                    <option value="Sumbawa">Sumbawa</option>
                  </Select>
                </div>

                {/* Kecamatan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Kecamatan</label>
                  <Input
                    type="text"
                    placeholder="Masukkan Kecamatan"
                    value={formData.kecamatan}
                    onChange={(e) => handleInputChange("kecamatan", e.target.value)}
                    className="h-11 bg-gray-50/50"
                  />
                </div>

                {/* Kelurahan */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Kelurahan / Desa</label>
                  <Input
                    type="text"
                    placeholder="Masukkan Kelurahan / Desa"
                    value={formData.kelurahan}
                    onChange={(e) => handleInputChange("kelurahan", e.target.value)}
                    className="h-11 bg-gray-50/50"
                  />
                </div>
              </div>

              {/* Alamat Lengkap & Patokan */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Alamat Lengkap & RT/RW <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Contoh: Jl. Diponegoro No. 45, RT 02 / RW 04, Kel. Selong..."
                    value={formData.alamatLengkap}
                    onChange={(e) => handleInputChange("alamatLengkap", e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/50 p-3 text-sm text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">
                    Patokan Lokasi / Catatan Khusus
                  </label>
                  <Input
                    type="text"
                    placeholder="Contoh: Samping Masjid Nurul Huda, pagar hitam 2 lantai"
                    value={formData.patokan}
                    onChange={(e) => handleInputChange("patokan", e.target.value)}
                    className="h-11 bg-gray-50/50"
                  />
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* STEP 3: PROMO & DISKON                                                    */}
            {/* ========================================================================= */}
            <div id="promo" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6 scroll-mt-28">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg shadow-inner">
                    3
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Makin Hemat Dengan Promo</h2>
                    <p className="text-xs text-gray-500 font-medium">Masukkan kode promo untuk mendapatkan diskon spesial dari SATAK.</p>
                  </div>
                </div>
                <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700 font-bold">
                  Diskon Spesial
                </Badge>
              </div>

              {/* Promo Code Input Box */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Masukkan kode promo (Contoh: SATAK2026)"
                    value={formData.promoCode}
                    onChange={(e) => handleInputChange("promoCode", e.target.value)}
                    className="pl-10 h-12 uppercase font-black text-sm bg-gray-50/50"
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleApplyPromo}
                  className="w-full sm:w-auto h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-md shadow-blue-600/25 cursor-pointer"
                >
                  Terapkan Promo
                </Button>
              </div>

              {/* Promo Error or Applied Alert */}
              {formData.promoError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                  ⚠️ {formData.promoError}
                </div>
              )}

              {formData.appliedPromo && (
                <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-black">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Promo Berhasil Dipasang: {formData.appliedPromo.code} ({formData.appliedPromo.label})</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleInputChange("appliedPromo", null)}
                    className="text-xs font-bold text-red-600 hover:underline cursor-pointer"
                  >
                    Hapus
                  </button>
                </div>
              )}

            </div>

            {/* ========================================================================= */}
            {/* STEP 4: BIAYA & RINGKASAN                                                 */}
            {/* ========================================================================= */}
            <div id="biaya" className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-md space-y-6 scroll-mt-28">
              
              <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-black text-lg shadow-inner">
                    4
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">Biaya & Ringkasan Pendaftaran</h2>
                    <p className="text-xs text-gray-500 font-medium">Total estimasi yang akan dibayarkan pada bulan pertama.</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-blue-600 text-white font-black text-xs">
                  Ringkasan Pesanan
                </Badge>
              </div>

              {/* Summary Card with Deep Blue Theme */}
              <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-5 shadow-2xl border border-slate-800">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-black">
                      Paket {satakCategories.find((c) => c.id === formData.kebutuhan)?.name} Terpilih
                    </span>
                    <h3 className="text-xl font-black text-white">{currentSelectedPackage.name}</h3>
                    <p className="text-xs text-cyan-200 font-semibold">{selectedServiceName}</p>
                    <p className="text-xs text-slate-400 font-medium">{currentSelectedPackage.speed}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-600 text-white font-extrabold">{currentSelectedPackage.badge}</Badge>
                  </div>
                </div>

                {/* Cost Rows */}
                <div className="space-y-2.5 text-xs text-slate-300 font-medium">
                  <div className="flex justify-between">
                    <span>Biaya Paket Bulanan</span>
                    <span className="font-bold text-white">Rp {currentSelectedPackage.priceFormatted}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Biaya Pemasangan & Aktivasi</span>
                    <div className="text-right">
                      <span className="line-through text-slate-500 mr-2">Rp {normalInstallationFee.toLocaleString("id-ID")}</span>
                      <span className="font-extrabold text-emerald-400">GRATIS (PROMO BEBAS PASANG)</span>
                    </div>
                  </div>

                  {formData.appliedPromo && (
                    <div className="flex justify-between text-emerald-400 font-bold">
                      <span>Diskon Kode Promo ({formData.appliedPromo.code})</span>
                      <span>- Rp {discountAmount.toLocaleString("id-ID")}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-400">
                    <span>PPN 11%</span>
                    <span>Rp {taxAmount.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                {/* Total Grand Line */}
                <div className="pt-4 border-t border-slate-800 flex items-baseline justify-between">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Total Pembayaran Bulan Pertama</div>
                    <div className="text-[10px] text-cyan-400 font-bold">Sudah termasuk PPN 11% & Tanpa Biaya Tersembunyi</div>
                  </div>

                  <div className="text-right">
                    <div className="text-2xl sm:text-3xl font-black text-cyan-300 tracking-tight">
                      Rp {totalFirstMonth.toLocaleString("id-ID")}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
                <div className="text-xs text-gray-500 font-medium text-center sm:text-left max-w-2xl">
                  Pastikan semua informasi sudah diisi agar data bisa dikirim. Dengan menekan tombol kirim, Anda setuju dengan <a href="#" className="text-blue-600 font-bold hover:underline">syarat dan ketentuan</a> yang berlaku.
                </div>

                <Button
                  type="button"
                  onClick={handleSubmitRegistration}
                  className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/35 gap-2 cursor-pointer transition-transform active:scale-95 flex-shrink-0"
                >
                  <span>Kirim Langganan</span>
                  <Send className="w-4 h-4 fill-white" />
                </Button>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUCCESS CONFIRMATION MODAL RECEIPT                                       */}
      {/* ========================================================================= */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-100 space-y-6 relative overflow-hidden">
            
            {/* Top Close */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header Success Visual */}
            <div className="text-center space-y-2">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9 stroke-[2.5]" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 tracking-tight">Formulir Pendaftaran Siap!</h3>
              <p className="text-xs text-gray-500 font-medium">
                Terima kasih, data Anda telah dikompilasi ke dalam resi pendaftaran SATAK ID.
              </p>
            </div>

            {/* Ticket Receipt Container */}
            <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-xs space-y-2 font-medium">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Nama Pelanggan / Instansi:</span>
                <span className="font-black text-gray-900">{formData.namaLengkap || "Sobat SATAK"}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Kategori:</span>
                <span className="font-bold text-blue-700">{satakCategories.find((c) => c.id === formData.kebutuhan)?.name}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">WhatsApp:</span>
                <span className="font-bold text-gray-900">+62 {formData.noHandphone}</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Paket Terpilih:</span>
                <span className="font-bold text-blue-700">{currentSelectedPackage.name} ({currentSelectedPackage.speed})</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Lokasi:</span>
                <span className="font-bold text-gray-900">{formData.kota}, {formData.provinsi}</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-black text-gray-900">
                <span>Total Estimasi:</span>
                <span className="text-blue-700">Rp {totalFirstMonth.toLocaleString("id-ID")}</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="space-y-3 pt-2">
              <Button
                onClick={handleSendToWhatsApp}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl shadow-lg shadow-emerald-600/30 gap-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Kirim Pendaftaran via WhatsApp</span>
              </Button>

              <Button
                variant="outline"
                onClick={onBackToHome}
                className="w-full h-11 border-gray-200 text-gray-700 font-bold text-xs rounded-xl cursor-pointer"
              >
                Kembali ke Halaman Utama
              </Button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
