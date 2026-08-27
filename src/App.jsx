import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Coverage } from "@/components/Coverage";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { InternetServicePage } from "@/pages/InternetServicePage";
import { SatakCloudPage } from "@/pages/SatakCloudPage";
import { SaasDigitalPage } from "@/pages/SaasDigitalPage";
import { SubscriptionPage } from "@/pages/SubscriptionPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home"); // "home" | "internet-service" | "satak-cloud" | "saas-digital" | "subscribe"
  const [selectedCategory, setSelectedCategory] = useState("school");
  const [subscriptionData, setSubscriptionData] = useState(null);

  const handleNavigateToHome = () => {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToInternetService = (category = "school") => {
    setSelectedCategory(category);
    setCurrentPage("internet-service");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToSatakCloud = () => {
    setCurrentPage("satak-cloud");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToSaasDigital = () => {
    setCurrentPage("saas-digital");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateToSubscribe = (data = null) => {
    setSubscriptionData(data);
    setCurrentPage("subscribe");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-600 selection:text-white">
      <Navbar
        currentPage={currentPage}
        onNavigateToHome={handleNavigateToHome}
        onNavigateToInternetService={handleNavigateToInternetService}
        onNavigateToSatakCloud={handleNavigateToSatakCloud}
        onNavigateToSaasDigital={handleNavigateToSaasDigital}
        onNavigateToSubscribe={handleNavigateToSubscribe}
      />
      <main>
        {currentPage === "home" && (
          <>
            <Hero />
            <Services
              onNavigateToInternetService={handleNavigateToInternetService}
              onNavigateToSatakCloud={handleNavigateToSatakCloud}
              onNavigateToSaasDigital={handleNavigateToSaasDigital}
            />
            <Coverage />
            <Testimonials />
            <Stats />
          </>
        )}

        {currentPage === "internet-service" && (
          <InternetServicePage
            onBackToHome={handleNavigateToHome}
            onNavigateToSubscribe={handleNavigateToSubscribe}
            initialCategory={selectedCategory}
          />
        )}

        {currentPage === "satak-cloud" && (
          <SatakCloudPage
            onBackToHome={handleNavigateToHome}
            onNavigateToSubscribe={handleNavigateToSubscribe}
          />
        )}

        {currentPage === "saas-digital" && (
          <SaasDigitalPage
            onBackToHome={handleNavigateToHome}
            onNavigateToSubscribe={handleNavigateToSubscribe}
          />
        )}

        {currentPage === "subscribe" && (
          <SubscriptionPage
            onBackToHome={handleNavigateToHome}
            initialData={subscriptionData}
          />
        )}
      </main>
      <Footer onNavigateToSubscribe={handleNavigateToSubscribe} />
    </div>
  );
}
