import React, { useState, useMemo } from "react";
import { Ruler, Truck, ShieldCheck, Scale, FileSpreadsheet, Send, HelpCircle, HardHat, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

type MaterialType = "brc" | "guardrail" | "harmonika";

export default function SpecsEstimator() {
  const [materialType, setMaterialType] = useState<MaterialType>("brc");

  // State BRC
  const [brcHeight, setBrcHeight] = useState<number>(120); // 90, 120, 150, 175, 190, 240
  const [brcWire, setBrcWire] = useState<number>(6.0); // 5.0, 5.5, 6.0, 7.0, 8.0
  const [brcQty, setBrcQty] = useState<number>(100);

  // State Guardrail
  const [roadLength, setRoadLength] = useState<number>(500); // meters
  const [postSpacing, setPostSpacing] = useState<number>(2); // 2 meter or 4 meter spacing
  const [postThickness, setPostThickness] = useState<number>(4.5); // 4.5mm or 6mm

  // State Kawat Harmonika
  const [harmonikaHeight, setHarmonikaHeight] = useState<number>(2.0); // 1 to 6 meters
  const [harmonikaWireChange, setHarmonikaWireChange] = useState<number>(2.7); // 1.6 to 4.0 mm
  const [harmonikaLength, setHarmonikaLength] = useState<number>(150); // meters

  // BRC calculation tables
  // Approximate weights per sheet of BRC fence based on Height (cm) & Wire Diameter (mm)
  const calculateBrcWeight = (height: number, wire: number): number => {
    // Estimasi rumus berat anyaman jaring BRC standar: lebar 240cm tetap
    const factorHeight = height / 100;
    const factorWire = Math.pow(wire / 6.0, 2);
    // Base weight for 120cm/6.0mm ~ 18.5kg
    return parseFloat((18.5 * factorHeight * factorWire).toFixed(1));
  };

  // Live calculated variables
  const calculations = useMemo(() => {
    if (materialType === "brc") {
      const weightPerSheet = calculateBrcWeight(brcHeight, brcWire);
      const totalWeightKg = weightPerSheet * brcQty;
      const totalWeightTons = totalWeightKg / 1000;
      
      // Accessories
      const postsRequired = brcQty + 1;
      const clampsRequired = postsRequired * (brcHeight >= 150 ? 4 : 3);
      const boltsRequired = clampsRequired;
      
      // Container calculation: 20ft loading FCL max weight ~20-22 Ton, or volume limit of ~350 sheets of BRC mixed with posts
      const containerPerc = Math.min(Math.round((brcQty / 350) * 100), 100);

      return {
        unitWeightText: `${weightPerSheet} kg per lembar`,
        totalWeightText: `${totalWeightKg.toLocaleString("id-ID")} kg (${totalWeightTons.toFixed(2)} Ton)`,
        accessoriesList: [
          { label: "Tiang Pipa BRC", value: `${postsRequired} batang (Ø 2" High-Ductility)` },
          { label: "U-Clip Clamp Baja", value: `${clampsRequired} unit (Pressed Galvanized)` },
          { label: "Baut & Mur Cup M8", value: `${boltsRequired} unit` }
        ],
        shippingFootprint: containerPerc,
        shipmentAdvice: containerPerc >= 90 ? "FCL Container Penuh (20ft kargo laut)" : containerPerc > 30 ? "Pemuatan LCL / Truk Fuso Flatbed regional" : "Armada Dobel Engkel / CDD Box harian",
        fabricationEstimate: brcQty > 300 ? "5-7 Hari Kerja (Fabrikasi massal)" : "2 HARI KERJA (Gudang Sidoarjo Depo)"
      };
    } else if (materialType === "guardrail") {
      // Guardrail AASHTO Standard: 1 beam = 4.32m (effective cover 4.0m)
      const beamsRequired = Math.ceil(roadLength / 4);
      const weightPerBeam = 83.5; // standard ~83.5kg including coating
      const postsRequired = Math.ceil(roadLength / postSpacing) + 1;
      
      // Post weight based on thickness: block weight roughly ~18.5kg
      const postWeight = postThickness === 4.5 ? 24.5 : 32.2;
      const endSectionsRequired = 2; // Start and End buffers
      const endSectionWeight = 10.2; // roughly ~10.2kg

      const totalWeightKg = (beamsRequired * weightPerBeam) + (postsRequired * postWeight) + (endSectionsRequired * endSectionWeight);
      const totalWeightTons = totalWeightKg / 1000;

      // Accessories
      const blockPieces = postsRequired;
      const boltsRequired = (beamsRequired * 9) + (postsRequired * 2); // joint connections

      // Container limit: standard guardrail set weight limit ~21 tons
      const containerPerc = Math.min(Math.round((totalWeightKg / 21000) * 100), 100);

      return {
        unitWeightText: `${weightPerBeam} kg per beam (4.32m)`,
        totalWeightText: `${Math.round(totalWeightKg).toLocaleString("id-ID")} kg (${totalWeightTons.toFixed(2)} Ton)`,
        accessoriesList: [
          { label: "Pagar Beam W-Plate", value: `${beamsRequired} keping` },
          { label: "Post Tiang Penyangga", value: `${postsRequired} batang (Tebal ${postThickness}mm)` },
          { label: "Blocking Piece Buffer", value: `${blockPieces} buah` },
          { label: "End Section Terminal", value: `2 unit (Bulat melengkung)` },
          { label: "Baut Payung Splice Bolt", value: `${Math.ceil(boltsRequired)} set` }
        ],
        shippingFootprint: containerPerc,
        shipmentAdvice: containerPerc >= 85 ? "FCL Container Penuh (20ft kargo laut luar pulau)" : containerPerc > 30 ? "Pasukan Truk Tronton / Intercooler darat" : "Truk Engkel / Colt Diesel Bak",
        fabricationEstimate: beamsRequired > 150 ? "4-6 Hari Kerja (Hot-Dip Galvanizing Pool)" : "READY STOCK (Siap Ikat)"
      };
    } else {
      // Kawat Harmonika: 1 kg roughly converts to ~1.2 to 2 square meters depending on wire thickness
      // Let's assume weight mapping per sq meter
      const sqMeters = harmonikaHeight * harmonikaLength;
      const weightPerSqM = (Math.pow(harmonikaWireChange, 1.8) * 0.45);
      const totalWeightKg = sqMeters * weightPerSqM;
      const totalWeightTons = totalWeightKg / 1000;

      const totalRolls = Math.ceil(harmonikaLength / 25); // 25m rolls

      // Container footprint
      const containerPerc = Math.min(Math.round((totalWeightKg / 18000) * 100), 100);

      return {
        unitWeightText: `${weightPerSqM.toFixed(2)} kg / m²`,
        totalWeightText: `${Math.round(totalWeightKg).toLocaleString("id-ID")} kg (${totalWeightTons.toFixed(2)} Ton)`,
        accessoriesList: [
          { label: "Luas Bidang Anyaman", value: `${sqMeters.toLocaleString("id-ID")} m²` },
          { label: "Kemasan Pengiriman", value: `${totalRolls} Roll (Panjang 25 meter per roll)` },
          { label: "Pilihan Jenis Anyaman", value: `${harmonikaWireChange < 2.5 ? "Kawat Ringan Ritel" : "Kawat Tarik Industri Berat"}` }
        ],
        shippingFootprint: containerPerc,
        shipmentAdvice: containerPerc >= 80 ? "FCL Container 20ft Pelayaran Laut" : containerPerc > 25 ? "LCL Cargo Laut / Truk Ekspedisi Fuso" : "Armada CDD Bak Terbuka Jatim",
        fabricationEstimate: totalRolls > 15 ? "3-5 Hari Kerja (Anyaman Mesin BSM)" : "1-2 HARI (Siap pasok Gudang)"
      };
    }
  }, [materialType, brcHeight, brcWire, brcQty, roadLength, postSpacing, postThickness, harmonikaHeight, harmonikaWireChange, harmonikaLength]);

  // Handle inquiry redirect
  const handleExportWA = () => {
    let messageText = "";
    if (materialType === "brc") {
      messageText = `Halo BSM Sidoarjo, saya ingin meminta surat penawaran resmi (RAB/RFQ) untuk Pagar BRC dengan rincian hasil kalkulasi estimator teknik:\n\n` +
        `• *Material:* Pagar BRC Galvanis SNI\n` +
        `• *Tinggi:* ${brcHeight} cm (Panjang 240 cm / lembar)\n` +
        `• *Diameter Kawat Core:* ${brcWire} mm\n` +
        `• *Kuantitas:* ${brcQty} lembar\n` +
        `• *Estimasi Berat Total:* ${calculations.totalWeightText}\n` +
        `• *Kebutuhan Tiang:* ${calculations.accessoriesList[0].value}\n` +
        `• *Clamp Penjepit:* ${calculations.accessoriesList[1].value}\n\n` +
        `Mohon info ketersediaan stok di depoh Waru dan penawaran harga terbaik.`;
    } else if (materialType === "guardrail") {
      messageText = `Halo BSM Sidoarjo, saya membutuhkan surat penawaran harga resmi (RAB/RFQ) untuk Guardrail Pembatas Tol dengan spesifikasi:\n\n` +
        `• *Material:* Guardrail Penahan Benturan SNI\n` +
        `• *Panjang Lintasan:* ${roadLength} meter\n` +
        `• *Post Spacing (Jarak):* ${postSpacing} meter\n` +
        `• *Tebal Post Tiang:* ${postThickness} mm\n` +
        `• *Estimasi Berat Total:* ${calculations.totalWeightText}\n` +
        `• *Komponen Pembatas:* ${calculations.accessoriesList[0].value}\n` +
        `• *Tiang Penyangga:* ${calculations.accessoriesList[1].value}\n\n` +
        `Mohon kirimkan surat penawaran resmi serta file gambar PDF / Mill Test ke nomor WhatsApp ini.`;
    } else {
      messageText = `Halo BSM Sidoarjo, saya ingin menanyakan harga custom kawat harmonika dengan rincian kalkulator website:\n\n` +
        `• *Material:* Kawat Harmonika PVC / Galvanis\n` +
        `• *Tinggi Anyaman:* ${harmonikaHeight} meter\n` +
        `• *Diameter Kawat Steel:* ${harmonikaWireChange} mm\n` +
        `• *Panjang Total:* ${harmonikaLength} meter\n` +
        `• *Volume Bidang:* ${calculations.accessoriesList[0].value}\n` +
        `• *Hasil Roll:* ${calculations.accessoriesList[1].value}\n` +
        `• *Estimasi Berat Total:* ${calculations.totalWeightText}\n\n` +
        `Mohon estimasi biaya produksi serta subsidi ongkos pengiriman Jawa Timur.`;
    }

    const phoneNumber = "6281222444883";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`, "_blank");
  };

  return (
    <div id="specs-estimator" className="relative p-6 md:p-8 bg-slate-950/80 border border-white/10 text-left overflow-hidden">
      
      {/* Blueprint background grid accent */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none"></div>
      
      {/* Segment tabs header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-5 mb-8 gap-4 relative z-10">
        <div>
          <span className="text-[10px] font-mono text-safety-orange tracking-widest block uppercase font-bold">
            🛠 TOOL PRIORITAS KONTRAKTOR / ESTIMATOR TEKNIK
          </span>
          <h3 className="font-display font-medium text-lg md:text-xl text-white uppercase mt-0.5">
            B2B Material Specs & Volume Calculator
          </h3>
        </div>
        
        <div className="flex bg-[#0F1113] p-1 border border-white/10 rounded-none self-start shrink-0">
          <button
            onClick={() => setMaterialType("brc")}
            className={`px-4 py-2 text-[10px] font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
              materialType === "brc"
                ? "bg-safety-orange text-black font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Pagar BRC
          </button>
          <button
            onClick={() => setMaterialType("guardrail")}
            className={`px-4 py-2 text-[10px] font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
              materialType === "guardrail"
                ? "bg-safety-orange text-black font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Guardrail Tol
          </button>
          <button
            onClick={() => setMaterialType("harmonika")}
            className={`px-4 py-2 text-[10px] font-display font-bold uppercase tracking-wider transition-all cursor-pointer ${
              materialType === "harmonika"
                ? "bg-safety-orange text-black font-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Harmonika PVC
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT COLUMN: INTERACTIVE INPUT SLIDERS & CONFIG OPTIONS (5/12 cols) */}
        <div className="lg:col-span-6 space-y-6">
          <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest border-l border-safety-orange pl-3 font-semibold">
            Konfigurasi Dimensi Fisik Kawat:
          </h4>

          <AnimatePresence mode="wait">
            {materialType === "brc" && (
              <motion.div
                key="brc-inputs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Height option */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Tinggi Pagar BRC (T):</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {brcHeight} cm
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[90, 120, 150, 175, 190, 240].map((h) => (
                      <button
                        key={h}
                        onClick={() => setBrcHeight(h)}
                        className={`flex-grow py-1.5 text-xs font-mono rounded cursor-pointer transition-colors border ${
                          brcHeight === h
                            ? "bg-safety-orange/15 border-safety-orange text-white"
                            : "bg-slate-900 border-white/5 text-gray-400 hover:border-gray-650 hover:text-white"
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Wire diameter */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Ketebalan Kawat Core:</span>
                    <span className="font-bold text-safety-orange bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      Ø {brcWire.toFixed(1)} mm
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[5.0, 5.5, 6.0, 7.0, 8.0].map((w) => (
                      <button
                        key={w}
                        onClick={() => setBrcWire(w)}
                        className={`flex-grow py-1.5 text-xs font-mono rounded cursor-pointer transition-colors border ${
                          brcWire === w
                            ? "bg-safety-orange/15 border-safety-orange text-white"
                            : "bg-slate-900 border-white/5 text-gray-400 hover:border-gray-650 hover:text-white"
                        }`}
                      >
                        {w.toFixed(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Input */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Kuantitas Kebutuhan Pagar:</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {brcQty} Lembar
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={brcQty}
                    onChange={(e) => setBrcQty(parseInt(e.target.value))}
                    className="w-full accent-safety-orange bg-slate-900 h-2 cursor-pointer rounded"
                  />
                  <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                    <span>10 LEMBAR (MIN)</span>
                    <span>500 LEMBAR</span>
                    <span>1000 LEMBAR (MAX)</span>
                  </div>
                </div>
              </motion.div>
            )}

            {materialType === "guardrail" && (
              <motion.div
                key="guardrail-inputs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Total Length */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Panjang Lintasan Pengaman:</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {roadLength} Meter
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="5000"
                    step="40"
                    value={roadLength}
                    onChange={(e) => setRoadLength(parseInt(e.target.value))}
                    className="w-full accent-safety-orange bg-slate-900 h-2 cursor-pointer rounded"
                  />
                  <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                    <span>40 M</span>
                    <span>2.500 M</span>
                    <span>5.000 Meter (MAX)</span>
                  </div>
                </div>

                {/* Spacing posts info */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Post Spacing (Jarak Tiang Pancang):</span>
                    <span className="font-bold text-safety-orange bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      Setiap {postSpacing} Meter
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPostSpacing(2)}
                      className={`py-3 text-xs font-display font-bold uppercase rounded cursor-pointer transition-colors border ${
                        postSpacing === 2
                          ? "bg-safety-orange/15 border-safety-orange text-white"
                          : "bg-slate-900 border-white/5 text-gray-400 hover:border-gray-650 hover:text-white"
                      }`}
                    >
                      Jarak 2.0 Meter (Kelas Utama)
                    </button>
                    <button
                      onClick={() => setPostSpacing(4)}
                      className={`py-3 text-xs font-display font-bold uppercase rounded cursor-pointer transition-colors border ${
                        postSpacing === 4
                          ? "bg-safety-orange/15 border-safety-orange text-white"
                          : "bg-slate-900 border-white/5 text-gray-400 hover:border-gray-650 hover:text-white"
                      }`}
                    >
                      Jarak 4.0 Meter (Standard)
                    </button>
                  </div>
                </div>

                {/* Thickness post */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Tebal Tiang Pancang Post (Baja Core):</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {postThickness.toFixed(1)} mm
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setPostThickness(4.5)}
                      className={`py-3 text-xs font-display font-bold uppercase rounded cursor-pointer transition-colors border ${
                        postThickness === 4.5
                          ? "bg-safety-orange/15 border-safety-orange text-white"
                          : "bg-slate-900 border-white/5 text-gray-400"
                      }`}
                    >
                      Tebal 4.5 mm (Standard)
                    </button>
                    <button
                      onClick={() => setPostThickness(6.0)}
                      className={`py-3 text-xs font-display font-bold uppercase rounded cursor-pointer transition-colors border ${
                        postThickness === 6.0
                          ? "bg-safety-orange/15 border-safety-orange text-white"
                          : "bg-slate-900 border-white/5 text-gray-400"
                      }`}
                    >
                      Tebal 6.0 mm (Beban Berat)
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {materialType === "harmonika" && (
              <motion.div
                key="harmonika-inputs"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                className="space-y-5"
              >
                {/* Total Length */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Panjang Total Pembatas Anyaman:</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {harmonikaLength} Meter
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="1000"
                    step="25"
                    value={harmonikaLength}
                    onChange={(e) => setHarmonikaLength(parseInt(e.target.value))}
                    className="w-full accent-safety-orange bg-slate-900 h-2 cursor-pointer rounded"
                  />
                  <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                    <span>25 M (1 Roll)</span>
                    <span>500 Meter</span>
                    <span>1.000 Meter (MAX)</span>
                  </div>
                </div>

                {/* Height option slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Tinggi Pagar Anyaman (H):</span>
                    <span className="font-bold text-white bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      {harmonikaHeight.toFixed(1)} Meter
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1.0"
                    max="6.0"
                    step="0.5"
                    value={harmonikaHeight}
                    onChange={(e) => setHarmonikaHeight(parseFloat(e.target.value))}
                    className="w-full accent-safety-orange bg-slate-900 h-2 cursor-pointer rounded"
                  />
                  <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                    <span>1.0 METER</span>
                    <span>3.5 METER</span>
                    <span>6.0 METER (MAX)</span>
                  </div>
                </div>

                {/* Wire thick */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-gray-400 uppercase">Diameter Kawat Baja Core:</span>
                    <span className="font-bold text-safety-orange bg-slate-900 border border-white/5 px-2.5 py-0.5 rounded font-mono">
                      Ø {harmonikaWireChange.toFixed(1)} mm
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1.6, 2.0, 2.7, 3.2, 4.0].map((dw) => (
                      <button
                        key={dw}
                        onClick={() => setHarmonikaWireChange(dw)}
                        className={`flex-grow py-1.5 text-xs font-mono rounded cursor-pointer transition-colors border ${
                          harmonikaWireChange === dw
                            ? "bg-safety-orange/15 border-safety-orange text-white"
                            : "bg-slate-900 border-white/5 text-gray-400 hover:border-gray-650 hover:text-white"
                        }`}
                      >
                        {dw.toFixed(1)} mm
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Quick specs notice banner */}
          <div className="bg-[#0F1113] p-4 border border-white/5 text-[11px] text-slate-400 leading-relaxed font-sans space-y-1.5">
            <p className="flex items-center gap-1.5 font-bold text-white text-xs uppercase tracking-wider font-display">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Sertifikat Penguji (Certified SNI)
            </p>
            <p>
              Semua estimasi didasarkan atas toleransi logam standar industri nasional kelayakan murni CV. Bangun Sarana Makmur. Mill test sheet asli untuk penawaran ini siap dilampirkan berbarengan pengadaan.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: LIVESTREAM STATS & SHIPPING CONTAINER GRAPHICS (7 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          
          <div className="border border-white/10 bg-black/60 p-5 rounded-none space-y-4 blueprint-grid-fine flex-grow">
            
            {/* Realtime telemetry header */}
            <div className="flex items-center justify-between border-b border-steel-border/50 pb-3">
              <span className="text-[9px] font-mono text-alert-yellow uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping"></span>
                LIVE QUANTITY METRICS OVERVIEW
              </span>
              <span className="text-[10px] font-mono text-gray-500">
                PROJ: CODE_B2B_EST
              </span>
            </div>

            {/* Calculations displays */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-slate-950/70 border border-white/5 text-left">
                <span className="text-[9px] font-mono text-gray-400 uppercase block">Kategori Material</span>
                <span className="font-display font-extrabold text-sm text-white block uppercase mt-0.5">
                  {materialType === "brc" ? "Pagar BRC HDG/EP" : materialType === "guardrail" ? "Guardrail W-Beam" : "Harmonika PVC/GALV"}
                </span>
              </div>
              <div className="p-3 bg-slate-950/70 border border-white/5 text-left">
                <span className="text-[9px] font-mono text-gray-400 uppercase block">ESTIMASI TONASE STEEL</span>
                <span className="font-display font-extrabold text-sm text-safety-orange block mt-0.5 font-mono">
                  {calculations.totalWeightText.split(" ")[0]} KG
                </span>
              </div>
            </div>

            {/* Accessories Checklist */}
            <div className="space-y-2 text-left">
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block font-bold">
                KULAKAN & AKSESORIS PRODUKSI PENYERTA:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {calculations.accessoriesList.map((acc, ai) => (
                  <div key={ai} className="p-2.5 bg-slate-950/45 border border-white/10 flex justify-between items-center">
                    <span className="text-gray-450 text-[11px]">{acc.label}</span>
                    <span className="text-white font-mono font-bold text-[11px]">{acc.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Volume space container visual bar */}
            <div className="space-y-1.5 text-left pt-2">
              <div className="flex justify-between items-center text-[10px] font-mono">
                <span className="text-gray-450 uppercase flex items-center gap-1">
                  <Truck className="w-3.5 h-3.5 text-safety-orange" />
                  Pemuatan Deck Kontainer Laut (20FT FCL LIMIT):
                </span>
                <span className="text-white font-bold">{calculations.shippingFootprint}% Kapasitas</span>
              </div>
              
              {/* Process Bar container */}
              <div className="w-full bg-slate-900 border border-white/5 p-1 h-6">
                <div 
                  className="h-full bg-gradient-to-r from-orange-600 to-safety-orange transition-all duration-500"
                  style={{ width: `${calculations.shippingFootprint}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                <span>Rekomendasi Rantai: <strong>{calculations.shipmentAdvice}</strong></span>
              </div>
            </div>

            {/* Production duration estimator details */}
            <div className="pt-2 flex justify-between items-center border-t border-steel-border/50 text-[10px] text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3 text-emerald-400 animate-spin" />
                Durasi Fabrikasi BSM Depo:
              </span>
              <span className="text-white font-bold bg-[#0F1113] px-2.5 py-1 uppercase">{calculations.fabricationEstimate}</span>
            </div>

          </div>

          {/* Core Action WA redirect output button */}
          <button
            onClick={handleExportWA}
            className="mt-4 w-full py-4 bg-safety-orange hover:bg-safety-orange-hover text-white font-display font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_5px_15px_rgba(249,115,22,0.15)]"
          >
            <Send className="w-4 h-4" />
            Ekspor Hasil Estimasi ke WhatsApp Sales ➔
          </button>

          <p className="text-[10px] text-gray-500 font-mono text-center mt-2">
            *Kalkulasi berat didasarkan atas toleransi baja canai dingin ±5% industri nasional.
          </p>

        </div>

      </div>

    </div>
  );
}
