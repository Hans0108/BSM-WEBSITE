import { Mail, MapPin, Phone, MessageSquare, Award, Clock, ArrowUp } from "lucide-react";
import CompanyLogo from "./CompanyLogo";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-industrial-black border-t border-steel-border/80 text-left relative overflow-hidden">
      
      {/* Blueprint background lines for aesthetics */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-10 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-steel-border/75">
          
          {/* Col 1: BSM Corporate Intro (5/12 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="mb-2">
              <CompanyLogo size="md" />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-sm">
              Distributor, supplier resmi, dan mitra fabrikasi material proyek sipil nasional. Mensuplai prasarana jalan raya, pagar pengaman perimeter bandara, penutup atap gudang, serta komponen fasad estetis dengan garansi mutu SNI dan kesiapan pengiriman antar pulau.
            </p>

            <div className="pt-2 text-[10px] font-mono text-slate-500 space-y-1">
              <p>Legalitas B2B Resmi Terdaftar:</p>
              <p>📍 NPWP: 74.221.432.8-606.000</p>
              <p>💼 NIB: 9120311242312 (Izin Usaha Industri Baja)</p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2/12 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest border-l-2 border-safety-orange pl-2">
              PETA SITUS
            </h5>
            <ul className="space-y-2 text-xs font-display">
              <li>
                <button onClick={() => onNavigate("home")} className="text-slate-300 hover:text-safety-orange transition-colors cursor-pointer text-left">
                  Beranda Depan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("products")} className="text-slate-300 hover:text-safety-orange transition-colors cursor-pointer text-left">
                  Katalog Material
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="text-slate-300 hover:text-safety-orange transition-colors cursor-pointer text-left">
                  Tentang CV BSM
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("blog")} className="text-slate-300 hover:text-safety-orange transition-colors cursor-pointer text-left">
                  Edukasi & SEO Blog
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("contact")} className="text-slate-300 hover:text-safety-orange transition-colors cursor-pointer text-left">
                  Kontak Penawaran
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Revenue Categories (2/12 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h5 className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest border-l-2 border-safety-orange pl-2">
              PRODUK UTAMA
            </h5>
            <ul className="space-y-2 text-xs text-slate-300 font-sans">
              <li>Pagar BRC Galvanis</li>
              <li>Kawat Harmonika PVC</li>
              <li>Guardrail Pembatas Jalan</li>
              <li>ACP SEVEN PVDF</li>
              <li>Atap UPVC Alderon</li>
              <li>Bondek Floor Decking</li>
            </ul>
          </div>

          {/* Col 4: Contact Shortcuts (3/12 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h5 className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest border-l-2 border-safety-orange pl-2">
              KANTOR PEMASARAN
            </h5>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-safety-orange shrink-0 mt-0.5" />
                <span>Jl. Jenderal S. Parman No. 115, Waru, Sidoarjo, Jawa Timur 61256 (Depo & Logistik Utama Jatim)</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-4 h-4 text-safety-orange shrink-0" />
                <span>0812-2244-4883</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Mail className="w-4 h-4 text-safety-orange shrink-0" />
                <span>sales@bangunsaranamakmur.co.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-safety-orange shrink-0" />
                <span>Senin - Sabtu (08:00 - 17:00 WIB)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Social & Copyright Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-[11px] text-gray-400 font-sans">
              &copy; 1447 - {new Date().getFullYear()} CV. Bangun Sarana Makmur (BSM). All Rights Reserved.
            </p>
            <p className="text-[9px] text-gray-500 font-mono mt-1">
              Optimasi SEO Regional Jawa Timur & Indonesia Cargo Hub. Diotorisasi oleh Kantor Direksi Sidoarjo.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleBackToTop}
              className="px-4 py-2.5 bg-slate-950/40 hover:bg-slate-900 text-[10px] uppercase font-mono font-bold text-white rounded-none border border-white/10 flex items-center gap-1.5 transition-colors cursor-pointer hover:border-safety-orange"
            >
              Kembali ke Atas
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
