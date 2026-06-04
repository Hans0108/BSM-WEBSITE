import { useState } from "react";
import { Phone, MessageSquare, Menu, X, ArrowUpRight, Award, Truck, Lock } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import CompanyLogo from "./CompanyLogo";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Navbar({ activePage, onPageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Beranda" },
    { id: "products", label: "Katalog Material" },
    { id: "about", label: "Tentang BSM" },
    { id: "blog", label: "Wawasan & SEO Blog" },
    { id: "contact", label: "Hubungi Kami" },
    { id: "admin", label: "Admin Mode" }
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-industrial-black/90 backdrop-blur-md border-b border-steel-border/70">
      
      {/* Top Banner Alert (Urgency & Trust) */}
      <div className="bg-gradient-to-r from-industrial-charcoal to-industrial-slate text-[11px] font-mono py-1.5 px-4 text-center border-b border-steel-border/50 text-slate-300 hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-4 mx-auto max-w-7xl w-full justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-safety-orange"></span>
            </span>
            <span>PROMO BULAN INI: Subsidi Ongkir Pembelian Grosir Pagar BRC & Kawat Harmonika</span>
          </div>
          <div className="flex items-center gap-4 shrink-0">
            <span className="flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-alert-yellow" /> SNI Certified Quality
            </span>
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-orange-400" /> Pengiriman Nasional
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 md:h-20 flex items-center justify-between">
        
        {/* Brand Logo design */}
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-3 text-left cursor-pointer select-none focus:outline-none"
        >
          <CompanyLogo size="sm" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-display tracking-wider uppercase transition-all duration-150 cursor-pointer py-1 relative ${
                activePage === item.id
                  ? "text-safety-orange font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <motion.span
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-safety-orange"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Quick B2B CTA button & Mobile trigger */}
        <div className="flex items-center gap-3">
          
          <a
            href="tel:+6281222444883"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 border border-white/10 bg-white/5 text-xs text-white font-mono hover:bg-white/10 hover:border-safety-orange transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-safety-orange" />
            +62 812-2244-4883
          </a>

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-flex items-center gap-1.5 px-6 py-2 bg-white/5 border border-white/20 hover:border-safety-orange text-white text-[11px] font-display font-bold uppercase tracking-wider transition-all cursor-pointer group"
          >
            Portal B2B Inquiries
            <ArrowUpRight className="w-3.5 h-3.5 text-safety-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Hamburger Menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-industrial-slate rounded-lg transition-colors cursor-pointer focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

      </div>

      {/* Mobile Drawer Slide down */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-industrial-charcoal border-b border-steel-border/80 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4 flex flex-col">
              
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block px-1.5">NAVIGASI SITUS</span>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-display uppercase tracking-wide transition-colors ${
                      activePage === item.id
                        ? "bg-safety-orange text-white font-bold"
                        : "text-slate-300 hover:bg-slate-900"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Quick Action Buttons inside Navbar */}
              <div className="border-t border-slate-800 pt-4 space-y-2">
                <a
                  href="tel:+6281222444883"
                  className="w-full py-3 bg-slate-900 text-gray-200 text-center rounded-lg text-xs font-mono flex items-center justify-center gap-2 border border-steel-border"
                >
                  <Phone className="w-4 h-4 text-safety-orange" />
                  Hubungi Kantor: +62 812-2244-4883
                </a>

                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-3 bg-safety-orange hover:bg-safety-orange-hover text-white text-center rounded-lg text-xs font-display font-semibold shadow-md flex items-center justify-center gap-1 cursor-pointer"
                >
                  Minta Penawaran Harga (RAB)
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
