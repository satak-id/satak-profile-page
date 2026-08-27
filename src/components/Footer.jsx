import React, { useState } from "react";
import {
  Wifi,
  MapPin,
  Phone,
  Mail,
  X,
  ArrowLeft,
  Headphones,
  MessageCircle,
  HelpCircle,
  ShieldAlert,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import mascotImg from "@/assets/mascot.png";

// =========================================================================
// KONFIGURASI WHATSAPP ADMIN
// Anda dapat dengan mudah mengubah Nomor HP dan Pesan Otomatis di bawah ini:
// =========================================================================
const WA_PHONE_NUMBER = "6281947556108";
const WA_DEFAULT_MESSAGE =
  "Halo Admin SATAK, salam hangat. Saya mau bertanya mengenai prosedur pendaftaran dan jadwal pemasangan baru internet SATAK. Mohon informasinya, terima kasih";
const WA_PENGADUAN_MESSAGE =
  "Halo Admin SATAK, saya mengalami kendala/pengaduan terkait layanan internet SATAK. Mohon bantuan penanganannya, terima kasih.";

export function Footer({ onNavigateToSubscribe }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalView, setModalView] = useState("main"); // "main" | "pengaduan"

  // URL WhatsApp Berlangganan & Pengaduan
  const waUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(
    WA_DEFAULT_MESSAGE
  )}`;
  const waPengaduanUrl = `https://wa.me/${WA_PHONE_NUMBER}?text=${encodeURIComponent(
    WA_PENGADUAN_MESSAGE
  )}`;

  const handleOpenModal = () => {
    setModalView("main");
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer className="relative bg-[#081225] text-gray-300 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800/80">
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-white/95 p-2.5 rounded-2xl shadow-md">
                <img
                  src={logoImg}
                  alt="SATAK KONEK TERUS Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Menyediakan layanan internet cepat, stabil dan andal untuk rumah,
              bisnis, sekolah, hotel, dan kantor di seluruh wilayah Indonesia.
            </p>

            {/* Social Icons SVG */}
            <div className="flex items-center space-x-3 pt-2">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-blue-900/40 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-blue-900/40 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full bg-blue-900/40 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full bg-blue-900/40 hover:bg-blue-600 text-gray-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.34 1.55-1.35 2.56-.01 1.19.64 2.34 1.65 2.89 1.05.57 2.37.54 3.37-.08.97-.59 1.54-1.67 1.56-2.79.02-4.32.01-8.64.01-12.96z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Column 1: Layanan (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Layanan
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  ✓ SATAK School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  ✓ SATAK UMKM
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  ✓ SATAK Hotel
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  ✓ SATAK Office
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  ✓ Layanan Lainnya
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Informasi (Cols 7-8) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Informasi
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Coverage Area
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Bantuan (Cols 9-10) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Bantuan
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Panduan Pengguna
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Cols 11-12) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white tracking-wide">
              Kontak Kami
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Jl. Contoh No. 123, Selong, Lombok Timur, NTB</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>0819-4755-6108</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>info@satak.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Banner */}
        <div className="pt-8 text-center text-xs text-gray-500 font-medium">
          Copyright © SaaS SATAK-2026. All rights reserved.
        </div>
      </div>

      {/* Floating WhatsApp Action Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleOpenModal}
          aria-label="Buka Layanan Bantuan SATAK"
          className="flex items-center gap-2.5 bg-white text-gray-800 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-full shadow-2xl hover:shadow-green-500/30 border border-gray-100 hover:scale-105 transition-all duration-300 group cursor-pointer"
        >
          <span>Chat via WhatsApp</span>
          <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:bg-[#20ba5a] transition-colors">
            <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* FLOATING ACTION POPUP CARD (Positioned above WhatsApp Button at bottom-right) */}
      {/* ========================================================================= */}
      {isModalOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-80 sm:w-88 bg-white text-gray-900 rounded-3xl p-5 sm:p-6 shadow-[0_20px_60px_rgba(8,18,37,0.25)] border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-300">

          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-3.5 right-3.5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition-colors z-20"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>

          {/* 1. MAIN MENU SELECTION VIEW */}
          {modalView === "main" && (
            <div className="text-center space-y-5 pt-2">
              {/* Mascot Illustration Box */}
              <div className="relative w-36 h-36 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
                <img
                  src={mascotImg}
                  alt="SATAK Mascot"
                  className="w-full h-full object-contain relative z-10 drop-shadow-xl"
                />
              </div>

              {/* Greeting Title */}
              <div>
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight">
                  Hai Sobat ATA
                </h3>
                <p className="text-base font-bold text-blue-600 mt-0.5">
                  Saya Siap Bantu Anda!
                </p>
                <p className="text-xs text-gray-500 mt-1 font-normal">
                  Pilih layanan bantuan yang Anda butuhkan di bawah ini:
                </p>
              </div>

              {/* Action Choice Buttons */}
              <div className="space-y-3 pt-2">
                {/* Button 1: Mau Berlangganan */}
                <button
                  onClick={() => {
                    handleCloseModal();
                    if (onNavigateToSubscribe) onNavigateToSubscribe();
                  }}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-2xl shadow-lg shadow-blue-600/30 transition-transform active:scale-[0.98] text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-white" />
                  <span>Mau Berlangganan</span>
                </button>

                {/* Button 2: Layanan Pengaduan */}
                <button
                  onClick={() => setModalView("pengaduan")}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 bg-white border-2 border-gray-200 hover:border-blue-600 text-gray-800 hover:text-blue-600 font-extrabold rounded-2xl transition-colors text-sm cursor-pointer"
                >
                  <Headphones className="w-4.5 h-4.5 text-blue-600" />
                  <span>Layanan Pengaduan</span>
                </button>
              </div>
            </div>
          )}

          {/* 2. LAYANAN PENGADUAN DETAILED VIEW */}
          {modalView === "pengaduan" && (
            <div className="space-y-4 pt-1">
              {/* Header Navigation */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <button
                  onClick={() => setModalView("main")}
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Kembali</span>
                </button>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
                  Layanan Pengaduan SATAK
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Channel pengaduan & bantuan teknis resmi SATAK
                </p>
              </div>

              {/* List of Support Channels */}
              <div className="space-y-2.5 pt-2">
                {/* WhatsApp Admin Pengaduan */}
                <a
                  href={waPengaduanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCloseModal}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 transition-all text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-emerald-700">
                      Chat Pengaduan WhatsApp
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Layanan pengaduan cepat via WA Admin
                    </p>
                  </div>
                </a>

                {/* Hotline Phone */}
                <a
                  href="tel:081947556108"
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 hover:border-blue-400 bg-gray-50/70 hover:bg-blue-50/50 transition-all text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-600">
                        0819-4755-6108
                      </h4>
                      <span className="bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-md uppercase">
                        HOTLINE
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-500">
                      Telepon Customer Service SATAK
                    </p>
                  </div>
                </a>

                {/* Email Support */}
                <a
                  href="mailto:info@satak.co.id"
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 hover:border-blue-400 bg-gray-50/70 hover:bg-blue-50/50 transition-all text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-900 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-600">
                      info@satak.co.id
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Email resmi pengaduan layanan
                    </p>
                  </div>
                </a>

                {/* FAQ Help Center */}
                <a
                  href="#faq"
                  onClick={handleCloseModal}
                  className="flex items-center gap-3.5 p-3 rounded-2xl border border-gray-100 hover:border-blue-400 bg-gray-50/70 hover:bg-blue-50/50 transition-all text-left group"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <HelpCircle className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-600">
                      FAQ & Help Center
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      Pertanyaan seputar layanan & jaringan
                    </p>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </footer>
  );
}
