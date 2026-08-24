import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Coverage } from "@/components/Coverage";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Coverage />
        <Testimonials />
        <Stats />
      </main>
      <Footer />
    </div>
  );
}
