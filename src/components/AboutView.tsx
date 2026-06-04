import { Award, ShieldCheck, Ship, Box, Layers, Landmark, MapPin, Handshake } from "lucide-react";
import { motion } from "motion/react";
import CompanyLogo from "./CompanyLogo";

export default function AboutView() {
  const pillars = [
    {
      icon: Ship,
      title: "Logistik Hub Antar Pulau Mandiri",
      desc: "Kemitraan erat dengan 12 perusahaan ekspedisi EMKL pelayaran kargo laut peti kemas FCL maupun curah tongkang ke seluruh dermaga utama luar Jawa."
    },
    {
      icon: ShieldCheck,
      title: "Mutu Baja SNI Standard Kelayakan",
      desc: "Semua pipa baja, pagar, kawat anyaman dan guardrail disertai berkas kelayakan Mill Test dari uji laboratorium metalurgi terafiliasi pabrik resmi."
    },
    {
      icon: Layers,
      title: "Fleksibilitas Fabrikasi Kustom",
      desc: "Tim teknis BSM melayani kustomisasi spesifikasi tinggi pagar, ketebalan lapisan panas Hot-Dip Zinc, diameter kawat core, hingga layout pintu ayun/geser."
    },
    {
      icon: Box,
      title: "Stok Melimpah Depot Penyimpanan",
      desc: "Depot logistik kami di Waru Sidoarjo menjamin ketersediaan barang material prioritas setiap saat bagi kontraktor utama dengan jadwal pengerjaan ketat."
    },
    {
      icon: Handshake,
      title: "Skema Harga B2B Menjaga Profitabilitas",
      desc: "Sebagai distributor tangan pertama, kami menawarkan skema harga beli bertingkat untuk memaksimalkan profit toko ritel baja dan memangkas anggaran RAB sipil."
    }
  ];

  const milestones = [
    { year: "2011", title: "Kelahiran Fondasi Usaha", desc: "Didirikan di Jawa Timur fokus sebagai agen dagang khusus kawat duri dan kawat harmonika anyaman lokal." },
    { year: "2016", title: "Ekspansi Manufaktur Pagar BRC", desc: "Membeli mesin las kawat otomatis presisi tinggi dan mulai mensuplai puluhan bandara serta komplek pabrik regional." },
    { year: "2020", title: "Lisensi Resmi & Lini Guardrail", desc: "Memperoleh sertifikasi SNI dan izin perhubungan resmi untuk fabrikasi Guardrail pembatas jalan tol nasional." },
    { year: "2025", title: "Digitalisasi & Hub Cargo Terintegrasi", desc: "Menghubungkan rantai manajemen logistik dengan depot modern guna mengirim material berskala ratusan kontainer per bulan." }
  ];

  return (
    <div className="bg-industrial-charcoal min-h-screen text-left">
      
      {/* Page Header banner */}
      <section className="relative py-20 bg-industrial-black border-b border-steel-border overflow-hidden blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <CompanyLogo size="lg" />
          </div>
          <span className="text-xs font-mono text-safety-orange tracking-widest font-semibold uppercase bg-slate-950 border border-white/10 px-3 py-1 rounded-none">
            PROFIL PERUSAHAAN (COMPANY CORNER)
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mt-4 tracking-tight uppercase">
            Kredibilitas, Keandalan & <br className="hidden sm:inline" />
            <span className="text-safety-orange">Distribusi Konstruksi Nasional</span>
          </h1>
          <p className="text-slate-300 font-sans font-light text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            Mengenal lebih dekat CV. Bangun Sarana Makmur (BSM), mitra andalan kontraktor sipil dan toko retail bangunan di seluruh penjuru kepulauan Indonesia.
          </p>
        </div>
      </section>

      {/* Main Core Narrative section */}
      <section className="py-16 max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left narrative content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 text-safety-orange font-mono text-xs font-semibold uppercase">
            <Landmark className="w-4 h-4" />
            Kelembagaan B2B Berbadan Hukum Legal
          </div>
          
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight uppercase">
            Menyuplai Prasarana Infrastruktur Sipil dari Jantung Jawa Timur
          </h2>

          <div className="space-y-4 text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
            <p>
              Berpusat di area strategis penyangga logistik **Sidoarjo, Jawa Timur**, CV. Bangun Sarana Makmur berdiri sebagai entitas distributor dan pelaku fabrikasi material pengaman serta penutup atap yang solid. Kami lahir untuk memecahkan kendala klasik proyek sipil: keterlambatan stok material, spesifikasi di bawah standar yang ditolak pengawas, serta biaya logistik luar pulau yang melambung tinggi.
            </p>
            <p>
              Melalui kontrol penjaminan mutu berkesinambungan, setiap lembar **Pagar BRC**, lilitan **Kawat Harmonika**, ataupun bentangan baja **Guardrail Pembatas Jalan** yang keluar dari gudang depo kami telah melewati pengetesan mutu pelapisan galvanis dan ketahanan uji tarik kawat yang tinggi.
            </p>
            <p>
              Kami mengerti bahwa bagi para *Project Manager*, keandalan pengiriman adalah separuh dari kesuksesan proyek. Oleh karena itu, BSM menyediakan armada mandiri terpercaya yang menjaga jadwal tongkang merapat dan kargo terkirim dengan presisi.
            </p>
          </div>

          {/* Legal document cards checklist */}
          <div className="pt-4 border-t border-steel-border/50">
            <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-3">
              DOKUMEN INTEGRITAS USAHA (AUDITED):
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] font-mono text-slate-300">
              <div className="p-2.5 rounded-none bg-slate-950/40 border border-white/10">
                <p className="text-gray-500">NPWP BADAN</p>
                <p className="font-bold text-white mt-1">74.221.432.8-606.000</p>
              </div>
              <div className="p-2.5 rounded-none bg-slate-950/40 border border-white/10">
                <p className="text-gray-500">NOMOR NIB (OSS)</p>
                <p className="font-bold text-white mt-1">9120311242312</p>
              </div>
              <div className="p-2.5 rounded-none bg-slate-950/40 border border-white/10">
                <p className="text-gray-500">IZIN INDUSTRI</p>
                <p className="font-bold text-white mt-1">SIUP LOGAM SNI</p>
              </div>
              <div className="p-2.5 rounded-none bg-slate-950/40 border border-white/10">
                <p className="text-gray-500">WILAYAH BEBAS</p>
                <p className="font-bold text-emerald-400 mt-1">PPN TERDAFTAR</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Graphic card representing Warehouse */}
        <div className="lg:col-span-5">
          <div className="p-6 bg-slate-950/40 rounded-none border border-white/10 relative overflow-hidden blueprint-grid-fine">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-steel-border">
              <div className="flex items-center gap-1.5 text-xs text-white font-display font-bold">
                <Award className="text-safety-orange w-4 h-4" />
                STANDAR LOGISTIK BSM
              </div>
              <span className="text-[10px] font-mono text-slate-400">REF: BSM_SBY_DEPO</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-[#17191C]/60 p-3.5 rounded-none border border-white/10 hover:border-safety-orange transition-colors">
                <div className="w-8 h-8 rounded-none bg-safety-orange/15 flex items-center justify-center font-display text-safety-orange font-bold text-xs shrink-0 border border-safety-orange/30">
                  01
                </div>
                <div className="text-left text-xs">
                  <h4 className="font-bold text-white uppercase tracking-wide">Fabrikasi & Las Otomatis</h4>
                  <p className="text-slate-350 mt-1 leading-relaxed">Pembuatan presisi kawat jaring BRC berstandar simetris bebas las gosong.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#17191C]/60 p-3.5 rounded-none border border-white/10 hover:border-safety-orange transition-colors">
                <div className="w-8 h-8 rounded-none bg-safety-orange/15 flex items-center justify-center font-display text-safety-orange font-bold text-xs shrink-0 border border-safety-orange/30">
                  02
                </div>
                <div className="text-left text-xs">
                  <h4 className="font-bold text-white uppercase tracking-wide">Hot Dip Galvanizing Pool</h4>
                  <p className="text-slate-350 mt-1 leading-relaxed">Pencelupan Senge murni panas 455°C untuk perlindungan karat ekstrem puluhan tahun.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#17191C]/60 p-3.5 rounded-none border border-white/10 hover:border-safety-orange transition-colors">
                <div className="w-8 h-8 rounded-none bg-safety-orange/15 flex items-center justify-center font-display text-safety-orange font-bold text-xs shrink-0 border border-safety-orange/30">
                  03
                </div>
                <div className="text-left text-xs">
                  <h4 className="font-bold text-white uppercase tracking-wide">Quality Inspection (QC)</h4>
                  <p className="text-slate-350 mt-1 leading-relaxed">Pengujian mekanis luluh beban tarik, mikron tebal lapisan seng, dan packing palet.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-[#17191C]/60 p-3.5 rounded-none border border-white/10 hover:border-safety-orange transition-colors">
                <div className="w-8 h-8 rounded-none bg-safety-orange/15 flex items-center justify-center font-display text-safety-orange font-bold text-xs shrink-0 border border-safety-orange/30">
                  04
                </div>
                <div className="text-left text-xs">
                  <h4 className="font-bold text-white uppercase tracking-wide">Inland & Sea Forwarding</h4>
                  <p className="text-slate-350 mt-1 leading-relaxed font-light">Ekspedisi kargo kontainer (FCL/LCL) andalan melintasi lintas pulau luar Jawa.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 text-[10px] text-gray-500 font-mono text-center flex items-center justify-center gap-1.5">
              <MapPin className="w-3 h-3 text-red-500" />
              Waru, Sidoarjo - Jatim Depo Cargo Hub
            </div>
          </div>
        </div>

      </section>

      {/* Trust Pillars section Grid */}
      <section className="bg-industrial-black py-16 border-t border-b border-steel-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono text-safety-orange uppercase tracking-widest block font-bold">5 PILAR UTAMA KEPERCAYAAN BSM</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 uppercase">
              Keunggulan Mutlak Partner B2B Anda
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {pillars.map((pil, idx) => {
              const IconComponent = pil.icon;
              return (
                <div key={idx} className="p-5 rounded-none bg-slate-950/40 border border-white/10 flex flex-col gap-4 text-left hover:border-safety-orange transition-colors">
                  <div className="p-2.5 rounded-none bg-safety-orange/15 w-fit">
                    <IconComponent className="w-5 h-5 text-safety-orange" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xs text-white leading-snug uppercase">
                      {pil.title}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-sans mt-2 leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Milestones Timeline */}
      <section className="py-16 max-w-5xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono text-safety-orange uppercase tracking-widest block font-bold">REKAM JEJAK KONTRIBUSI</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2 uppercase">
            Sejarah Perkembangan CV. Bangun Sarana Makmur
          </h2>
        </div>

        <div className="relative border-l-2 border-steel-border pl-6 ml-4 md:ml-12 space-y-10 text-left">
          {milestones.map((mil, idx) => (
            <div key={idx} className="relative">
              {/* Pulsing year dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-safety-orange border-4 border-industrial-charcoal"></div>
              
              <div className="p-4 rounded-none bg-slate-950/40 border border-white/10 hover:border-safety-orange transition-all">
                <span className="font-mono text-xs font-bold text-safety-orange bg-safety-orange/10 px-2 py-0.5 rounded-none">
                  Tahun {mil.year}
                </span>
                <h3 className="font-display font-bold text-sm text-white mt-1.5 uppercase">
                  {mil.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans mt-1 leading-normal">
                  {mil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
