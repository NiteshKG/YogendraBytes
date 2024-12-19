import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import WebAppDev from "./components/tech/WebAppDev";
import QualityAsusrance from "./components/tech/QualityAsusrance";
import CloudConsults from "./components/tech/CloudConsults";
import CustomWebApplications from "./components/tech/CustomWebApplications";
import MobileAppDevelopment from "./components/tech/MobileAppDevelopment";
import SystemsIntegration from "./components/tech/SystemsIntegration";
import LearnMore from "./pages/LearnMore";

const AppContent = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className={` ${isHome ? "flex-grow" : "flex flex-col min-h-screen "}`}>
      {/* Header */}
      <Header />
     
      {/* Main Content */}
      <main className="flex-grow pb-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/services/csw" element={<CustomWebApplications />} />
          <Route path="/services/web-appDev" element={<WebAppDev />} />
          <Route path="/services/mobile-apps" element={<MobileAppDevelopment />} />
          <Route path="/services/cloudConsults" element={<CloudConsults />} />
          <Route path="/services/QA" element={<QualityAsusrance />} />
          <Route path="/services/SI" element={<SystemsIntegration />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
