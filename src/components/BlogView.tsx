import { useState } from "react";
import { BLOG_POSTS, BlogPost } from "../data/blogs";
import { BookOpen, Calendar, User, ArrowLeft, Send, Sparkles, MessageSquare, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function BlogView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // Categories list based on distinct groupings
  const categories = [
    { id: "all", label: "Semua Artikel" },
    { id: "Panduan Material", label: "Panduan Material" },
    { id: "Tips Konstruksi", label: "Tips Konstruksi" },
    { id: "Update Proyek", label: "Update Proyek" }
  ];

  // Filter posts
  const filteredPosts = selectedCategory === "all"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === selectedCategory);

  // Extract featured post
  const featuredPost = BLOG_POSTS.find(post => post.featured === true);

  // Handle CTA inside reader
  const handleConsult = (title: string) => {
    const phoneNumber = "6281222444883";
    const msg = `Halo BSM, saya baru saja membaca artikel "${title}" di website Anda dan ingin menanyakan kelayakan spesifikasi baja/material untuk kebutuhan proyek kami.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="bg-industrial-charcoal min-h-screen text-left">
      
      {/* Blog Listing Context */}
      {!activePost ? (
        <div>
          {/* Header */}
          <section className="relative py-16 bg-industrial-black border-b border-steel-border blueprint-grid overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
              <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
                WAWASAN TEKNOLOGI BAJA & PROYEK
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-medium text-white mt-4 tracking-tight uppercase">
                Hub Informasi <span className="text-safety-orange">Spesifikasi Material</span>
              </h1>
              <p className="text-slate-350 font-sans font-light text-xs md:text-sm max-w-xl mx-auto mt-3">
                Dapatkan artikel edukasi terlengkap terkait SNI baja, kiat menghemat RAB dak beton, serta berita perkembangan pengiriman logistik antar pulau.
              </p>
            </div>
          </section>

          {/* Catalog & Filter Grid */}
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 space-y-10">
            
            {/* Featured Post (Banner Display Option) */}
            {featuredPost && selectedCategory === "all" && (
              <div className="bg-slate-950/40 border border-white/10 rounded-none overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 shadow-xl">
                
                {/* Visual Image */}
                <div className="lg:col-span-7 h-64 lg:h-auto min-h-[260px] relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-transparent to-transparent"></div>
                  <span className="absolute top-4 left-4 bg-safety-orange text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded-none uppercase tracking-wider">
                    ARTIKEL UTAMA
                  </span>
                </div>

                {/* Text Context */}
                <div className="lg:col-span-5 p-6 md:p-8 flex flex-col justify-center space-y-4 text-left">
                  <div className="flex items-center gap-3 text-red-400 font-mono text-[10px]">
                    <span className="bg-red-400/10 px-2 py-0.5 border border-red-500/25 rounded-none uppercase">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {featuredPost.date}
                    </span>
                  </div>

                  <h2 className="text-lg md:text-xl font-display font-bold text-white leading-snug hover:text-safety-orange transition-colors cursor-pointer uppercase" onClick={() => setActivePost(featuredPost)}>
                    {featuredPost.title}
                  </h2>

                  <p className="text-xs text-slate-350 leading-relaxed font-sans font-light">
                    {featuredPost.excerpt}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setActivePost(featuredPost)}
                      className="px-6 py-3 bg-safety-orange hover:bg-safety-orange-hover text-white text-xs font-display font-bold rounded-none flex items-center gap-2 cursor-pointer uppercase tracking-wider"
                    >
                      Baca Selengkapnya
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            )}

            {/* Categories Selector Tabs with badge styling */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 border rounded-none text-xs font-display transition-all cursor-pointer ${
                      selectedCategory === cat.id
                        ? "bg-slate-950 text-safety-orange border-safety-orange font-semibold"
                        : "bg-slate-900/40 border-white/10 text-slate-300 hover:border-safety-orange hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
              <span className="hidden sm:inline text-xs font-mono text-gray-500 uppercase tracking-widest">
                📰 {filteredPosts.length} Artikel Terbit
              </span>
            </div>

            {/* Standard Grid of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className="bg-slate-950/40 border border-white/10 hover:border-safety-orange rounded-none overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="h-44 w-full overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[40%] group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <span className="absolute bottom-3 left-3 bg-slate-950 border border-white/10 text-slate-300 text-[9px] font-mono px-2 py-0.5 rounded-none uppercase">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3  h-3" /> {post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="font-display font-bold text-sm text-white group-hover:text-safety-orange transition-colors leading-snug">
                        {post.title}
                      </h3>

                      <p className="text-xs text-slate-400 font-sans line-clamp-3 leading-relaxed font-light">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-display">
                      <span className="text-gray-400 flex items-center gap-1">
                        <User className="w-3.5 h-3.5" /> Ed. Redaksi BSM
                      </span>
                      <span className="text-safety-orange group-hover:translate-x-1.5 transition-transform font-semibold flex items-center gap-0.5">
                        Baca Artikel ➝
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      ) : (
        /* Immersive BlogPost Reader Pane */
        <div className="max-w-3xl mx-auto px-4 md:px-8 py-12 space-y-8">
          
          {/* Back button */}
          <button
            onClick={() => setActivePost(null)}
            className="inline-flex items-center gap-2 text-xs font-display font-medium text-slate-300 hover:text-safety-orange transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Artikel Wawasan
          </button>

          {/* Main Article Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
              <span className="bg-safety-orange/15 text-safety-orange border border-safety-orange/30 px-2.5 py-0.5 rounded-none">
                Kategori: {activePost.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {activePost.date}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{activePost.readTime}</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-snug uppercase">
              {activePost.title}
            </h1>

            <div className="p-4 rounded-none bg-slate-950/40 border border-white/10 border-l-4 border-l-safety-orange text-xs text-gray-400 leading-relaxed font-mono">
              Ditulis Oleh: <span className="text-white font-semibold">{activePost.author}</span><br />
              Verifikasi Mutu: Kantor Komisi Rekayasa Baja & Pagar Pengaman CV. Bangun Sarana Makmur.
            </div>
          </div>

          {/* Hero Banner inside Reader */}
          <div className="h-64 sm:h-96 w-full rounded-none overflow-hidden border border-white/10 relative">
            <img
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-full object-cover grayscale-[10%]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>

          {/* Long form reading content */}
          <div className="space-y-5 font-sans text-sm md:text-base text-slate-300 leading-relaxed max-w-none">
            {activePost.content.map((pText, i) => (
              <p key={i}>
                {pText}
              </p>
            ))}
          </div>

          {/* Reader Footer Consult BSM CTA */}
          <div className="p-6 bg-slate-950/40 rounded-none border border-white/10 flex flex-col md:flex-row gap-5 items-center justify-between text-left">
            <div className="space-y-1">
              <h4 className="font-display font-medium text-sm text-white flex items-center gap-1.5 uppercase">
                <Sparkles className="text-alert-yellow w-4 h-4 animate-pulse" />
                Ingin Mengkonsultasikan Material Terkait?
              </h4>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                Tanyakan langsung ketersediaan material, berkas uji SNI, dan penawaran diskon volume besar yang dibahas di artikel ini.
              </p>
            </div>

            <button
              onClick={() => handleConsult(activePost.title)}
              className="px-6 py-3.5 bg-safety-orange hover:bg-safety-orange-hover text-white text-xs font-display font-bold rounded-none flex items-center justify-center gap-2 cursor-pointer w-full md:w-auto shrink-0 transition-colors uppercase tracking-wider"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              Tanya Sales Desk via WA
            </button>
          </div>

          {/* Footing Back Anchor */}
          <div className="pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => setActivePost(null)}
              className="px-6 py-2.5 bg-slate-950/40 text-xs font-display border border-white/10 text-slate-300 hover:text-safety-orange rounded-none transition-colors cursor-pointer uppercase tracking-wider"
            >
              ← Kembali ke Semua Artikel Blog
            </button>
          </div>

        </div>
      )}

    </div>
  );
}
