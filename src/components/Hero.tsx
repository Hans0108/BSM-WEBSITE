import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HardHat, Store, Ruler, Home, ChevronRight, Sparkles, Shield, ArrowRight } from "lucide-react";

interface HeroProps {
  onNavigateToCatalog: () => void;
  onNavigateToContact: () => void;
  onNavigateToAbout: () => void;
}

export default function Hero({ onNavigateToCatalog, onNavigateToContact, onNavigateToAbout }: HeroProps) {
  // Currently active user segment state
  const [activeSegment, setActiveSegment] = useState<string>("pm");
  // Visual transform morph stage toggles
  const [transformStage, setTransformStage] = useState<"blueprint" | "structure">("blueprint");

  // Audience Target Segments data
  const segments = [
    {
      id: "pm",
      label: "Project Manager / Kontraktor",
      ratio: "30%",
      icon: HardHat,
      color: "border-orange-500 text-safety-orange",
      title: "Spesifikasi Proyek Kelas Berat & Sertifikasi Mill Test SNI",
      valueProp: "Akses kilat berkas penawaran teknis, dokumen TKDN terverifikasi, mill certificate baja asli, dan percepatan pengerjaan logistik kontainer pelayaran FCL.",
      cta: "Minta RFQ & Sertifikat Struktur",
      templateMsg: "Halo BSM, saya Project Manager ingin meminta penawaran harga dan berkas kelayakan uji SNI/material."
    },
    {
      id: "retail",
      label: "Toko Besi & Agen Retail",
      ratio: "40%",
      icon: Store,
      color: "border-amber-500 text-alert-yellow",
      title: "Harga Grosir Distributor & Pengiriman Flatbed Reguler",
      valueProp: "Dapatkan skema diskon volume bertingkat untuk persediaan toko besi Anda. Suplai kontinuitas stabil langsung diangkut oleh flatbed depo Jawa Timur.",
      cta: "Dapatkan Price List Grosir Toko",
      templateMsg: "Halo BSM, saya pemilik Toko Besi ingin menanyakan kerja sama keagenan dan daftar harga grosir."
    },
    {
      id: "architect",
      label: "Arsitek & Desainer Pro",
      ratio: "20%",
      icon: Ruler,
      color: "border-blue-500 text-blue-400",
      title: "File CAD Presisi, Konsultasi Profil Kustom & Warna PVC",
      valueProp: "Wujudkan presisi visual Anda. Tim teknik kami siap membantu kustomisasi ukuran mesh kawat, pola kawat harmonika, hingga pilihan galvanisasinya.",
      cta: "Konsultasi Teknis & CAD File",
      templateMsg: "Halo BSM, saya Arsitek ingin mengajukan spesifikasi kustom untuk proyek rancangan saya."
    },
    {
      id: "homeowner",
      label: "Pengembang / Pemilik Rumah",
      ratio: "10%",
      icon: Home,
      color: "border-purple-500 text-purple-400",
      title: "Instalasi Mandiri Bebas Karat, Solusi Pagar Estetis",
      valueProp: "Pagar kuat bebas karat puluhan tahun dengan pemasangan instan knockdown BRC. Panduan ketebalan kawat lengkap pasang perimeter properti Anda.",
      cta: "Butuh Panduan Ukuran & Hitung",
      templateMsg: "Halo BSM, saya ingin membeli Pagar BRC / Kawat Duri untuk kepemilikan batas lahan properti."
    },
  ];

  const currentSegmentData = segments.find((s) => s.id === activeSegment) || segments[0];

  // Quick WhatsApp callback based on segment
  const handleSegmentWhatsApp = (template: string) => {
    const phoneNumber = "6281222444883";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(template)}`, "_blank");
  };

  return (
    <section className="relative min-h-[90vh] bg-industrial-black pt-16 pb-20 overflow-hidden flex flex-col justify-center blueprint-grid">
      
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-safety-orange/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-[400px] h-[400px] bg-alert-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: HERO HEADLINE & ACTIONS (7/12) */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-2"
          >
            <span className="h-px w-8 bg-safety-orange"></span>
            <span className="text-xs font-mono text-safety-orange uppercase tracking-widest font-bold">Surabaya • Nasional • Ekspor</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tighter text-white leading-[0.9] mb-4"
          >
            Material <br /><span className="text-safety-orange">Konstruksi</span> <br />Kelas Pro
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-base md:text-lg max-w-xl font-light italic border-l-2 border-safety-orange pl-6 leading-relaxed"
          >
            Material Konstruksi Kelas Pro – Siap Kirim Seluruh Indonesia & Luar Pulau. CV. Bangun Sarana Makmur (BSM) mensuplai kebutuhan Pagar BRC, Kawat Duri & Kawat Silet, serta Guardrail Pembatas Jalan Tol berkekuatan tarik tinggi langsung dari depo andalan kami.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-6 items-center mt-4"
          >
            <button
              onClick={onNavigateToCatalog}
              className="px-8 py-4 bg-safety-orange text-black font-black uppercase text-sm tracking-tight hover:bg-white transition-all shadow-[8px_8px_0px_#000,9px_9px_0px_rgba(249,115,22,0.4)] hover:shadow-none cursor-pointer flex items-center gap-2 group"
            >
              Minta Penawaran Cepat
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex flex-col justify-center text-left">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Kapasitas Pengiriman</span>
              <span className="text-sm font-mono text-white">SELURUH INDONESIA</span>
            </div>
          </motion.div>

          {/* Multi-Segment B2B Selector */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 border-t border-steel-border/60 pt-6"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-alert-yellow" />
                Pilih Kebutuhan Sesuai Profesi Anda:
              </span>
            </div>

            {/* Segment Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {segments.map((seg) => {
                const IconComponent = seg.icon;
                const isSelected = activeSegment === seg.id;
                return (
                  <button
                    key={seg.id}
                    onClick={() => setActiveSegment(seg.id)}
                    className={`relative p-3 rounded-none border text-left transition-all cursor-pointer flex flex-col gap-2 ${
                      isSelected
                        ? "bg-slate-950 border-safety-orange shadow-lg scale-[1.01]"
                        : "bg-[#17191C]/40 border-white/10 hover:border-safety-orange hover:bg-slate-900/50"
                    }`}
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className={`p-1.5 rounded-none ${isSelected ? "bg-safety-orange/15 border border-safety-orange/30" : "bg-slate-850"}`}>
                        <IconComponent className={`w-4 h-4 ${isSelected ? "text-safety-orange" : "text-gray-400"}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-gray-400">{seg.ratio}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-display font-bold text-white truncate uppercase tracking-tight">{seg.label}</h4>
                      <p className="text-[9px] text-gray-500 uppercase font-mono mt-0.5">Metodologi Uji</p>
                    </div>
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-safety-orange border border-slate-950"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Dynamically Adapted Proposition Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSegment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 p-4 rounded-none bg-slate-950/40 border border-white/10"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-none bg-safety-orange animate-ping"></div>
                  <h3 className="font-display font-bold text-sm text-alert-yellow uppercase tracking-wide">
                    {currentSegmentData.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-330 leading-relaxed font-sans mb-3.5">
                  {currentSegmentData.valueProp}
                </p>
                <button
                  onClick={() => handleSegmentWhatsApp(currentSegmentData.templateMsg)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-display text-safety-orange hover:text-white transition-colors group cursor-pointer uppercase tracking-wider"
                >
                  {currentSegmentData.cta}
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            </AnimatePresence>

          </motion.div>

        </div>

        {/* RIGHT COLUMN: HIGH-POLISH 3D INTERACTIVE BLUEPRINT GRID (5/12) */}
        <div className="lg:col-span-5 h-[400px] lg:h-[480px] w-full flex items-center justify-center relative">
          
          {/* Framer-Motion Animated Blueprint Plane */}
          <div className="absolute inset-0 border border-steel-border bg-industrial-slate/20 rounded-2xl overflow-hidden blueprint-grid-fine flex flex-col justify-between p-4">
            
            {/* Blueprint Grid Header */}
            <div className="flex items-center justify-between border-b border-steel-border pb-3">
              <span className="text-[10px] font-mono text-slate-400">
                PROYEKSI METODE STRUKTUR BAJA // CV. BSM
              </span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-mono text-emerald-400">ACTIVE SCHEMATIC</span>
              </div>
            </div>

            {/* Centered Graphic Grid Stage */}
            <div className="relative w-full flex-grow flex items-center justify-center p-6 overflow-hidden">
              
              {/* Spinning/Transforming meshes */}
              {transformStage === "blueprint" ? (
                // 1. Blueprint Wireframe Model representation
                <motion.div
                  initial={{ rotate: 10, scale: 0.9 }}
                  animate={{ rotate: [10, 20, 10], scale: 1 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="w-56 h-56 rounded-full border-2 border-dashed border-safety-orange/30 flex items-center justify-center relative"
                >
                  <div className="absolute inset-2 rounded-full border border-dashed border-alert-yellow/20 flex items-center justify-center">
                    {/* BRC Mesh SVG line graphic */}
                    <svg className="w-40 h-40 stroke-safety-orange/80 fill-none stroke-[1] stroke-dasharray-[2]" viewBox="0 0 100 100">
                      {/* Grid points lines */}
                      <line x1="20" y1="10" x2="20" y2="90" />
                      <line x1="40" y1="10" x2="40" y2="90" />
                      <line x1="60" y1="10" x2="60" y2="90" />
                      <line x1="80" y1="10" x2="80" y2="90" />
                      
                      <line x1="10" y1="20" x2="90" y2="20" />
                      <line x1="10" y1="50" x2="90" y2="50" />
                      <line x1="10" y1="80" x2="90" y2="80" />
                      
                      {/* BRC Bending triangles */}
                      <path d="M 20 10 L 30 5 L 40 10" />
                      <path d="M 60 10 L 70 5 L 80 10" />
                    </svg>
                  </div>
                  
                  {/* Floating labels in blueprint */}
                  <span className="absolute top-2 left-6 text-[8px] font-mono text-orange-400 transform -rotate-12 bg-slate-900 border border-slate-700 px-1 py-0.5">D_KAWAT: 6.0 mm</span>
                  <span className="absolute bottom-6 right-0 text-[8px] font-mono text-yellow-400 transform rotate-12 bg-slate-900 border border-slate-700 px-1 py-0.5">Zn-COAT: 60+ MICRON</span>
                  <span className="absolute top-1/2 left-2 text-[8px] font-mono text-blue-400 transform -translate-y-1/2 bg-slate-900 border border-slate-700 px-1 py-0.5">T: 120cm</span>
                </motion.div>
              ) : (
                // 2. Transformed finished structure model (Guardrail & Fencing mockup)
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex flex-col items-center gap-4"
                >
                  <div className="relative w-72 h-36 border border-safety-orange bg-safety-orange/5 rounded-lg flex flex-col justify-end p-3 overflow-hidden">
                    {/* Simulated High-Res Steel Guardrail pipe SVG */}
                    <div className="absolute inset-0 flex flex-col justify-center p-3 gap-2">
                      <div className="h-6 w-full bg-slate-700 border-t-2 border-b-2 border-slate-400 rounded-sm flex items-center justify-around overflow-hidden relative shadow-md">
                        {/* Reflector indicators */}
                        <div className="w-1.5 h-full bg-alert-yellow rotate-12"></div>
                        <div className="w-1.5 h-full bg-alert-yellow rotate-12"></div>
                        <div className="w-1.5 h-full bg-alert-yellow rotate-12"></div>
                        <div className="w-1.5 h-full bg-alert-yellow rotate-12"></div>
                        <div className="absolute inset-x-0 h-1.5 bg-white/20 top-0"></div>
                      </div>
                      
                      {/* Fence columns */}
                      <div className="flex justify-between px-6 pt-1">
                        <div className="w-2.5 h-16 bg-slate-600 border border-slate-400 rounded-sm relative">
                          <div className="absolute bottom-0 w-4 h-1 bg-black -left-0.5"></div>
                        </div>
                        <div className="w-2.5 h-16 bg-slate-600 border border-slate-400 rounded-sm relative">
                          <div className="absolute bottom-0 w-4 h-1 bg-black -left-0.5"></div>
                        </div>
                        <div className="w-2.5 h-16 bg-slate-600 border border-slate-400 rounded-sm relative">
                          <div className="absolute bottom-0 w-4 h-1 bg-black -left-0.5"></div>
                        </div>
                      </div>
                    </div>
                    
                    <span className="text-[9px] font-mono text-alert-yellow bg-slate-900 border border-slate-700 px-1.5 py-0.5 rounded shadow self-start">
                      HDG Standard AASHTO M-180
                    </span>
                  </div>
                  
                  <p className="text-[10px] text-gray-300 font-sans text-center max-w-xs">
                    Transformasi model cetak digital BSM menjadi komponen baja keras Hot-Dip Galvanized berskala sipil.
                  </p>
                </motion.div>
              )}

              {/* Cursor tracker element mock */}
              <div className="absolute top-6 left-6 text-[8px] font-mono text-slate-500 text-left leading-tight">
                X: 4320 mm<br />
                Y: 1000 mm<br />
                SYS: ST-550
              </div>
            </div>

            {/* Controls panel */}
            <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
              <div>
                <p className="text-[9px] font-mono text-slate-400">TIPE PEMIKUL STRUKTUR</p>
                <p className="text-xs font-display font-medium text-white tracking-tight">
                  {transformStage === "blueprint" ? "1. AutoCAD Wire-Mesh Layout" : "2. Hot Dip Galvanized Finished Components"}
                </p>
              </div>
              
              <button
                onClick={() => setTransformStage(transformStage === "blueprint" ? "structure" : "blueprint")}
                className="px-3 py-1.5 bg-safety-orange hover:bg-safety-orange-hover text-white text-[10px] font-mono font-bold rounded cursor-pointer transition-colors"
              >
                {transformStage === "blueprint" ? "TRANSFORM (BENTUK 3D)" : "KEMBALI KE CAD"}
              </button>
            </div>

          </div>

          {/* Underlay watermarks */}
          <div className="absolute bottom-2 right-6 text-7xl font-mono text-slate-800/10 font-bold tracking-tight select-none pointer-events-none">
            BSM.CO.ID
          </div>

        </div>

      </div>

      {/* Trust Pillars highlights */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-16 border-t border-slate-800/80 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-none bg-slate-950/45 border border-white/10 hover:border-safety-orange transition-colors duration-300 text-left">
            <span className="text-4xl font-display font-black text-safety-orange tracking-tight">15+</span>
            <h4 className="text-xs font-mono font-bold uppercase text-white mt-2">Tahun Pengalaman</h4>
            <p className="text-xs text-slate-350 mt-1.5 leading-relaxed">Melayani pengadaan material proyek nasional terpercaya.</p>
          </div>
          <div className="p-5 rounded-none bg-slate-950/45 border border-white/10 hover:border-safety-orange transition-colors duration-300 text-left">
            <span className="text-4xl font-display font-black text-safety-orange tracking-tight">250+</span>
            <h4 className="text-xs font-mono font-bold uppercase text-white mt-2">Proyek B2B Nasional</h4>
            <p className="text-xs text-slate-350 mt-1.5 leading-relaxed">Mensuplai proyek tol, bandara, kawasan industri luar pulau.</p>
          </div>
          <div className="p-5 rounded-none bg-slate-950/45 border border-white/10 hover:border-safety-orange transition-colors duration-300 text-left">
            <span className="text-4xl font-display font-black text-safety-orange tracking-tight">100%</span>
            <h4 className="text-xs font-mono font-bold uppercase text-white mt-2">Kesesuaian SNI</h4>
            <p className="text-xs text-slate-350 mt-1.5 leading-relaxed">Setiap material diiringi mill test certificate asli pabrik.</p>
          </div>
          <div className="p-5 rounded-none bg-slate-950/45 border border-white/10 hover:border-safety-orange transition-colors duration-300 text-left">
            <span className="text-4xl font-display font-black text-safety-orange tracking-tight">62</span>
            <h4 className="text-xs font-mono font-bold uppercase text-white mt-2">Kota Regional Tercover</h4>
            <p className="text-xs text-slate-350 mt-1.5 leading-relaxed">Infrastruktur kargo laut andalan ke Kalimantan & laut timur.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
