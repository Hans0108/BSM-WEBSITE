import React, { useState, useEffect } from "react";
import { MessageSquare, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingWhatsAppProps {
  activePage: string;
  selectedProductName?: string;
  customTemplate?: string;
}

export default function FloatingWhatsApp({
  activePage,
  selectedProductName,
  customTemplate,
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [isSent, setIsSent] = useState(false);

  // Default templates depending on page
  const getPageTemplate = () => {
    if (customTemplate) return customTemplate;
    if (selectedProductName) {
      return `Halo CV. Bangun Sarana Makmur (BSM), saya tertarik dan ingin meminta penawaran harga (RAB) serta informasi ukuran untuk produk: *${selectedProductName}*.`;
    }
    switch (activePage) {
      case "products":
        return "Halo BSM, saya sedang melihat katalog produk di website Anda dan ingin menanyakan spesifikasi kustom serta ketersediaan stok pengiriman untuk proyek.";
      case "about":
        return "Halo BSM, saya membaca profil keandalan nasional Anda di halaman Tentang Kami. Saya tertarik mendiskusikan kemitraan logistik luar pulau.";
      case "blog":
        return "Halo BSM, saya tertarik dengan tips dan edukasi material dari artikel blog Anda. Apakah saya bisa berkonsultasi mengenai spesifikasi SNI?";
      case "contact":
        return "Halo BSM, saya ingin mengajukan surat penawaran harga (RFQ) dan berkunjung ke depo operasional BSM di Jawa Timur. Mohon dibantu.";
      default:
        return "Halo CV. Bangun Sarana Makmur (BSM), saya ingin bertanya mengenai ketersediaan stok, harga per meter, dan estimasi waktu kirim material konstruksi kami.";
    }
  };

  useEffect(() => {
    setUserMsg(getPageTemplate());
  }, [activePage, selectedProductName, customTemplate]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // BSM official marketing WhatsApp phone number format
    const phoneNumber = "6281222444883"; 
    const encodedText = encodeURIComponent(userMsg);
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    setIsSent(true);
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
      setIsSent(false);
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      
      {/* Elegantly Animated Chat Window Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-80 md:w-96 bg-industrial-charcoal border border-white/10 rounded-none shadow-2xl overflow-hidden mb-4 pointer-events-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-industrial-black to-industrial-slate p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-none bg-safety-orange flex items-center justify-center font-display font-bold text-white text-sm tracking-tighter">
                    BSM
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-industrial-charcoal rounded-full"></span>
                </div>
                <div>
                  <h4 className="font-display font-medium text-sm text-white uppercase">CS - Cargo & Material Penawaran</h4>
                  <p className="text-xs text-emerald-400 flex items-center gap-1 font-mono">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Aktif & Siap Kirim (Online)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close Chat"
              >
                ✕
              </button>
            </div>

            {/* Quick Pitch Content */}
            <div className="p-4 bg-industrial-black/50 text-xs text-gray-300 border-b border-white/10 font-sans flex flex-col gap-1">
              <span className="text-safety-orange font-semibold font-display tracking-wide uppercase">⚡ FAST RESPONSE (SENIN-SABTU)</span>
              <p>Minta estimasi ongkos kirim seluruh Indonesia, sertifikat pabrik, dan diskon volume besar melaui pesan WhatsApp langsung ke Sales Desk.</p>
            </div>

            {/* Simulated Live Chat bubble */}
            <div className="p-4 max-h-48 overflow-y-auto bg-industrial-black/10 flex flex-col gap-2">
              <div className="self-start bg-slate-950/40 text-xs text-slate-200 p-2.5 rounded-none max-w-[85%] border border-white/10">
                Halo! Kami siap membantu perhitungan RAB, ketersediaan stok pagar BRC, kawat harmonika, guardrail, maupun atap UPVC. Silakan kirim pesan Anda:
              </div>
            </div>

            {/* Chat Input form */}
            <form onSubmit={handleSend} className="p-3 bg-slate-900 border-t border-white/10">
              <div className="relative">
                <textarea
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Ketik rincian kebutuhan Anda..."
                  className="w-full bg-industrial-black border border-white/10 rounded-none py-2 pl-3 pr-10 text-xs text-white focus:outline-none focus:border-safety-orange resize-none h-20"
                />
                <button
                  type="submit"
                  disabled={!userMsg || isSent}
                  className="absolute bottom-3 right-2 bg-safety-orange hover:bg-safety-orange-hover text-white p-2 rounded-none transition-colors disabled:opacity-50 pointer-events-auto cursor-pointer"
                >
                  {isSent ? (
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </button>
              </div>
              <div className="text-[10px] text-gray-400 text-center mt-1.5 font-mono">
                Pre-filled untuk: {selectedProductName ? `Produk [${selectedProductName}]` : `Halaman [${activePage}]`}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button with magnetic micro-interaction */}
      <div className="flex items-center gap-3 pointer-events-auto">
        
        {/* Animated Banner Badge */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="bg-safety-orange text-white text-[11px] font-display font-medium px-3 py-1.5 rounded-none shadow-xl border border-orange-400/30 flex items-center gap-2 cursor-pointer select-none"
            onClick={() => setIsOpen(true)}
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Tanya Harga Jual BSM
          </motion.div>
        )}

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-safety-orange hover:bg-safety-orange-hover text-white w-14 h-14 rounded-none flex items-center justify-center shadow-2xl cursor-pointer relative group border-2 border-white/10"
          aria-label="Hubungi WhatsApp Kami"
        >
          <MessageSquare className="w-6 h-6 stroke-[2]" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-alert-yellow text-industrial-black font-semibold text-[9px] flex items-center justify-center rounded-none animate-bounce">
            1
          </span>
        </motion.button>
      </div>

    </div>
  );
}
