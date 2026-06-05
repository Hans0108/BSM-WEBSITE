import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, ShieldAlert, Sparkles, MessageSquare, Instagram, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactView() {
  // RFQ Submission state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    category: "Pagar BRC",
    location: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackError("");

    // Simple validation
    if (!formData.name || !formData.phone || !formData.message || !formData.location) {
      setFeedbackError("Mohon isi semua kolom bertanda bintang (*) untuk kelayakan berkas RFQ.");
      return;
    }

    setIsSubmitting(true);

    // Simulate standard server latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Auto-open custom WhatsApp with RFQ details after submission for ultimate conversion
      const phoneNumber = "6281222444883";
      const userMessage = `Halo BSM Sales, saya mengirimkan RFQ website:\n\n*Nama:* ${formData.name}\n*Perusahaan:* ${formData.company || "-"}\n*Telepon:* ${formData.phone}\n*Material:* ${formData.category}\n*Lokasi Proyek:* ${formData.location}\n*Kebutuhan:* ${formData.message}`;
      const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(userMessage)}`;
      
      // Delay WA pop-up slightly block
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 1000);
    }, 1500);
  };

  // State tracker for interactive map hover points
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  // Active logistics hub locations
  const hubs = [
    { id: "sidoarjo", name: "BSM Waru Headquarters & Central Depot", coords: "Waru, Sidoarjo (Main Hub)", desc: "Pusat logistik utama Jatim, stoking kargo BRC, pos, guardrail, kawat duri siap angkut.", position: "top-[64%] left-[44%]" },
    { id: "surabaya", name: "Surabaya Tanjung Perak Cargo Port", coords: "Tanjung Perak, Sby (EMKL Port)", desc: "Dermaga pintu gerbang pemuatan peti kemas baja FCL kargo laut ke luar pulau Jawa.", position: "top-[54%] left-[45%]" },
    { id: "kalimantan", name: "Kalimantan Shipping Route (Banjarmasin/Balikpapan)", coords: "Makassar Strait Transit Line", desc: "Suplai reguler industri tambang, kebun sawit, dan pembatas jalan umum regional.", position: "top-[20%] left-[35%]" },
    { id: "sulawesi", name: "Sulawesi Cargo Sea Transit (Makassar/Manado)", coords: "Eastern Indonesia Gate", desc: "Forwarding material proyek pemukiman pangkalan militer banyuwangi lashing.", position: "top-[25%] left-[78%]" },
    { id: "bali", name: "Bali & Nusa Tenggara Ground Cargo Hub", coords: "Ketapang-Gilimanuk Transit Line", desc: "Angkutan darat fuso, tronton, dobel engkel pengiriman harian kawat harmonika.", position: "top-[78%] left-[72%]" }
  ];

  return (
    <div className="bg-industrial-charcoal min-h-screen text-left">
      
      {/* Page Header */}
      <section className="relative py-14 bg-industrial-black border-b border-steel-border overflow-hidden blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
            HUBUNGI SALES DESK RESMI / REQUEST FOR QUOTATION
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 tracking-tight uppercase">
            Hubungi Hub <span className="text-safety-orange">Logistik & Penawaran</span> BSM
          </h1>
          <p className="text-slate-330 font-sans font-light text-xs md:text-sm max-w-xl mx-auto mt-3">
            Dapatkan respon kalkulasi penawaran harga (RAB) serta informasi stok dalam kurang dari 2 jam kerja. Sales desk kami siap membantu.
          </p>
        </div>
      </section>

      {/* Grid container layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT COLUMN: OFFICIAL DETAILS & INTERACTIVE HUB MAP (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Quick Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-none bg-slate-950/40 border border-white/10 hover:border-safety-orange transition-colors text-left flex flex-col justify-between min-h-[110px]">
              <Phone className="w-5 h-5 text-safety-orange mb-2" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block">TELEPON CS PENAWARAN</span>
                <span className="font-display font-bold text-xs text-white block mt-0.5">0812-2244-4883</span>
              </div>
            </div>

            <div className="p-4 rounded-none bg-slate-950/40 border border-white/10 hover:border-safety-orange transition-colors text-left flex flex-col justify-between min-h-[110px]">
              <Mail className="w-5 h-5 text-safety-orange mb-2" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block">EMAIL SURAT RESMI</span>
                <span className="font-display font-bold text-xs text-white block mt-0.5 break-all">sales@bangunsaranamakmur.co.id</span>
              </div>
            </div>

            <div className="p-4 rounded-none bg-slate-950/40 border border-white/10 hover:border-safety-orange transition-colors text-left flex flex-col justify-between min-h-[110px]">
              <Clock className="w-5 h-5 text-safety-orange mb-2" />
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase block">JAM OPERASIONAL KANTOR</span>
                <span className="font-display font-bold text-xs text-white block mt-0.5">Senin-Sabtu (08:00 - 17:00)</span>
              </div>
            </div>
          </div>

          {/* MASTERPIECE: EAST JAVA & INTER-INSULAR LOGISTICS SVG MAP VISUALIZER */}
          <div className="p-6 bg-slate-950/40 rounded-none border border-white/10 text-left relative overflow-hidden blueprint-grid-fine flex flex-col justify-between">
            
            <div className="border-b border-white/10 pb-3 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[9px] font-mono text-orange-400 block tracking-widest uppercase">PETA DISTRIBUSI BAJA / JALUR EMKL CARGO</span>
                <h3 className="font-display font-bold text-xs text-white uppercase">Visual Operasional Jawa Timur & Transit Luar Pulau</h3>
              </div>
              <span className="bg-safety-orange/15 text-safety-orange text-[9px] font-mono px-2 py-0.5 border border-safety-orange/35 rounded-none uppercase">
                Interactive Grid
              </span>
            </div>

            {/* Simulated Vector Grid Map Area */}
            <div className="relative h-64 md:h-80 my-4 border border-white/10 rounded-none bg-[#0F1113] flex items-center justify-center overflow-hidden">
              
              {/* Background abstract ocean grids and island representation */}
              <div className="absolute inset-0 blueprint-grid opacity-20"></div>

              {/* Vector abstract archipelago outline in Sby-Jatim zone */}
              <svg className="absolute w-[95%] h-[90%] opacity-25 stroke-steel-border fill-cyan-900/10 pointer-events-none stroke-dasharray-[3]" viewBox="0 0 400 300">
                {/* Simulated Jatim island polygon and pathways */}
                <path d="M 50 180 Q 150 170 190 190 T 250 190 T 320 200 L 330 220 L 290 230 L 160 210 L 40 210 Z" />
                {/* Ship cargo line vectors from Tanjung Perak */}
                <path d="M 200 170 C 180 110, 140 100, 140 60" drag-active="true" className="stroke-safety-orange stroke-dasharray-none" />
                <path d="M 200 170 C 230 130, 270 100, 310 80" className="stroke-safety-orange stroke-dasharray-none" />
                <path d="M 200 170 C 240 190, 280 210, 340 210" className="stroke-safety-orange stroke-dasharray-none" />
                {/* Sidoarjo main epicenter ring */}
                <circle cx="195" cy="183" r="10" className="stroke-safety-orange fill-safety-orange/10 fill-opacity-20 animate-pulse" />
              </svg>

              {/* Glowing Interactive Pulse Hub Beacons */}
              {hubs.map((h) => (
                <button
                  key={h.id}
                  onMouseEnter={() => setHoveredHub(h.id)}
                  onMouseLeave={() => setHoveredHub(null)}
                  className={`absolute ${h.position} translate-x-1/2 translate-y-1/2 p-2 rounded-full cursor-pointer z-20 group focus:outline-none`}
                >
                  <span className="absolute inset-0 w-5 h-5 bg-safety-orange rounded-full animate-ping filter opacity-60"></span>
                  <span className="relative block w-3.5 h-3.5 bg-safety-orange rounded-full border-2 border-white/40 shadow-md group-hover:scale-125 transition-transform"></span>
                  
                  {/* Small absolute title helper popup */}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-5 bg-slate-950 font-display text-[9px] text-white px-2 py-0.5 rounded-none border border-white/10 shadow-lg whitespace-nowrap hidden group-hover:block transition-all z-30">
                    {h.name.split(" ")[0]}
                  </span>
                </button>
              ))}

              {/* Micro Compass details */}
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-slate-500 text-left">
                SYS_LOC: -7.348873 S, 112.723781 E <br />
                CARGO_SYS: TRANS_EAST_INDONESIA_BSM
              </div>

              {/* Dynamic Information Display Box */}
              <div className="absolute top-3 right-3 left-3 max-w-sm ml-auto bg-slate-950/95 border border-white/10 rounded-none p-3 text-left space-y-1 z-30 pointer-events-none transition-all">
                {hoveredHub ? (
                  (() => {
                    const activeHub = hubs.find((h) => h.id === hoveredHub);
                    return (
                      <>
                        <h4 className="text-[10px] font-mono text-safety-orange font-bold uppercase tracking-wider">★ HUB TERPILIH</h4>
                        <div className="text-xs font-display font-extrabold text-white">{activeHub?.name}</div>
                        <div className="text-[10px] font-sans text-slate-300 leading-normal">{activeHub?.desc}</div>
                      </>
                    );
                  })()
                ) : (
                  <>
                    <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Interaktif: Arahkan kursor ke titik suar
                    </h4>
                    <p className="text-[9px] font-sans text-gray-400">
                      Sentuh atau arahkan kursor ke tiap suar berkedip untuk mengulas rincian pusat manufaktur andalan kami dan jaringan distribusinya.
                    </p>
                  </>
                )}
              </div>

            </div>

            {/* Sidoarjo Head Office detailed coordinates */}
            <div className="bg-slate-950/85 p-4 border border-white/10 rounded-none space-y-2">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-safety-orange shrink-0 mt-0.5 animate-bounce" />
                <div className="text-xs">
                  <h4 className="font-display font-medium text-white">Alamat Fisik Kantor Sidoarjo Jawa Timur:</h4>
                  <p className="text-slate-300 font-sans mt-0.5 leading-relaxed">
                    Jl. Jenderal S. Parman No. 115, Waru, Sidoarjo, Jawa Timur 61256. (Penyedia utama gudang depo kepingan guardrail, anyaman pagar BRC Hot-Dip Galvanis legal SNI, serta pelat Bondek).
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Social Platform Handles for trust */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-display text-gray-400">
            <span>Official Social Channel kami:</span>
            <span className="flex items-center gap-1 text-white bg-slate-950 border border-white/10 py-1 px-2.5 rounded-none">
              <Instagram className="w-4 h-4 text-pink-400" /> @bangunsaranamakmur
            </span>
            <span className="flex items-center gap-1 text-white bg-slate-950 border border-white/10 py-1 px-2.5 rounded-none">
              <Facebook className="w-4 h-4 text-blue-400" /> CV Bangun Sarana Makmur
            </span>
          </div>

        </div>

        {/* RIGHT COLUMN: REFINED RFQ CONTACT SUBMISSION FORM (5 Cols) */}
        <div className="lg:col-span-5 h-fit">
          <div className="bg-slate-950/40 border border-white/10 p-6 rounded-none relative shadow-2xl overflow-hidden text-left">
            
            {/* Urgency background glowing mesh */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-safety-orange/5 rounded-full blur-2xl pointer-events-none"></div>

            <div className="text-left space-y-1 pb-4 border-b border-white/10 mb-6 font-display">
              <span className="text-[10px] font-mono text-safety-orange uppercase tracking-widest block font-bold">
                ⚡ HUB KANBAN INQUIRY
              </span>
              <h2 className="font-display font-bold text-lg md:text-xl text-white uppercase">
                Minta Surat Penawaran Harga (RAB)
              </h2>
              <p className="text-xs text-slate-400 font-sans leading-normal">
                Kirim data teknis rancangan proyek konstruksi Anda. Penawaran harga resmi (format PDF) akan dikirimkan lewat email/WA.
              </p>
            </div>

            {/* Error alerts */}
            {feedbackError && (
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-none text-xs leading-normal font-sans text-red-400 flex items-start gap-2 mb-4">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{feedbackError}</span>
              </div>
            )}

            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                /* Submission Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Nama Koordinator Proyek / Pembeli <span className="text-safety-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Contoh: Ir. Rahmat Wijaya"
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors"
                    />
                  </div>

                  {/* Company field (can be empty) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Nama PT / CV Instansi Kontraktor
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Contoh: PT. Adhi Karya Perkasa (Opsional)"
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors"
                    />
                  </div>

                  {/* WhatsApp/Telphone Contact */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Nomor WhatsApp Aktif <span className="text-safety-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 081234567890"
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors"
                    />
                  </div>

                  {/* Project Location site (important for shipping rates info) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Lokasi Pengiriman Proyek <span className="text-safety-orange">*</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Contoh: Samarinda, Kaltim / Sidoarjo, Jatim"
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors"
                    />
                  </div>

                  {/* Category select dropdown */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Jenis Material Fokus Penawaran
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors cursor-pointer"
                    >
                      <option value="Pagar BRC">Pagar BRC Galvanis HDG/EP</option>
                      <option value="Kawat Duri Silet">Kawat Duri Silet / Razor Wire</option>
                      <option value="Kawat Duri Galvanis">Kawat Duri Galvanis SNI</option>
                      <option value="Kawat Harmonika">Kawat Harmonika PVC / Galvanis</option>
                      <option value="Guardrail Pembatas Jalan">Guardrail Pembatas Jalan Tol Dishub</option>
                      <option value="Aksesoris Tiang">Pipa Tiang BRC & Aksesoris Klem</option>
                      <option value="Lainnya">Kustomisasi Dimensi Profil Lainnya</option>
                    </select>
                  </div>

                  {/* Message requirements */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-gray-400 block uppercase font-medium">
                      Uraian Kebutuhan, Ukuran & Volume Pembelian <span className="text-safety-orange">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Contoh: Butuh Pagar BRC HDG Tinggi 120cm Diameter Kawat 6.0mm sebanyak 250 lembar lengkap dengan pipa tiang angkur."
                      className="w-full bg-[#17191C] border border-white/10 rounded-none py-2.5 px-3 text-xs text-white focus:outline-none focus:border-safety-orange focus:bg-slate-950/40 transition-colors h-24 resize-none animate-none"
                    />
                  </div>

                  {/* Action submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-safety-orange hover:bg-safety-orange-hover disabled:opacity-60 text-white font-display font-bold text-xs uppercase tracking-wider rounded-none shadow-lg shadow-orange-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                        Mengunggah Data RFQ...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Ajukan RFQ & Hubungi Sales WA
                      </>
                    )}
                  </button>

                  <div className="text-[10px] text-gray-500 font-mono text-center">
                    🔒 Data Anda hanya dirujuk untuk penerbitan surat penawaran harga resmi.
                  </div>

                </form>
              ) : (
                /* Post-Submission Success Message layout */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-2 text-center space-y-4"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8 animate-pulse" />
                  </div>
                  
                  <div className="space-y-1">
                    <h3 className="font-display font-bold text-white text-base">Berkas RFQ Terkirim Sempurna!</h3>
                    <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto leading-relaxed">
                      Terima kasih **{formData.name}**. Formulir Anda telah terdaftar dalam antrean prioritas sistem Sales Desk CV. Bangun Sarana Makmur.
                    </p>
                  </div>

                  <p className="text-[11px] text-orange-400 font-sans leading-relaxed pt-2">
                    Kami juga sedang membuka portal browser untuk menghubungkan rincian data Anda langsung ke tim sales WhatsApp kami agar ketersediaan stok diverifikasi instan.
                  </p>

                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          name: "",
                          company: "",
                          phone: "",
                          category: "Pagar BRC",
                          location: "",
                          message: ""
                        });
                      }}
                      className="px-6 py-2 border border-white/10 bg-slate-950/40 text-xs text-slate-200 transition-colors rounded-none cursor-pointer hover:border-safety-orange"
                    >
                      Kirim RFQ Baru
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>

    </div>
  );
}
