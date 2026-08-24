import React from "react";
import { ShieldCheck, Users, MapPin, Headphones } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Uptime Jaringan",
    },
    {
      icon: Users,
      value: "10.000+",
      label: "Pelanggan Aktif",
    },
    {
      icon: MapPin,
      value: "100+",
      label: "Area Terjangkau",
    },
    {
      icon: Headphones,
      value: "24/7",
      label: "Layanan Support",
    },
  ];

  return (
    <section className="bg-blue-950 text-white py-8 border-y border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-blue-800/60">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-center gap-4 px-4 py-2"
              >
                <div className="p-3 bg-blue-900/60 rounded-2xl text-cyan-400 border border-blue-800/50 flex-shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200 font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
