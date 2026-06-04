import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Award, MessageSquare, Clipboard, Share2, Info, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { Product } from "../data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [copied, setCopied] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!product) return null;

  // Key handlers for escaping modes
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          setZoomLevel(1);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, onClose]);

  // Adjust handle zoom levels safely
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.5, 3.5));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  // Direct WhatsApp contact with dynamic product prefilled message templates
  const handleWAContact = () => {
    const phoneNumber = "6281222444883";
    const textMsg = encodeURIComponent(product.whatsappTemplate);
    window.open(`https://wa.me/${phoneNumber}?text=${textMsg}`, "_blank");
  };

  const handleCopySpec = () => {
    const textToCopy = `${product.name} - ${product.tagline}. Hubungi CV BSM di +6281222444883`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-end p-0 md:p-4 bg-black/90 backdrop-blur-sm">
      
      {/* Backdrop Close Click */}
      <div className="fixed inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Slide-out Panel Panel content */}
      <motion.div
        initial={{ x: "100%", opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0.8 }}
        transition={{ type: "spring", damping: 25, stiffness: 120 }}
        className="relative z-10 w-full max-w-2xl min-h-screen md:min-h-0 bg-industrial-charcoal border-l border-white/10 rounded-none shadow-3xl text-left overflow-hidden flex flex-col md:max-h-[90vh]"
      >
        
        {/* Header Visual Image banner */}
        <div className="relative h-60 md:h-72 w-full overflow-hidden shrink-0 group/banner">
          <img
            src={product.image}
            alt={product.name}
            onClick={() => setIsLightboxOpen(true)}
            className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
            referrerPolicy="no-referrer"
          />
          <div 
            onClick={() => setIsLightboxOpen(true)}
            className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal via-industrial-charcoal/40 to-black/60 cursor-zoom-in"
          />

          {/* Elegant float badge informing the user standard texture inspection */}
          <div className="absolute top-4 left-4 bg-black/80 text-[9px] font-mono text-safety-orange border border-white/10 px-2.5 py-1 pointer-events-none opacity-0 group-hover/banner:opacity-100 transition-opacity duration-300">
            🔎 KLIK GAMBAR UNTUK DETAIL TEKSTUR & MATERI
          </div>
          
          {/* Close Action Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/80 hover:bg-safety-orange hover:text-white text-gray-300 p-2.5 rounded-none transition-all border border-white/10 cursor-pointer z-20"
            aria-label="Tutup Detail"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Visually hidden SEO Product Data Component */}
          <article className="sr-only">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <h2>Keunggulan:</h2>
            <ul>
              {product.features?.map((feat, i) => <li key={i}>{feat}</li>)}
            </ul>
            <h2>Spesifikasi Lengkap BSM:</h2>
            <dl>
              {product.specs?.map((sp, i) => (
                <div key={i}>
                  <dt>{sp.label}</dt>
                  <dd>{sp.value}</dd>
                </div>
              ))}
            </dl>
          </article>

          {/* Title on the Image Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
            <span className="text-[10px] font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-2.5 py-1 rounded-none">
              KATEGORI: {product.category.toUpperCase()}
            </span>
            <h2 className="text-xl md:text-2xl font-display font-bold text-white mt-2 leading-snug uppercase">
              {product.name}
            </h2>
            <p className="text-xs text-gray-300 font-sans tracking-wide italic mt-1 font-light">
              "{product.tagline}"
            </p>
          </div>
        </div>

        {/* Scrollable specs body container */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-white/10 pb-1.5">
              <Info className="w-4 h-4 text-safety-orange" />
              DESKRIPSI MATERIAL & KELAYAKAN
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-sans">
              {product.description}
            </p>
          </div>

          {/* Technical specifications grid layout */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 border-b border-white/10 pb-1.5">
              <Clipboard className="w-4 h-4 text-safety-orange" />
              SPESIFIKASI TEKNIS PRODUK (TECHNICAL SHEET)
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono">
              {product.specs.map((spec, i) => (
                <div key={i} className="p-2.5 rounded-none bg-slate-950/40 border border-white/10 text-left">
                  <div className="text-[10px] text-gray-500 uppercase">{spec.label}</div>
                  <div className="text-xs font-semibold text-white mt-1 uppercase">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features check highlights */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 pb-1.5">
              KEUNGGULAN PRODUK & STRUKTUR BAJA BSM
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feature, i) => (
                <div key={i} className="flex gap-2.5 items-start">
                  <CheckCircle className="w-4 h-4 text-safety-orange shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-sans leading-tight">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications (if present) */}
          {product.certifications && product.certifications.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 pb-1.5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-alert-yellow animate-pulse" />
                SERTIFIKASI MUTU & KEPATUHAN STRUKTURAL
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.certifications.map((cert, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-[10px] font-mono bg-amber-500/10 text-alert-yellow border border-amber-500/25 rounded-none uppercase"
                  >
                    ✦ {cert}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pro B2B Logistics Pitch */}
          <div className="p-4 bg-slate-950/40 rounded-none border border-white/10 text-left">
            <h4 className="text-xs font-display font-medium text-white uppercase">Catatan Pengiriman Luar Pulau & Volume Besarnya:</h4>
            <p className="text-[11px] text-slate-300 font-sans mt-1.5 leading-relaxed">
              Semua harga didasarkan atas volume pembelian tonase maupun meter lari. Armada pengiriman CV. Bangun Sarana Makmur (Gedung BSM Depo) siap menangani pemuatan kontainer curah, kapal tongkang lashing, serta ekspedisi darat flatbed melintasi regional Kalimantan, Nusa Tenggara, Sulawesi dan wilayah operasional timur Indonesia.
            </p>
          </div>

        </div>

        {/* Footer sticky WhatsApp button */}
        <div className="p-4 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between shrink-0">
          <div className="text-left hidden sm:block">
            <p className="text-[10px] font-mono text-emerald-400">STATUS STOK: READY STOCK</p>
            <p className="text-xs font-display font-medium text-white">Hubungi sales BSM sekarang</p>
          </div>
          
          <div className="flex w-full sm:w-auto gap-2">
            <button
              onClick={handleCopySpec}
              className={`px-4 py-3 border text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer rounded-none ${
                copied
                  ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30"
                  : "bg-slate-950/40 hover:bg-slate-800 text-gray-300 hover:text-white border-white/10"
              }`}
              title="Salin Spesifikasi"
            >
              <Share2 className="w-4 h-4" />
              {copied ? "Tersalin!" : "Bagikan"}
            </button>

            <button
              onClick={handleWAContact}
              className="flex-grow sm:flex-grow-0 px-5 py-3 bg-safety-orange hover:bg-safety-orange-hover text-white font-display font-bold text-xs rounded-none shadow-md hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Tanyakan Produk Ini via WA
            </button>
          </div>
        </div>

        {/* Full-Screen Interactive Lightbox overlay block */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/98 backdrop-blur-md p-4 select-none"
            >
              {/* Backdrop click to close */}
              <div 
                className="absolute inset-0 cursor-zoom-out" 
                onClick={() => { setIsLightboxOpen(false); setZoomLevel(1); }} 
              />

              {/* Top controls dashboard */}
              <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
                <div className="text-left bg-black/60 p-3 border border-white/10 backdrop-blur-md">
                  <span className="text-[9px] font-mono text-safety-orange tracking-widest block uppercase font-bold">MUTU & DETIL SERAT MATERIAL BSM</span>
                  <span className="text-sm font-display font-bold text-white uppercase">{product.name}</span>
                </div>

                <div className="flex items-center gap-2 pointer-events-auto">
                  <button
                    onClick={handleZoomIn}
                    className="bg-black/85 hover:bg-safety-orange hover:border-safety-orange text-white p-2.5 transition-all text-xs flex items-center gap-1 cursor-pointer border border-white/10"
                    title="Perbesar Tekstur"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleZoomOut}
                    className="bg-black/85 hover:bg-safety-orange hover:border-safety-orange text-white p-2.5 transition-all text-xs flex items-center gap-1 cursor-pointer border border-white/10 disabled:opacity-30 disabled:hover:bg-black/85 disabled:hover:border-white/10"
                    title="Perkecil Tekstur"
                    disabled={zoomLevel === 1}
                  >
                    <ZoomOut className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleResetZoom}
                    className="bg-black/85 hover:bg-safety-orange hover:border-safety-orange text-white p-2.5 transition-all text-xs flex items-center gap-1 cursor-pointer border border-white/10 disabled:opacity-30 disabled:hover:bg-black/85 disabled:hover:border-white/10"
                    title="Reset Ukuran"
                    disabled={zoomLevel === 1}
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => { setIsLightboxOpen(false); setZoomLevel(1); }}
                    className="bg-safety-orange hover:bg-safety-orange-hover text-white p-2.5 transition-all border border-safety-orange/50 cursor-pointer ml-3"
                    title="Kembali"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dynamic Zoomable / Draggable area */}
              <div className="relative w-full h-[76vh] flex items-center justify-center overflow-hidden">
                <motion.img
                  key={zoomLevel} // Reload position metrics on zoom Level transitions and scaling boundaries
                  src={product.image}
                  alt={product.name}
                  drag={zoomLevel > 1}
                  dragConstraints={{
                    left: -350 * (zoomLevel - 1),
                    right: 350 * (zoomLevel - 1),
                    top: -240 * (zoomLevel - 1),
                    bottom: 240 * (zoomLevel - 1)
                  }}
                  dragElastic={0.15}
                  animate={{
                    scale: zoomLevel,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className={`max-h-full max-w-full object-contain pointer-events-auto select-none rounded-none shadow-2xl border border-white/5 ${
                    zoomLevel > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-out"
                  }`}
                  referrerPolicy="no-referrer"
                  onClick={zoomLevel === 1 ? undefined : () => { setIsLightboxOpen(false); setZoomLevel(1); }}
                />
              </div>

              {/* Bottom informative status text */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 border border-white/10 px-5 py-2.5 font-mono text-[9px] text-zinc-300 backdrop-blur-md tracking-widest text-center max-w-md pointer-events-none uppercase">
                {zoomLevel > 1 
                  ? "👉 Gunakan mouse / sentuhan untuk MENYERET gambar dan menginspeksi presisi struktur baja" 
                  : "💡 Klik tombol + di atas untuk memperbesar tekstur material BSM secara presisi"
                }
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  );
}
