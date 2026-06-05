import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CatalogView from "./components/CatalogView";
import AboutView from "./components/AboutView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";
import AdminView from "./components/AdminView";
import ProductDetailModal from "./components/ProductDetailModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import SchemaMarkup from "./components/SchemaMarkup";
import MagneticCard from "./components/MagneticCard";
import SpecsEstimator from "./components/SpecsEstimator";
import TestimonialSection from "./components/TestimonialSection";
import { Product } from "./data/products";
import { useProducts } from "./context/ProductContext";
import { Award, ShieldCheck, Truck, ArrowRight, MessageSquare, FlameKindling, Check, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const galleryContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const galleryItemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function App() {
  const { products } = useProducts();
  const [activePage, setActivePage] = useState<string>("home");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [initialCatalogCategory, setInitialCatalogCategory] = useState<string>("all");

  const handlePageChange = (pageId: string) => {
    setActivePage(pageId);
    setInitialCatalogCategory("all");
  };

  // Deep link into product catalog with a pre-filtered category
  const handleFeaturedCategoryClick = (categoryFilter: string) => {
    setInitialCatalogCategory(categoryFilter);
    setActivePage("products");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Live Project Gallery Grid items data
  const projectGallery = [
    {
      id: "gal-1",
      title: "Pagar BRC HDG Bandara Juanda",
      location: "Sidoarjo - Cargo Expansion",
      material: "Pagar BRC Hot Dip Galvanis 8.0 mm",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gal-2",
      title: "Guardrail Pengaman Tol Surabaya-Gresik",
      location: "Gresik - Sby Toll Segment",
      material: "Guardrail W-Beam AASHTO M-180",
      image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gal-3",
      title: "Pagar Kawat Harmonika PVC Sport Center",
      location: "Sport Center Sidoarjo",
      material: "Kawat Harmonika PVC Anti-UV Hijau",
      image: "https://images.unsplash.com/photo-1549213715-0a90edd512da?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gal-4",
      title: "Kawat Duri Silet Concertina Lapas Porong",
      location: "Porong - Security Perimeter",
      material: "Razor Wire BTO-22 Double Spiral",
      image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gal-5",
      title: "Guardrail Lintas Selatan Pacitan-Malang",
      location: "Pacitan - Jalur Lintas Selatan (JLS)",
      material: "Guardrail Tol Tebal Post 4.5mm",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "gal-6",
      title: "Pagar BRC Bandara Dhoho Kediri",
      location: "Kediri - Airport Perimeter Fence",
      material: "Pagar BRC HDG Tinggi 240 cm",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // Quick Direct WA text prefiller for specific strategic actions
  const handleImmediateWA = (text: string) => {
    const phoneNumber = "6281222444883";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-industrial-black text-slate-100 font-sans selection:bg-safety-orange selection:text-white">
      
      {/* 1. Google SEO Snippets Schema Registrator */}
      <SchemaMarkup />

      {/* 2. Sticky Custom Navigation Header */}
      <Navbar activePage={activePage} onPageChange={handlePageChange} />

      {/* 3. Main Central App Area with Screen Transition handlers */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            
            {/* SCREEN VIEW CONTROLLER */}
            {activePage === "home" && (
              <div>
                
                {/* A. Dynamic Interactive Hero */}
                <Hero
                  onNavigateToCatalog={() => handlePageChange("products")}
                  onNavigateToContact={() => handlePageChange("contact")}
                  onNavigateToAbout={() => handlePageChange("about")}
                />

                {/* B. STRATEGIC SHOWCASE SECTION (Top 3 Revenue Drivers) */}
                <section className="py-20 bg-industrial-charcoal border-t border-b border-steel-border/80 relative">
                  <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>

                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    
                    {/* Section title */}
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
                      <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
                        REVENUE DRIVERS / PRODUK STRATEGIS BSM
                      </span>
                      <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight uppercase">
                        Tiga Pilar <span className="text-safety-orange">Material Utama</span> Baja Konstruksi
                      </h2>
                      <p className="text-slate-350 text-xs md:text-sm font-sans font-light">
                        Pilar kokoh keandalan pengadaan material kami yang melayani ratusan pengiriman korporat dan pasokan gudang di seantero Indonesia.
                      </p>
                    </div>

                    {/* Highly aesthetic card row for Top 3 (BRC, Harmonika, Guardrail) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {products.slice(0, 3).map((prod) => (
                        <MagneticCard
                          key={prod.id}
                          onClick={() => setSelectedProduct(prod)}
                          className="group border"
                        >
                          {/* Visually hidden SEO Content */}
                          <article className="sr-only">
                            <h2>{prod.name} - {prod.tagline}</h2>
                            <p>{prod.description}</p>
                            <h3>Keunggulan & Fitur:</h3>
                            <ul>
                              {prod.features?.map((feat, i) => <li key={i}>{feat}</li>)}
                            </ul>
                            <h3>Spesifikasi Teknis:</h3>
                            <dl>
                              {prod.specs?.map((sp, i) => (
                                <div key={i}>
                                  <dt>{sp.label}</dt>
                                  <dd>{sp.value}</dd>
                                </div>
                              ))}
                            </dl>
                          </article>
                           <div className="h-52 w-full overflow-hidden relative">
                            <img
                              src={prod.image}
                              alt={prod.name}
                              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                            <span className="absolute bottom-3 left-4 bg-safety-orange text-white text-[10px] font-mono px-2.5 py-1 rounded-none uppercase font-semibold">
                              CORE REVENUE PRIORITAS
                            </span>
                          </div>

                          <div className="p-6 flex-grow space-y-3 text-left">
                            <h3 className="font-display font-bold text-lg text-white group-hover:text-safety-orange transition-colors">
                              {prod.name}
                            </h3>
                            <p className="text-xs text-alert-yellow font-display font-light italic">
                              "{prod.tagline}"
                            </p>
                            <p className="text-xs text-slate-300 leading-relaxed font-sans line-clamp-3">
                              {prod.description}
                            </p>
                            
                            {/* Short specification bullet points */}
                            <div className="pt-3 border-t border-slate-800 space-y-1 font-mono text-[10px] text-slate-400">
                              <p className="text-gray-500 font-semibold uppercase tracking-wider">TEBAL & COATING CORNER:</p>
                              {prod.specs.slice(0, 3).map((sp, i) => (
                                <div key={i} className="flex justify-between">
                                  <span className="truncate max-w-[120px]">{sp.label}</span>
                                  <span className="text-slate-300 font-semibold">{sp.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-industrial-black border-t border-slate-800 flex items-center justify-between text-xs font-display">
                            <span className="text-[10px] font-mono text-gray-400">✓ CERTIFIED SNI BAJA</span>
                            <span className="text-safety-orange transition-transform group-hover:translate-x-1.5 font-bold flex items-center gap-0.5">
                              Lihat Rincian Teknis ➔
                            </span>
                          </div>
                        </MagneticCard>
                      ))}
                    </div>

                    {/* Anchor CTA to go to the full catalog page */}
                    <div className="mt-12 text-center">
                      <button
                        onClick={() => handleFeaturedCategoryClick("all")}
                        className="px-8 py-4 bg-white/5 border border-white/20 hover:border-safety-orange text-white rounded-none text-xs font-display font-bold uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 transition-all hover:bg-slate-950/40"
                      >
                        Jelajahi Katalog Material Selengkapnya
                        <ArrowRight className="w-4 h-4 text-safety-orange" />
                      </button>
                    </div>

                  </div>
                </section>

                {/* B2. B2B SPECIFICATIONS AND ESTIMATOR UTILITY (Professional High Tech Widget) */}
                <section className="py-12 bg-industrial-black/40 border-b border-steel-border/60">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <SpecsEstimator />
                  </div>
                </section>

                {/* C. LIVE PROJECT GALLERY GRID SECTION */}
                <section className="py-20 bg-industrial-black">
                  <div className="max-w-7xl mx-auto px-4 md:px-8">
                    
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
                      <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
                        PORTFOLIO / BSM OPERATIONAL FOOTPRINT
                      </span>
                      <h2 className="text-3xl md:text-4xl font-display font-medium text-white tracking-tight uppercase">
                        Dokumentasi Proyek & <span className="text-safety-orange">Pemasangan Riil</span>
                      </h2>
                      <p className="text-slate-350 text-xs md:text-sm font-sans font-light">
                        Tinjauan visual dari instalasi kargo material baja kami di berbagai kawasan infrastruktur strategis, zona berikat, pelabuhan, bandar udara, dan jalan tol nasional.
                      </p>
                    </div>

                    <motion.div
                      variants={galleryContainerVariants}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, margin: "-50px" }}
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                      {projectGallery.map((proj) => (
                        <motion.div
                          key={proj.id}
                          variants={galleryItemVariants}
                          className="relative group rounded-none overflow-hidden border border-white/10 h-72 cursor-crosshair shadow-lg hover:border-safety-orange transition-all duration-300"
                        >
                          <img
                            src={proj.image}
                            alt={proj.title}
                            className="w-full h-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
                          
                          {/* Hover display details cards */}
                          <div className="absolute bottom-4 left-4 right-4 text-left space-y-1">
                            <span className="text-[9px] font-mono text-alert-yellow bg-slate-950/90 border border-white/10 px-2 py-0.5 rounded-none uppercase font-bold tracking-wider">
                              📍 {proj.location}
                            </span>
                            <h3 className="font-display font-bold text-sm text-white leading-tight">
                              {proj.title}
                            </h3>
                            <p className="text-[10px] text-gray-400 font-mono tracking-wide">
                              Material: {proj.material}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                  </div>
                </section>

                {/* TESTIMONIALS SECTION FEATURE */}
                <TestimonialSection />

                {/* D. INSTANT FLOATING CTA SECTION (Lead Generation Engine) */}
                <section className="py-16 bg-gradient-to-br from-industrial-charcoal to-industrial-slate border-t border-steel-border text-center relative overflow-hidden">
                  <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

                  <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
                    <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1.5 rounded-none">
                      ESTIMASI RAPID INQUIRY PENAWARAN (RFQ)
                    </span>
                    <h2 className="text-2xl md:text-4xl font-display font-extrabold text-white tracking-tight leading-tight uppercase">
                      Butuh Kalkulasi Anggaran RAB Cepat? <br />
                      <span className="text-alert-yellow text-xl md:text-3xl font-bold font-sans">Hubungi Estimator BSM Kursi Pemasaran Sidoarjo</span>
                    </h2>
                    <p className="text-slate-330 text-xs md:text-sm max-w-xl mx-auto font-sans font-light leading-relaxed">
                      Kirimkan rincian gambar kerja AutoCAD atau detail jumlah Pagar BRC / Guardrail yang Anda drafkan. Tim estimator teknik kami merilis surat penawaran harga resmi (PDF) dalam 1-2 Jam Kerja!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-2">
                      <button
                        onClick={() => handleImmediateWA("Halo BSM Sidoarjo, saya ingin berkonsultasi mengenai perhitungan estimasi kebutuhan Pagar BRC / Guardrail sesuai dengan gambar teknis proyek kami.")}
                        className="px-6 py-3.5 bg-safety-orange hover:bg-safety-orange-hover text-white font-display font-bold text-sm rounded-none shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                      >
                        <MessageSquare className="w-5 h-5 fill-white" />
                        Minta Penawaran Cepat via WhatsApp
                      </button>

                      <button
                        onClick={() => handlePageChange("contact")}
                        className="px-6 py-3.5 bg-slate-950/40 hover:bg-slate-900 border border-white/10 text-white text-sm font-display font-bold rounded-none transition-colors cursor-pointer uppercase tracking-wider"
                      >
                        Unggah Gambar Kerja Proyek (RAB)
                      </button>
                    </div>

                    <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-[11px] font-mono text-gray-500">
                      <span className="flex items-center gap-1">✔ Sertifikat Mill Test Terlampir</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">✔ Sedia Pengiriman Luar Pulau</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">✔ Harga Paling Stabil Jatim</span>
                    </div>

                  </div>
                </section>

              </div>
            )}

            {activePage === "products" && (
              <CatalogView
                onProductSelect={(prod) => setSelectedProduct(prod)}
                initialCategory={initialCatalogCategory}
              />
            )}

            {activePage === "about" && <AboutView />}

            {activePage === "blog" && <BlogView />}

            {activePage === "contact" && <ContactView />}

            {activePage === "admin" && <AdminView />}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* 4. Sticky Animated Modular Floating WhatsApp Widget */}
      <FloatingWhatsApp
        activePage={activePage}
        selectedProductName={selectedProduct?.name}
      />

      {/* 5. Sticky Slide-Out Immersive Spec Details Modal overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductDetailModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>

      {/* 6. Footer section (Global Address & Legal block info) */}
      <Footer onNavigate={handlePageChange} />

    </div>
  );
}
