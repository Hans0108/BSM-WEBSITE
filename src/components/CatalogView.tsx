import { useState, useMemo } from "react";
import { CATEGORIES, Product } from "../data/products";
import { useProducts } from "../context/ProductContext";
import { Search, Eye, ArrowUpRight, Award, Filter, ShieldCheck, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import MagneticCard from "./MagneticCard";

interface CatalogViewProps {
  onProductSelect: (prod: Product) => void;
  initialCategory?: string;
}

export default function CatalogView({ onProductSelect, initialCategory = "all" }: CatalogViewProps) {
  const { products } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Process search and classification filters
  const filteredProducts = useMemo(() => {
    return products.filter((prod) => {
      // 1. Category check
      const matchesCategory =
        selectedCategory === "all" || prod.category === selectedCategory;

      // 2. Search text check (name, tagline, descriptions, features, specifications)
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        prod.name.toLowerCase().includes(query) ||
        prod.tagline.toLowerCase().includes(query) ||
        prod.description.toLowerCase().includes(query) ||
        prod.features.some((f) => f.toLowerCase().includes(query)) ||
        prod.specs.some((s) => s.value.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-industrial-charcoal min-h-screen text-left">
      
      {/* Search Header Banner */}
      <section className="relative py-16 bg-industrial-black border-b border-steel-border overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center space-y-5">
          <div className="space-y-2">
            <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
              KATALOG KHUSUS B2B DAN RETALIER JATIM
            </span>
            <h1 className="text-3xl md:text-5xl font-display font-medium text-white tracking-tight uppercase">
              Eksplorasi Spesifikasi <span className="text-safety-orange">Material Konstruksi</span>
            </h1>
            <p className="text-slate-350 text-xs md:text-sm font-sans font-light max-w-xl mx-auto">
              Saring dan ulas lembar teknis, ukuran tebal pelat baja, berat seng galvanisasi, serta sertifikat pabrik dari spesifikasi material andalan BSM.
            </p>
          </div>

          {/* Core Interactive Search Field */}
          <div className="max-w-xl mx-auto relative mt-4">
            <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-400">
              <Search className="w-5 h-5 text-safety-orange" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Ketik produk (misal: 'Pagar BRC', 'Kawat Duri', 'Guardrail', 'HDG', '6.0 mm')..."
              className="w-full bg-slate-950/75 border border-white/10 rounded-none py-3.5 pl-12 pr-4 text-xs md:text-sm text-white focus:outline-none focus:border-safety-orange transition-all placeholder-gray-500 shadow-xl"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-3.5 flex items-center text-xs text-gray-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Grid Filter Category Tabs and results wrapper */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        {/* Category horizontal scroll panels */}
        <div className="mb-8 border-b border-white/10 pb-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <Filter className="w-4 h-4 text-safety-orange" />
            Saring Menurut Segmentasi Kategori Pokok:
          </div>
          
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-none text-xs font-display tracking-wider uppercase transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-slate-950 text-safety-orange border border-safety-orange font-bold scale-[1.02]"
                    : "bg-[#0F1113] border border-white/10 text-slate-300 hover:border-safety-orange hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Indicators */}
        <div className="flex items-center justify-between text-xs text-gray-400 font-sans mb-6">
          <div>
            Menampilkan <span className="text-white font-mono font-bold">{filteredProducts.length}</span> Material Konstruksi
            {searchQuery && ` untuk kecocokan kata kunci "${searchQuery}"`}
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-slate-400 font-mono text-[10px]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Jaminan SNI & TKDN
            </span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Award className="w-4 h-4 text-alert-yellow" /> Standar Uji Tarik Baja
            </span>
          </div>
        </div>

        {/* Product Cards Grid Structure */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((prod) => (
              <MagneticCard
                key={prod.id}
                onClick={() => onProductSelect(prod)}
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
                  <h3>Sertifikasi:</h3>
                  <ul>
                    {prod.certifications?.map((cert, i) => <li key={i}>{cert}</li>)}
                  </ul>
                </article>
                
                {/* Visual Header Image representation */}
                <div className="h-48 w-full overflow-hidden relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[25%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  
                  {/* Category overlay label */}
                  <span className="absolute top-3 left-3 bg-slate-950/90 text-safety-orange text-[9px] font-mono tracking-widest font-bold px-2 py-0.5 rounded-none border border-white/10">
                    {prod.category.toUpperCase()}
                  </span>

                  {/* SNI tag overlay indicating cert presence */}
                  {prod.certifications && prod.certifications.length > 0 && (
                    <span className="absolute bottom-3 left-3 bg-emerald-950/90 text-emerald-300 border border-emerald-500/35 text-[9px] font-mono px-2 py-0.5 rounded-none">
                      ✓ LAB SNI
                    </span>
                  )}
                </div>

                {/* Card Context items descriptive */}
                <div className="p-5 flex-grow space-y-3">
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-base text-white group-hover:text-safety-orange transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-alert-yellow font-display font-light italic truncate">
                      "{prod.tagline}"
                    </p>
                  </div>

                  <p className="text-xs text-slate-350 line-clamp-3 font-sans leading-relaxed font-light">
                    {prod.description}
                  </p>

                  {/* Highlights technical bullet snippet */}
                  <div className="pt-2.5 border-t border-slate-800 space-y-1.5 font-mono text-[10px] text-gray-400">
                    <p className="text-orange-400 text-[9px] uppercase tracking-wider font-semibold">Tabel Ukuran & Teknis Premium:</p>
                    {prod.specs.slice(0, 3).map((sp, keyIdx) => (
                      <div key={keyIdx} className="flex justify-between">
                        <span className="text-gray-500 truncate max-w-[130px]">{sp.label}</span>
                        <span className="text-slate-300 font-semibold text-right">{sp.value.substring(0, 30)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* View specifications footer button */}
                <div className="p-4 bg-industrial-black/80 border-t border-slate-800 flex items-center justify-between text-xs font-display">
                  <span className="text-gray-400 flex items-center gap-1 bg-slate-950 px-2 py-1 rounded-none text-[10px] font-mono">
                    <Award className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    B2B PRASARANA
                  </span>
                  
                  <span className="text-safety-orange font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Ulas Spesifikasi Teknis
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>

              </MagneticCard>
            ))}
          </div>
        ) : (
          /* Empty search states layout */
          <div className="text-center py-16 bg-slate-950/40 rounded-none border border-white/10 max-w-xl mx-auto p-6 space-y-4">
            <div className="p-4 bg-slate-900 w-fit mx-auto rounded-none border border-white/10">
              <HelpCircle className="w-8 h-8 text-safety-orange animate-bounce" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-medium uppercase text-lg text-white">Bahan Material Tidak Ditemukan</h3>
              <p className="text-xs text-slate-400 font-sans max-w-md leading-relaxed mx-auto">
                Kata kunci pencarian kustomisasi Anda tidak cocok dengan klasifikasi utama kami. Silakan ketik nama lain atau mintalah tim sales estimator BSM memproyeksikannya secara manual.
              </p>
            </div>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-6 py-2.5 bg-safety-orange hover:bg-safety-orange-hover text-white font-display text-xs rounded-none transition-colors cursor-pointer uppercase font-bold"
            >
              Reset Filter Pencarian
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
