import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Wifi,
  GraduationCap,
  Cloud,
  Layers,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

export function Navbar({ onNavigateToHome, onNavigateToInternetService, currentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    currentPage === "internet-service" ? "Layanan" : "Beranda"
  );

  const serviceDropdownItems = [
    {
      id: "internet-service",
      name: "Internet Service",
      subtext: "SATAK School, UMKM, Hotel & Office",
      icon: GraduationCap,
      category: "school",
    },
    {
      id: "satak-cloud",
      name: "SATAK Cloud",
      subtext: "Penyimpanan Cloud & Server Managed",
      icon: Cloud,
      category: "school",
    },
    {
      id: "saas-digital",
      name: "SaaS & Layanan Digital",
      subtext: "Software Cloud & Integrasi Sistem",
      icon: Layers,
      category: "school",
    },
  ];

  const handleNavClick = (linkName) => {
    setActiveTab(linkName);
    setIsOpen(false);
    if (linkName === "Beranda") {
      if (onNavigateToHome) onNavigateToHome();
    } else if (linkName === "Layanan") {
      if (onNavigateToInternetService) onNavigateToInternetService("school");
    }
  };

  const handleDropdownItemClick = (category = "school") => {
    setActiveTab("Layanan");
    setIsOpen(false);
    setMobileServicesOpen(false);
    if (onNavigateToInternetService) {
      onNavigateToInternetService(category);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer py-1"
            onClick={() => handleNavClick("Beranda")}
          >
            <img
              src={logoImg}
              alt="SATAK KONEK TERUS Logo"
              className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:scale-[1.02] transition-transform duration-200"
            />
          </div>

          {/* Desktop Navigation with Dropdown */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Beranda", href: "#" },
              { name: "Tentang Kami", href: "#tentang" },
              { name: "Layanan", href: "#layanan", hasDropdown: true },
              { name: "Coverage", href: "#coverage" },
              { name: "Blog", href: "#blog" },
              { name: "Kontak", href: "#kontak" },
            ].map((link) => {
              if (link.hasDropdown) {
                return (
                  <div key={link.name} className="relative group py-2">
                    <div
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-default select-none ${
                        activeTab === link.name
                          ? "text-blue-700"
                          : "text-gray-600 group-hover:text-blue-600"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:rotate-180" />
                    </div>
                    {activeTab === link.name && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />
                    )}

                    {/* Interactive Dropdown Menu Panel (Centered Under Layanan Item, Compact Spacing) */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-2xl p-1.5 shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50 text-left">
                      <div className="space-y-0.5">
                        {serviceDropdownItems.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => handleDropdownItemClick(item.category)}
                              className="flex items-center gap-2.5 w-full p-1.5 px-2.5 rounded-xl hover:bg-blue-50/80 transition-colors text-left group/item cursor-pointer"
                            >
                              <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                                <ItemIcon className="w-3.5 h-3.5" />
                              </div>
                              <span className="text-xs font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors whitespace-nowrap">
                                {item.name}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={link.name} className="relative group py-2">
                  <button
                    onClick={() => handleNavClick(link.name)}
                    className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                      activeTab === link.name
                        ? "text-blue-700"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>
                  {activeTab === link.name && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => {
                if (onNavigateToInternetService) onNavigateToInternetService("school");
              }}
              className="font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg shadow-blue-600/25 cursor-pointer"
            >
              Langganan Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
          {[
            { name: "Beranda", href: "#" },
            { name: "Tentang Kami", href: "#tentang" },
            { name: "Layanan", href: "#layanan", hasDropdown: true },
            { name: "Coverage", href: "#coverage" },
            { name: "Blog", href: "#blog" },
            { name: "Kontak", href: "#kontak" },
          ].map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg text-base font-semibold text-gray-700 hover:bg-gray-50"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pl-4 space-y-1 pt-1 border-l-2 border-blue-100 ml-3">
                      {serviceDropdownItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleDropdownItemClick(item.category)}
                          className="block w-full text-left px-3 py-2 rounded-lg text-xs font-bold text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.name)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-semibold ${
                  activeTab === link.name
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </button>
            );
          })}
          <div className="pt-2">
            <Button
              onClick={() => {
                if (onNavigateToInternetService) onNavigateToInternetService("school");
                setIsOpen(false);
              }}
              className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 justify-center"
            >
              Langganan Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
