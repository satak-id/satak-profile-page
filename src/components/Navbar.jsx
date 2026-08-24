import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Menu, X, Wifi } from "lucide-react";

import logoImg from "@/assets/logo.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Beranda");

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Layanan", href: "#layanan", hasDropdown: true },
    { name: "Coverage", href: "#coverage" },
    { name: "Blog", href: "#blog" },
    { name: "Kontak", href: "#kontak" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center cursor-pointer py-1">
            <a href="#" className="block">
              <img
                src={logoImg}
                alt="SATAK KONEK TERUS Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain hover:scale-[1.02] transition-transform duration-200"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <a
                  href={link.href}
                  onClick={() => setActiveTab(link.name)}
                  className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 ${
                    activeTab === link.name
                      ? "text-blue-700"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>
                {activeTab === link.name && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-blue-600 rounded-full" />
                )}
              </div>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Button className="font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 shadow-lg shadow-blue-600/25">
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
              className={`block px-3 py-2 rounded-lg text-base font-semibold ${
                activeTab === link.name
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <Button className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white gap-2 justify-center">
              Langganan Sekarang
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
