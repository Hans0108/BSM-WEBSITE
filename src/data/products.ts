export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  tagline: string;
  image: string;
  specs: {
    label: string;
    value: string;
  }[];
  features: string[];
  certifications?: string[];
  whatsappTemplate: string;
}

export const CATEGORIES = [
  { id: "all", label: "Semua Produk" },
  { id: "brc", label: "Pagar BRC" },
  { id: "kawat-duri", label: "Kawat Duri & Silet" },
  { id: "guardrail", label: "Guardrail Tol" }
];

export const PRODUCTS: Product[] = [
  // --- PAGAR BRC ---
  {
    id: "pagar-brc-hdg",
    name: "Pagar BRC Hot Dip Galvanis (HDG) SNI",
    category: "brc",
    tagline: "Proteksi Karat Ekstrem Hingga 20 Tahun Tanpa Pengecatan Ulang",
    description: "Pagar BRC (British Reinforced Concrete) varian Hot Dip Galvanis diproduksi menggunakan baja berdaya tegangan tinggi (U-50) berstandar SNI. Seluruh permukaan dicelup ke dalam bak seng timah cair bersuhu 450°C, menghasilkan lapisan proteksi seng murni yang kebal dari oksidasi di area industri dengan tingkat pencemaran tinggi, perkebunan lembab, maupun wilayah pesisir pantai.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Lapisan", value: "Hot Dip Galvanized (HDG) standar BS 729 / ISO 1461" },
      { label: "Ketebalan Seng", value: "Lebih dari 60 - 80 Micron" },
      { label: "Pilihan Diameter Kawat", value: "Ø 5.0 mm, 5.5 mm, 6.0 mm, 7.0 mm, 8.0 mm" },
      { label: "Tinggi Standard", value: "90 cm, 120 cm, 150 cm, 175 cm, 190 cm, 240 cm" },
      { label: "Lebar Standard", value: "240 cm (Ujung segitiga ditekuk miring presisi)" },
      { label: "Kekuatan Tarik", value: "Baja U-50 (yield strength kelas tinggi)" }
    ],
    features: [
      "Bebas biaya perawatan tahunan dan tidak memerlukan cat eksterior tambahan",
      "Struktur anyaman jaring kaku berkat pengelasan resistansi tinggi otomatis",
      "Sempurna untuk perimeter gudang, stasiun pemancar, terminal kargo, dan pabrik",
      "Garansi ketahanan korosi ekstrem melintasi cuaca lembab khatulistiwa"
    ],
    certifications: ["SNI 07-0601-2006 (Pagar Tekuk)", "ISO 1461 Galvanizing Standard", "Tingkat Komponen Dalam Negeri (TKDN) > 40%"],
    whatsappTemplate: "Halo BSM, saya membutuhkan surat penawaran harga (RAB) resmi Pagar BRC Hot Dip Galvanis (HDG) SNI beserta tiang dan aksesorisnya."
  },
  {
    id: "pagar-brc-ep",
    name: "Pagar BRC Electroplating (EP) Presisi",
    category: "brc",
    tagline: "Solusi Pembatas Fleksibel Ekonomis dengan Tampilan Mengkilap",
    description: "Pagar BRC varian Electroplating (EP) dikoat menggunakan proses elektrokimia dingin yang melapiskan partikel zinc secara merata, rapi, dan mengkilap (chrome-like look). Memberikan proteksi karat dasar yang sangat hemat biaya untuk kebutuhan interior gudang, pagar pembatas perumahan, sekat instalasi mesin, serta area yang jauh dari polusi asam korosif.",
    image: "https://images.unsplash.com/photo-1549213715-0a90edd512da?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Lapisan", value: "Electroplating Galvanized (EP) permukaan mulus" },
      { label: "Ketebalan Seng", value: "Sekitar 10 - 15 Micron" },
      { label: "Pilihan Diameter Kawat", value: "Ø 5.0 mm, 5.5 mm, 6.0 mm, 7.0 mm" },
      { label: "Tinggi Standard", value: "90 cm, 120 cm, 150 cm, 175 cm, 190 cm" },
      { label: "Lebar Standard", value: "240 cm tetap" }
    ],
    features: [
      "Warna baja perak mengkilap estetis memberikan kesan bersih dan rapi",
      "Harga jauh lebih murah, sangat ideal untuk pengadaan perimeter volume masif",
      "Dapat dicat ulang dengan mudah apabila ingin menyesuaikan corporate color",
      "Pemasangan knockdown instan dengan klem capit besi dan mur baut"
    ],
    certifications: ["SNI Standard Mutu Kawat Baja", "Sertifikasi Produksi Mesin Otomatis"],
    whatsappTemplate: "Halo BSM, saya tertarik meminta penawaran harga khusus grosir untuk Pagar BRC Electroplating (EP) untuk proyek pembatas sekat gudang."
  },
  {
    id: "tiang-pintu-brc",
    name: "Tiang Pagar & Pintu BRC Custom (Swing/Slide)",
    category: "brc",
    tagline: "Fabrikasi Tiang Pancang Pipa dan Pintu Sorong/Ganda Terintegrasi",
    description: "Pemasangan pagar BRC yang aman membutuhkan tiang pancang pipa berkekuatan tinggi serta sistem pintu keluar-masuk yang terintegrasi. Kami memfabrikasi berbagai jenis tiang BRC (tiang lurus, tiang tekuk Y untuk kawat duri) beserta daun pintu BRC kustom dengan sistem geser (sliding gate) maupun ayun (swing gate) tunggal/ganda.",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Diameter Tiang", value: "Ø 1.5 inch, 2 inch, 2.5 inch, s/d 3 inch" },
      { label: "Tinggi Tiang", value: "120 cm s/d 300 cm (Menyesuaikan kedalaman tanam tanah/beton)" },
      { label: "Tipe Pintu BRC", value: "Pintu Swing Tunggal, Swing Ganda, Pintu Dorong Geser (Sliding)" },
      { label: "Komponen Pelengkap", value: "Tutup Tiang (Cup), U-Clip Klem, Mur & Baut Cuphead M8" },
      { label: "Finishing Lapisan", value: "Pilihan Hot Dip Galvanized (HDG) / Electroplating" }
    ],
    features: [
      "Pintu dilengkapi selongsong kunci putar dan kokoh dari aksi pembobolan",
      "U-clip tebal presisi mencegah getaran pagar akibat tiupan angin atau benturan",
      "Tiang tekuk Y siap dipasangkan kawat duri silet di atasnya untuk keamanan ganda",
      "Bisa order ukuran kustom menyesuaikan gambar kerja arsitektur proyek"
    ],
    whatsappTemplate: "Halo BSM, saya butuh penawaran kustom Pintu Geser BRC beserta Tiang Pancang Pipa HDG tinggi 150cm."
  },

  // --- KAWAT DURI ---
  {
    id: "kawat-duri-silet-razor",
    name: "Kawat Duri Silet (Razor Wire Concertina)",
    category: "kawat-duri",
    tagline: "Sistem Pengamanan Perimeter Level Militer Anti-Intrusi Fisik",
    description: "Kawat Duri Silet (Razor Wire) adalah penghalang perimeter dengan tingkat keamanan absolut. Menampilkan silet-silet tajam berbahan pelat galvanis tebal yang dikatupkan secara presisi mengelilingi inti kawat baja berkekuatan tarik tinggi. Desain Concertina spiral silang melingkar membuatnya mustahil ditembus atau dipotong dengan alat pemotong kawat biasa tanpa taktik khusus.",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Kode Profil Silet", value: "BTO-22, BTO-30, CBT-60, CBT-65 (Silet panjang ekstra tajam)" },
      { label: "Pilihan Diameter Coil", value: "45 cm, 50 cm, 60 cm, hingga 90 cm" },
      { label: "Material Pelat silet", value: "Hot Dip Galvanized / Stainless Steel berkualitas karat tinggi" },
      { label: "Panjang Tarikan Standard", value: "Membentang spiral ± 7 - 9 meter per roll" },
      { label: "Core Wire Tension", value: "High Carbon Steel (Kawat baja keras anti-gunting)" }
    ],
    features: [
      "Memberikan ancaman fisik maksimal terhadap pelaku penyusupan",
      "Pemasangan spiral kaku melingkar melengkung stabil di atas pagar BRC atau tembok beton",
      "Banyak digunakan di LP (Lembaga Pemasyarakatan), Pangkalan Udara, Kedutaan Besar, dan PLTU",
      "Lapisan Hot Dip tahan paparan asam sulfur kota industri dan hujan asam tropis"
    ],
    certifications: ["Kawat Baja Karbon Tinggi Standard Militer", "Uji Korosi Garam Lab Kimia"],
    whatsappTemplate: "Halo BSM, tolong kirimkan rincian harga Kawat Duri Silet tipe BTO-22 diameter 45cm sebanyak 70 roll untuk pagar pabrik kami."
  },
  {
    id: "kawat-duri-galvanis",
    name: "Kawat Duri Baja Galvanis SNI",
    category: "kawat-duri",
    tagline: "Kawat Duri Tradisional Klasik untuk Batas Lahan & Hektaran Kebun",
    description: "Kawat Duri (Barbed Wire) konvensional dengan lilitan duri 4 titik runcing yang dipilin kencang pada dua utas kawat utama. Diproduksi dari kawat baja galvanis anti-karat berdaya lentur luluh murni. Sangat ideal untuk perimeter proteksi perkebunan kelapa sawit, ladang peternakan, pagar penahan hewan liar, hingga pembatas lahan sengketa jangka panjang.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Baja Utama", value: "Kawat Baja Karbon Rendah (Low Carbon) berlapis seng murni" },
      { label: "Diameter Kawat Sumbu", value: "Ø 2.1 mm (Pilinan ganda)" },
      { label: "Diameter Kawat Duri", value: "Ø 2.1 mm" },
      { label: "Jarak Antar Duri", value: "7.5 cm s/d 10.0 cm (Seragam presisi mesin)" },
      { label: "Berat & Kemasan", value: "Tersedia roll isi 4 kg (± 25 meter) s/d 10 kg (± 100 meter)" }
    ],
    features: [
      "Ujung duri dipotong miring sangat runcing (needle sharp points)",
      "Pemasangan sangat mudah, cukup ditarik lurus dan diikat ke tiang kayu, beton, atau besi",
      "Harga sangat ekonomis per meternya, meminimalkan anggaran proyek pagar berhektar-hektar",
      "Lilitan kawat mengunci kuat dari risiko bergeser atau kendor"
    ],
    certifications: ["SNI 07-0040-2006 (Kawat Seng Mutu Tinggi)", "TKDN Kementerian Perindustrian"],
    whatsappTemplate: "Halo BSM, saya ingin memesan Kawat Duri Galvanis kemasan roll berat 10 kg sebanyak 120 roll untuk pembatas kebun."
  },

  // --- GUARDRAIL MULTIMEDIA ---
  {
    id: "guardrail-wbeam",
    name: "Guardrail Flex-Beam Pembatas Jalan Tol",
    category: "guardrail",
    tagline: "Sistem Peredam Benturan Kendaraan Berstandar Kementerian Perhubungan",
    description: "Guardrail (W-Beam Safety Barrier) berbentuk profil lembaran baja gelombang ganda yang dilapisi pelindung seng murni anti-karat Hot Dip Galvanized. Berfungsi meredam energi hantaman kendaraan lepas kendali di tikungan tajam, tol bebas hambatan, flyover, maupun lereng gunung terjal agar dapat diarahkan kembali sejajar rute jalan yang aman guna mencegah kecelakaan fatal berguling.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Spesifikasi Beam", value: "Panjang 4320 mm (efektif terpasang 4000 mm)" },
      { label: "Lebar Penampang", value: "312 mm berlekuk ganda" },
      { label: "Tebal Slab Steel", value: "2.7 mm standar AASHTO M-180" },
      { label: "Bahan Dasar Baja", value: "Baja Mutu Tinggi SS400 (yield strength > 240 MPa)" },
      { label: "Suhu Celupan Galvanis", value: "Hot Dip Galvanized standar ketahanan karat optimal kargo laut" }
    ],
    features: [
      "Menyerap gaya kinetik kendaraan secara lentur plastik tanpa merusak sasis total",
      "Telah lolos uji fatik, uji kelenturan, dan uji tabrak badan keselamatan jalan raya",
      "Finishing HDG mulus yang menolak karat dari polusi asam knalpot dan genangan air garam",
      "Paket pengiriman rapi diikat menggunakan kawat strap baja berat"
    ],
    certifications: ["Standar Perhubungan Darat RI (Dishub Approved)", "AASHTO M-180 (American Association of Highway Officials)", "TKDN Dirjen Industri Kementerian RI"],
    whatsappTemplate: "Halo BSM, kami kontraktor jalan raya sedang mengajukan penawaran pembatas tol Guardrail W-Beam lengkap sertifikat uji Dishub."
  },
  {
    id: "guardrail-accessories",
    name: "Tiang Post & Terminal End Section Guardrail",
    category: "guardrail",
    tagline: "Komponen Struktural Penyangga Sistem Pembatas Jalan Tol Lengkap",
    description: "Sistem pengaman guardrail tidak lengkap tanpa tiang penyangga (post), balok penghubung (blocking piece), reflektor mata kucing, serta kepala ujung melengkung (end section / terminal). Semua aksesori dirancang presisi dengan lubang baut payung oval untuk menjamin kekokohan sambungan ketika dihantam kendaraan bermassa besar seperti truk angkutan barang.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tebal Tiang Post", value: "4.5 mm, 5.0 mm, s/d 6.0 mm (Sesuai klasifikasi beban jalan tol)" },
      { label: "Tinggi Tiang Post", value: "1800 mm (Ditanam pancang pneumatik ke bahu jalan)" },
      { label: "Blocking Piece Penahan", value: "Bahan pelat baja pressed tebal standar beam" },
      { label: "End section Terminal", value: "Ketebalan 2.7 mm berbentuk sirip ikan melengkung tumpul" },
      { label: "Splice Bolt Baut Payung", value: "Ukuran M16 x 35, M16 x 45, M16 x 150 kekuatan tinggi Grade 8.8" }
    ],
    features: [
      "Ujung kepala sirip ikan (End Section) tumpul mencegah bahaya tusuk frontal ke mesin mobil",
      "Pemasangan knockdown cepat dengan lubang presisi yang dicap pabrik sebelum digalvanis",
      "Struktur tiang post kuat mencengkeram tanah lapisan aspal",
      "Dilengkapi stiker reflektor super-bright (Mata Kucing) memantulkan cahaya lampu dimalam hari"
    ],
    certifications: ["Dishub RI Verified Accessories", "AASHTO M-180 Standard Metalwork"],
    whatsappTemplate: "Halo BSM, tolong hitungkan harga Tiang Post Guardrail tebal 4.5mm beserta Blocking, Baut Payung, dan 2 Kepala End Section."
  }
];
