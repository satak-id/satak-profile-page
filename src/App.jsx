import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Coverage } from "@/components/Coverage";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { InternetServicePage } from "@/pages/InternetServicePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "internet-service"
  const [selectedCategory, setSelectedCategory] = useState("school");

  const handleNavigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToInternetService = (category = "school") => {
    setSelectedCategory(category);
    setCurrentPage("internet-service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
      <Navbar
        currentPage={currentPage}
        onNavigateToHome={handleNavigateToHome}
        onNavigateToInternetService={handleNavigateToInternetService}
      />
      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <Services onNavigateToInternetService={handleNavigateToInternetService} />
            <Coverage />
            <Testimonials />
            <Stats />
          </>
        ) : (
          <InternetServicePage
            onBackToHome={handleNavigateToHome}
            initialCategory={selectedCategory}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
