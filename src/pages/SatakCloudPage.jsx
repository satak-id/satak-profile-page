import React, { useState } from "react";
import {
  Cloud,
  CheckCircle2,
  ArrowLeft,
  Server,
  Database,
  ShieldCheck,
  HardDrive,
  Cpu,
  Sparkles,
  ChevronUp,
} from "lucide-react";
import layanan2 from "@/assets/layanan2.png";

const WA_PHONE_NUMBER = "6281947556108";

export function SatakCloudPage({ onBackToHome, onNavigateToSubscribe, initialCategory = "storage" }) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const categories = [
    { id: "storage", name: "Cloud Storage", icon: HardDrive },
    { id: "vps", name: "VPS & Cloud Server", icon: Server },
    { id: "private", name: "Private Cloud", icon: Cpu },
    { id: "database", name: "Database Cloud", icon: Database },
  ];

  const packagesData = {
    storage: [
      {
        id: "cloud-lite",
        name: "Cloud Lite",
        oldSpec: "50 GB Storage",
        spec: "100 GB NVMe",
        price: "99.000",
        image: layanan2,
        features: [
          "Penyimpanan NVMe High Speed",
          "Automatic Daily Cloud Backup",
          "Akses Enkripsi End-to-End AES 256",
          "Support Multi-Platform Web & Mobile",
          "Free SSL & Bandwidth Tanpa Batas",
          "Bebas Biaya Pasang & Konfigurasi",
        ],
      },
      {
        id: "cloud-business",
        name: "Cloud Business",
        oldSpec: "250 GB Storage",
        spec: "500 GB NVMe",
        price: "249.000",
        isPopular: true,
        image: layanan2,
        features: [
          "Penyimpanan NVMe High Speed",
          "Multi-User Team Collaboration",
          "Automatic Real-Time Sync & Backup",
          "Enkripsi Keamanan Sertifikasi ISO 27001",
          "Dedicated Bandwidth 1 Gbps Link",
          "Support Prioritas 24/7 Response",
        ],
      },
      {
        id: "cloud-enterprise",
        name: "Cloud Enterprise",
        oldSpec: "1 TB Storage",
        spec: "2 TB NVMe",
        price: "699.000",
        image: layanan2,
        features: [
          "Private Storage Dedicated Subnet",
          "Custom User Permission & Audit Log",
          "Disaster Recovery & Redundant Storage",
          "High Speed Direct Fiber Backhaul",
          "Garansi Service Level Agreement (SLA) 99.9%",
          "Personal Account Manager Khusus",
        ],
      },
      {
        id: "cloud-ultimate",
        name: "Cloud Ultimate",
        oldSpec: "5 TB Storage",
        spec: "10 TB NVMe",
        price: "1.850.000",
        image: layanan2,
        features: [
          "Unlimited Multi-Region Replication",
          "Dedicated Infrastructure Storage Array",
          "Personal Account Executive & Architect",
          "Garansi Uptime SLA 99.99%",
          "24/7 On-Site & Remote Technical Support",
          "Custom Integration API & S3 Compatible",
        ],
      },
    ],
    vps: [
      {
        id: "vps-starter",
        name: "VPS Starter",
        oldSpec: "1 vCPU / 2GB RAM",
        spec: "2 vCPU / 4GB RAM",
        price: "149.000",
        image: layanan2,
        features: [
          "80 GB NVMe Storage Super Fast",
          "Bandwidth Unmetered 1 Gbps Shared",
          "1 IP Public Static Included",
          "Akses Full Root / Administrator",
          "Koneksi Data Center Lokal Indonesia",
          "Uptime SLA 99.9% Always On",
        ],
      },
      {
        id: "vps-pro",
        name: "VPS Pro",
        oldSpec: "2 vCPU / 4GB RAM",
        spec: "4 vCPU / 8GB RAM",
        price: "349.000",
        isPopular: true,
        image: layanan2,
        features: [
          "160 GB NVMe Storage Enterprise",
          "Bandwidth Unmetered High Speed",
          "Free Weekly Backup & Snapshot",
          "DDoS Protection Layer 4 & Layer 7",
          "Pilihan OS Linux / Windows Server",
          "Support Response Teknis < 15 Menit",
        ],
      },
      {
        id: "vps-hp",
        name: "VPS High Performance",
        oldSpec: "4 vCPU / 8GB RAM",
        spec: "8 vCPU / 16GB RAM",
        price: "749.000",
        image: layanan2,
        features: [
          "320 GB NVMe Storage Enterprise",
          "Dedicated vCPU Compute Node",
          "Free 2 IP Public Static Dedicated",
          "DDoS Protection Enterprise Grade",
          "Automatic Daily Snapshot Backup",
          "Priority Customer Success Support",
        ],
      },
      {
        id: "vps-dedicated",
        name: "VPS Dedicated Core",
        oldSpec: "8 vCPU / 16GB RAM",
        spec: "16 vCPU / 32GB RAM",
        price: "1.499.000",
        image: layanan2,
        features: [
          "640 GB NVMe Storage Enterprise Array",
          "Dedicated Unshared Core CPU Hardware",
          "Free 4 IP Public Static Dedicated",
          "Full Managed Server Support Service",
          "Custom Firewall & Private Interconnect",
          "Garansi SLA Uptime 99.99%",
        ],
      },
    ],
    private: [
      {
        id: "private-node",
        name: "Private Host Node",
        oldSpec: "Shared Node",
        spec: "1 Host Dedicated",
        price: "1.250.000",
        image: layanan2,
        features: [
          "Full Dedicated Hardware Host Node",
          "Custom Hypervisor Proxmox / VMware",
          "Private Local Subnet Network",
          "SLA Uptime 99.9% Data Center Tier-3",
          "Support Migrasi Server Gratis",
          "Direct Console Remote Access",
        ],
      },
      {
        id: "private-cluster",
        name: "Private HA Cluster",
        oldSpec: "2 Host Nodes",
        spec: "3 HA Host Nodes",
        price: "3.450.000",
        isPopular: true,
        image: layanan2,
        features: [
          "High Availability Auto-Failover Cluster",
          "Ceph Storage Distributed NVMe Array",
          "Multi-Core Dedicated Xeon Processor",
          "Public IP Subnet /28 Included",
          "Fully Managed Cloud Architect Support",
          "Disaster Recovery Replication Site",
        ],
      },
      {
        id: "private-dc",
        name: "Private Data Center",
        oldSpec: "Single Site",
        spec: "Multi-Region DC",
        price: "6.850.000",
        image: layanan2,
        features: [
          "Multi-Region Active-Active Cloud DC",
          "Custom Dedicated Fiber Interconnect",
          "ISO 27001 & SOC-2 Certified Facility",
          "Personal Infrastructure Engineer",
          "Emergency Response On-Site < 15 Menit",
          "Unlimited Resource Scaling",
        ],
      },
      {
        id: "private-ent",
        name: "Private Rack Dedicated",
        oldSpec: "Half Rack",
        spec: "Full Rack 42U",
        price: "12.500.000",
        image: layanan2,
        features: [
          "Full Cabinet Dedicated Server Rack 42U",
          "Dual Power Feed A+B Redundant SLA",
          "Direct Fiber Core Upstream 10 Gbps",
          "24/7 Dedicated On-Site Security",
          "Custom Hardware Deployment & Setup",
          "Executive SLA Guarantee 99.999%",
        ],
      },
    ],
    database: [
      {
        id: "db-starter",
        name: "Managed DB Starter",
        oldSpec: "1 GB RAM / 10 GB",
        spec: "2 GB RAM / 20 GB",
        price: "175.000",
        image: layanan2,
        features: [
          "Engine MySQL / PostgreSQL / MongoDB",
          "Automatic Daily Database Backup",
          "Encrypted Connection SSL/TLS",
          "Monitoring Query Performance",
          "Support Automatic Failover",
          "Free Migration Assitance",
        ],
      },
      {
        id: "db-pro",
        name: "Managed DB Pro",
        oldSpec: "4 GB RAM / 50 GB",
        spec: "8 GB RAM / 100 GB",
        price: "499.000",
        isPopular: true,
        image: layanan2,
        features: [
          "High Performance NVMe DB Storage",
          "Primary-Replica Auto Failover Cluster",
          "Automatic Point-in-Time Recovery",
          "Automated Database Index Optimization",
          "Garansi SLA Uptime 99.9%",
          "Dedicated Database Support Specialist",
        ],
      },
      {
        id: "db-ha",
        name: "DB HA Cluster",
        oldSpec: "8 GB RAM / 150 GB",
        spec: "16 GB RAM / 300 GB",
        price: "1.150.000",
        image: layanan2,
        features: [
          "Multi-AZ High Availability Cluster",
          "Zero Data Loss Synchronous Replication",
          "Dedicated Compute Node Hardware",
          "Free Public IP Static & Private VPC",
          "24/7 NOC Monitoring & Tuning",
          "Custom Connection Pooling Manager",
        ],
      },
      {
        id: "db-enterprise",
        name: "DB Enterprise Scale",
        oldSpec: "32 GB RAM / 500 GB",
        spec: "64 GB RAM / 1 TB",
        price: "2.950.000",
        image: layanan2,
        features: [
          "Ultra High IOPS Enterprise NVMe Array",
          "Multi-Region Active-Active DB Nodes",
          "Custom DBA Performance Engineering",
          "Executive Service Level Agreement 99.99%",
          "Priority Emergency Support 24/7 Instant",
          "Compliance Audit Log & Encryption",
        ],
      },
    ],
  };

  const currentPackages = packagesData[activeCategory] || packagesData.storage;

  const handleOrderWa = (pkgName, spec, price) => {
    const text = `Halo Admin SATAK, saya tertarik dan mau berlangganan layanan SATAK Cloud paket ${pkgName} (${spec} - Rp ${price}/bulan). Bisa dibantu proses pendaftaran dan aktivasi teknisnya? Terima kasih.`;
    window.open(`https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleChatSales = () => {
    const text = `Halo Admin SATAK, saya ingin berkonsultasi mengenai solusi SATAK Cloud & Managed Server. Mohon informasinya, terima kasih.`;
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
              <span className="text-gray-900 font-bold">Paket SATAK Cloud</span>
            </div>

            <div className="text-xs font-bold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              Data Center Indonesia ISO 27001 Certified
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* Section Header Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Pilihan Paket SATAK Cloud Services
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2 font-medium">
            Layanan cloud storage aman, server VPS performa tinggi, dan private cloud untuk bisnis Anda.
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
                  <div className="text-[10px] font-bold opacity-90 leading-none">Spesifikasi Utama</div>
                  <div className="text-sm sm:text-base font-black leading-tight flex items-baseline gap-1 mt-0.5">
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
                        onNavigateToSubscribe({ service: "cloud", packageId: "cld-2" });
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
