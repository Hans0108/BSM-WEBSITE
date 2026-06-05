import React from "react";
import { Star, ShieldCheck, MapPin, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import MagneticCard from "./MagneticCard";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  location: string;
  materialUsed: string;
  rating: number;
  quote: string;
  verified: boolean;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Ir. Achmad Fauzi",
    role: "Project Manager",
    company: "PT Waskita Karya (Persero) Tbk",
    project: "Guardrail Tol Trans Jawa",
    location: "Jawa Timur",
    materialUsed: "Guardrail W-Beam HDG",
    rating: 5,
    quote: "Kualitas fabrikasi sangat presisi. Seluruh lekukan koping pas dipalangkan dengan baut payung. Ketebalan hot-dip galvanis lolos audit kelaikan Dishub.",
    verified: true
  },
  {
    id: "test-2",
    name: "Rian Aditya",
    role: "Supervisor",
    company: "PT Wijaya Karya (Persero) Tbk",
    project: "Perimeter Fence Bandara Dhoho",
    location: "Kediri, Jatim",
    materialUsed: "Pagar BRC HDG Ø 8.0 mm",
    rating: 5,
    quote: "Las jaring kokoh, tidak mudah lepas saat ditarik. Aksesoris klem U-clip tebal mempermudah perakitan knockdown instan di area steril kargo.",
    verified: true
  },
  {
    id: "test-3",
    name: "Hj. Amalia, S.T.",
    role: "Direktur Logistik",
    company: "CV Borneo Sawit Sejahtera",
    project: "Pembatas Lahan Kelapa Sawit",
    location: "Kalimantan Selatan",
    materialUsed: "Kawat Duri SNI & Razor Wire",
    rating: 5,
    quote: "Duri baja sangat runcing dan anti kendor saat dibentangkan. Kargo dikemas sangat aman menggunakan dross besi rapat untuk pengapalan antarpulau.",
    verified: true
  }
];

export default function TestimonialSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
  };

  return (
    <section id="testimonials" className="relative py-14 bg-slate-950 text-left border-t border-b border-white/5 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Simple Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4 border-b border-white/10 pb-5">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-safety-orange tracking-wider uppercase font-bold">
              KLAIM MITRA KONTRAKTOR
            </span>
            <h2 className="text-xl md:text-2xl font-display font-medium text-white uppercase tracking-tight">
              Ditinjau oleh <span className="text-safety-orange">Para Profesional</span>
            </h2>
          </div>
          
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-400 bg-slate-900 border border-white/10 px-3 py-1.5 self-start">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="font-bold">100% VERIFIED PROJECTS</span>
          </div>
        </div>

        {/* Testimonials 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((test) => (
            <motion.div key={test.id} variants={itemVariants} className="h-full">
              <MagneticCard className="bg-[#0F1113]/90 border border-white/5 p-5 flex flex-col justify-between h-full relative group hover:border-safety-orange transition-all duration-300">
                
                {/* Upper block */}
                <div className="space-y-3">
                  <div className="flex gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-alert-yellow fill-alert-yellow" />
                    ))}
                  </div>

                  <p className="text-slate-200 text-xs md:text-[13px] font-sans italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                {/* Lower metadata block */}
                <div className="border-t border-white/5 pt-3 mt-4 space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <div className="space-y-0.5">
                      <span className="font-display font-bold text-xs text-white block">
                        {test.name}
                      </span>
                      <p className="text-[10px] text-gray-400 font-mono">
                        {test.role} at <strong className="text-slate-300">{test.company}</strong>
                      </p>
                    </div>

                    {test.verified && (
                      <span className="shrink-0 flex items-center gap-0.5 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1 py-0.5 text-[8px] font-mono uppercase font-bold">
                        <UserCheck className="w-2.5 h-2.5" />
                        <span>CLIENT</span>
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 pt-0.5">
                    <span className="truncate max-w-[150px]">📦 {test.materialUsed}</span>
                    <span className="flex items-center gap-0.5 text-gray-400 shrink-0">
                      <MapPin className="w-2.5 h-2.5 text-safety-orange" />
                      {test.location}
                    </span>
                  </div>
                </div>

              </MagneticCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Small Caption */}
        <p className="text-[9px] text-gray-500 font-mono text-center mt-6 uppercase tracking-wider">
          *Ulasan didukung arsip PO resmi CV. Bangun Sarana Makmur.
        </p>

      </div>
    </section>
  );
}
