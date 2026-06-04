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
  { id: "all", label: "Semua Kategori" },
  { id: "core", label: "Core Priority (BRC, Harmonika, Guardrail)" },
  { id: "plastics", label: "Plastics & Acrylics" },
  { id: "roofing", label: "Modern Roofing" },
  { id: "cladding", label: "Cladding & Façade" },
  { id: "doors", label: "Doors & Profiles" },
  { id: "reinforcement", label: "Reinforcement (Bondek)" },
  { id: "security", label: "Security & Sealants" }
];

export const PRODUCTS: Product[] = [
  // --- Core Priority ---
  {
    id: "pagar-brc",
    name: "Pagar BRC Galvanis SNI",
    category: "core",
    tagline: "Sistem Pagar Pre-fabrikasi Siap Pasang Standar Proyek Nasional",
    description: "Pagar BRC (British Reinforced Concrete) dari CV. Bangun Sarana Makmur diproduksi dengan mesin otomatis akurasi tinggi menggunakan kawat baja berkekuatan tarik tinggi. Tersedia dalam dua varian pelapis karat terbaik: Hot Dip Galvanized (HDG) untuk proteksi ekstrem luar ruangan (daya tahan s/d 20 tahun) dan Electroplating (EP) untuk solusi ekonomis berkualitas.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Lapisan", value: "Hot Dip Galvanized (HDG) / Electroplating Galvanized (EPD)" },
      { label: "Pilihan Diameter Kawat", value: "5.0 mm, 5.5 mm, 6.0 mm, 7.0 mm, 8.0 mm" },
      { label: "Tinggi Standard", value: "90 cm, 120 cm, 150 cm, 175 cm, 190 cm, 240 cm" },
      { label: "Lebar Standard", value: "240 cm (Sistem Pagar & Tiang lengkap)" },
      { label: "Ketebalan HDG Zn", value: "Lebih dari 60 Micron (Mengikuti standar BS 729 / ISO 1461)" },
      { label: "Sertifikasi", value: "Sertifikat Uji Tarik SNI kawat baja u-50" }
    ],
    features: [
      "Ketahanan korosi mutlak di area pantai, pabrik, dan bandara",
      "Pemasangan knockdown instan dengan tiang pipa BRC, u-clip dan baut",
      "Kekakuan maksimal berkat tekukan segitiga presisi di ujung atas & bawah",
      "Bisa kustomisasi ukuran pintu (Swing Tunggal, Swing Ganda, Geser)"
    ],
    certifications: ["SNI 07-0601-2006", "Sertifikat Uji Lab HDG ISO 1461", "TKDN Terverifikasi"],
    whatsappTemplate: "Halo BSM, saya tertarik untuk meminta penawaran harga (RAB) produk Pagar BRC Galvanis SNI untuk kebutuhan proyek kami."
  },
  {
    id: "kawat-harmonika",
    name: "Kawat Harmonika PVC & Galvanis",
    category: "core",
    tagline: "Pagar Jala Fleksibel Berdaya Tahan Tinggi untuk Area Luas",
    description: "Kawat Harmonika (Chain Link Fence) adalah anyaman kawat galvanis berkualitas tinggi atau kawat berlapis PVC pelindung UV. Sangat ideal untuk pembatas lapangan olahraga, perkebunan, gudang, area militer, dan pagar pengaman perimeter bandara dengan pemasangan yang cepat dan fleksibel di area dengan kontur bergelombang.",
    image: "https://images.unsplash.com/photo-1549213715-0a90edd512da?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Pilihan Kawat", value: "Kawat Galvanis Seng Murni / Kawat Lapis PVC (Anti-UV Green/Blue)" },
      { label: "Diameter Kawat Core", value: "1.6 mm s/d 4.0 mm" },
      { label: "Lebar Lubang Mesh", value: "2.7 cm x 2.7 cm s/d 5.5 cm x 5.5 cm (Kustom)" },
      { label: "Tinggi Maksimum Roll", value: "Hingga 6 meter (Sesuai pesanan proyek)" },
      { label: "Kemasan", value: "Roll panjang 25 meter / 50 meter" }
    ],
    features: [
      "Fleksibel untuk semua medan dan mudah dipotong atau disambung ulang",
      "Lapisan PVC tangguh dari sinar ultraviolet ekstrem tanpa risiko retak",
      "Struktur anyaman kuat bebas las, tidak mudah koyak oleh benturan keras",
      "Hemat biaya untuk pengamanan wilayah hektaran"
    ],
    certifications: ["SNI Kawat Seng 07-0040-2006", "ISO 9001:2015 Approved Production"],
    whatsappTemplate: "Halo BSM, saya ingin konsultasi spesifikasi dan harga Kawat Harmonika Galvanis/PVC untuk instalasi lapangan olahraga/perimeter proyek."
  },
  {
    id: "guardrail",
    name: "Guardrail Pembatas Jalan Tol SNI",
    category: "core",
    tagline: "Pagar Pengaman Pipa Flex-Beam Jalan Raya Standar Dinas Perhubungan",
    description: "Guardrail (W-Beam) adalah pembatas jalan baja berprofil gelombang ganda yang dilapisi seng murni dengan proses Hot Dip Galvanizing secara presisi. Berfungsi sebagai peredam benturan kendaraan guna meminimalisir kecelakaan fatal di jalan bebas hambatan, pegunungan, dan jembatan. Semua komponen termasuk Post (tiang), Blocking, End Section, dan Reflector diproduksi sesuai spesifikasi Kementerian Perhubungan RI.",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Spesifikasi Beam", value: "4320 mm x 312 mm x ketebalan slab 2.7 mm" },
      { label: "Ketebalan Post Guardrail", value: "4.5 mm / 5.0 mm / 6.0 mm (Sesuai kelas beban)" },
      { label: "Standar Baja Core", value: "Baja Tarik Tinggi JIS G3101 SS400 / ASTM A36" },
      { label: "Metode Galvanis", value: "Hot Dip Galvanized standar AASHTO M-180" },
      { label: "Konektor & Aksesoris", value: "Baut Payung Splice Bolt Grade 8.8, Ring, Reflektor Merah/Kuning" }
    ],
    features: [
      "Meredam gaya kinetik hantaman mobil ekstrem dan mengarahkannya kembali ke jalur aman",
      "Sertifikasi kelayakan uji tabrakan jalan raya nasional",
      "Pemasangan presisi menggunakan tiang pancang pneumatik di tanah atau angkur beton",
      "Sertifikasi Mill Test laboratorium baja resmi terlampir"
    ],
    certifications: ["Standar Perhubungan Darat RI", "AASHTO M-180", "TKDN Dirjen Minerba & Industri"],
    whatsappTemplate: "Halo BSM, kami dari kontraktor infrastruktur membutuhkan quotation Guardrail Jalan Tol lengkap beserta Sertifikat Dishub."
  },

  // --- Plastics & Acrylics ---
  {
    id: "akrilik-lembaran",
    name: "Akrilik Lembaran (Acrylic Sheets) Premium",
    category: "plastics",
    tagline: "Alternatif Kaca Tahan Pecah Kejernihan Optik Tinggi untuk Display & Konstruksi",
    description: "Lembaran akrilik ekstrusi premium dengan transparansi superior melebihi kaca biasa, namun memiliki bobot setengahnya dan ketahanan benturan berlipat ganda. Sangat cocok digunakan untuk partisi kantor, plang reklame, pelindung mesin, lampu neon box, karya arsitektur, hingga sekat pengaman.",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Ketebalan Tersedia", value: "1.5 mm, 2 mm, 3 mm, 5 mm, 8 mm, 10 mm, 15 mm, 20 mm" },
      { label: "Ukuran Standar Sheet", value: "100 cm x 200 cm, 122 cm x 244 cm, 203 cm x 305 cm" },
      { label: "Variasi Warna", value: "Bening (Clear), Susu (Opal), Hitam, Warna Solid, Frosted (Es)" },
      { label: "Transparansi Cahaya", value: "92% Kejernihan Spektrum Optik (Tipe Cast Acrylic)" }
    ],
    features: [
      "Lebih aman dibandingkan kaca karena sifatnya yang resistan terhadap benturan hebat",
      "Mudah ditekuk menggunakan panas (bending) dan dapat dipotong presisi lewat Laser CNC",
      "Formulasi stabil terhadap perubahan cuaca ekstrem di Indonesia, bebas menguning",
      "Tahan terhadap zat kimia rumah tangga standar"
    ],
    whatsappTemplate: "Halo BSM, tolong kirimkan daftar harga grosir Akrilik Lembaran Bening ukuran 122x244 cm ketebalan 3mm dan 5mm."
  },
  {
    id: "polycarbonate-sheet",
    name: "Atap Polycarbonate TwinLite & SolarTuff",
    category: "plastics",
    tagline: "Atap Kanopi Transparan Premium Tahan Radiasi UV",
    description: "Lembaran Polycarbonate berongga (hollow) atau solid datar dengan proteksi co-extrusion UV tercanggih. Digunakan secara luas untuk atap kanopi carport, skylight komersial, rumah kaca, dan gazebo. Meredam panas matahari secara efektif sembari membiarkan cahaya alami menerangi ruangan di bawahnya.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Merk Tersedia", value: "Twinlite Gen 2, Solarlite, Solartuff Solid (Solarflat)" },
      { label: "Ketebalan Rongga", value: "5.0 mm, 6.0 mm, 10.0 mm, 16.0 mm" },
      { label: "Ketebalan Solid FLAT", value: "1.2 mm, 3.0 mm, 6.0 mm" },
      { label: "Fitur Proteksi", value: "Lapisan UV Blocking Shield ganda" },
      { label: "Pilihan Warna", value: "Clear, Bronze, Grey, Blue, Green, Silver Millenium" }
    ],
    features: [
      "Garansi 10 tahun karat, pecah, perubahan warna akibat paparan terik matahari",
      "Struktur sarang lebah/rongga udara mengurangi transmisi suara gemuruh hujan",
      "Kekuatan struktural 250 kali lipat dibanding kaca konvensional",
      "Mudah ditekuk dingin (cold-curved) di lokasi konstruksi tanpa retak"
    ],
    whatsappTemplate: "Halo BSM, saya butuh penawaran Kanopi Polycarbonate TwinLite 6mm untuk area carport perumahan."
  },

  // --- Modern Roofing ---
  {
    id: "atap-upvc-alderon",
    name: "Atap UPVC Alderon & Rooftop Duo-Wall",
    category: "roofing",
    tagline: "Solusi Atap Dingin dan Kedap Suara untuk Pabrik & Pergudangan",
    description: "Atap UPVC (Unplasticized Polyvinyl Chloride) berongga ganda kualitas tertinggi merk Alderon dan Rooftop. Memiliki performa termal legendaris yang memantulkan radiasi panas matahari hingga 75% serta meredam suara hujan secara signifikan. Sangat digemari untuk atap pabrik kimia, gudang logistik, kandang ternak modern, patrio, serta garasi hunian.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Ketebalan Total", value: "10 mm (Profil Twinwall Berongga)" },
      { label: "Lebar Efektif Pasang", value: "830 mm, 860 mm (Alderon ID 860 / ID 830)" },
      { label: "Panjang Standard", value: "6m, 8m, 10m, 12m (Bisa custom panjan sesuai kebutuhan)" },
      { label: "Ketahanan Asam/Alkali", value: "Sangat kebal dari uap korosif & bahan kimia keras" },
      { label: "Berat Per Meter", value: "± 4.6 kg / m²" }
    ],
    features: [
      "Tidak merambatkan api (Self-Extinguishing) apabila terjadi kebakaran",
      "Tidak membutuhkan insulasi peredam panas tambahan (hemat aluminium foil & glasswool)",
      "Kuat menahan beban hingga 540 kg per meter persegi, aman diinjak saat maintenance",
      "Tidak berkarat meski terpapar uap garam air laut dan uap asam belerang kimia"
    ],
    whatsappTemplate: "Halo BSM, tolong buatkan RAB untuk proyek Atap UPVC Alderon Twinwall panjang 6 meter sebanyak 400 lembar."
  },
  {
    id: "atap-spandek-logam",
    name: "Atap Spandek Zincalume Galvalum",
    category: "roofing",
    tagline: "Atap Metal Baja Ringan Anti-Karat Ekonomis Berdaya Amplitudo Lebar",
    description: "Lembaran atap gelombang metal transisi yang diproduksi dari kumparan baja canai dingin berkekuatan tinggi berlapis Galvalum (55% Aluminium, 43.5% Seng, 1.5% Silikon). Atap Spandek sangat populer untuk penutup rangka baja struktural proyek gudang industri, bangunan ruko, pagar pembatas proyek konstruksi, kanopi, dan dinding fasad modern.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tebal Pelat Baja", value: "0.25 mm, 0.30 mm, 0.35 mm, 0.40 mm, 0.45 mm, 0.50 mm" },
      { label: "Lebar Gelombang", value: "Lebar efektif 750 mm, 1000 mm" },
      { label: "Pilihan Model", value: "Polos (Sliver), Warna Coat (Soka), Spandek Lapis Pasir (Peredam Bising)" },
      { label: "Daya Tarik Baja", value: "G550 High Tensile Steel Grade" }
    ],
    features: [
      "Sangat ringan serta meminimalkan beban mati pemikul pada fondasi struktural",
      "Anti rayap, anti retak, dan tidak lapuk dimakan usia",
      "Tersedia tipe berpasir yang efektif meredam bising rintik hujan pada bangunan residensial",
      "Harga sangat bersaing dibanding alternatif penutup atap lainnya"
    ],
    whatsappTemplate: "Halo BSM, saya butuh penawaran Atap Spandek Galvalum tebal 0.35mm lebar 1 meter untuk penutup pagar pembatas proyek pembangunan."
  },

  // --- Cladding & Façade ---
  {
    id: "acp-seven",
    name: "ACP SEVEN Aluminium Composite Panel",
    category: "cladding",
    tagline: "Panel Fasad Komposit Elegan Standard Gedung Bertingkat Modern",
    description: "Aluminium Composite Panel (ACP) merk SEVEN adalah material fasad eksterior legendaris berupa lembaran sandwich polietilena non-toksik di antara dua lapisan aluminium berkekuatan tinggi. Dilapisi cat PVDF komersial berskala industri tinggi agar permukaan gedung tahan luntur pudar dari cuaca ekstrem perkotaaan selama puluhan tahun.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Coating Paint", value: "PVDF (Untuk Eksterior Luar) / PE (Untuk Interior Dalam)" },
      { label: "Dimensi Lembaran", value: "1220 mm x 2440 mm dan 1220 mm x 4880 mm (Standard)" },
      { label: "Tebal Total Panel", value: "4.0 mm standart konstruksi fasad" },
      { label: "Tebal Kulit Aluminium", value: "0.21 mm, 0.30 mm, 0.40 mm, 0.50 mm (Heavy Duty)" },
      { label: "Pilihan Jenis", value: "Alloy 1100 / Alloy 3003 (Sangat elastis untuk ditekuk)" },
      { label: "Opsi Tahan Api", value: "FR (Fire Rated) Core bersertifikat standar keamanan gedung tinggi" }
    ],
    features: [
      "Fasilitas pembersihan mandiri (self-cleaning) dari kotoran debu berkat coating hidrofilik",
      "Tahan karat, jamur, serta polutan atmosfer belerang perkotaan",
      "Pilihan tekstur tak terbatas: Glossy, Metallic, Wood (Kayu), Granite, Sparkle",
      "Dapat dilubangi CNC membentuk ornamen perforated artistik"
    ],
    whatsappTemplate: "Halo BSM, bisa minta spesifikasi teknis dan daftar harga lengkap ACP SEVEN PVDF tebal aluminium 0.30mm untuk proyek fasad kantor kami?"
  },

  // --- Doors & Profiles ---
  {
    id: "pintu-duma-wpc",
    name: "Pintu DUMA Wood Plastic Composite",
    category: "doors",
    tagline: "Pintu Premium Komposit Serat Kayu & Plastik Anti Rayap 100%",
    description: "Pintu DUMA diproduksi dengan teknologi ekstrusi canggih memadukan serat selulosa kayu alami dengan polimer plastik kualitas tinggi. Menghasilkan pintu dengan estetika visual serat kayu mewah berkelas, namun mewarisi keunggulan plastik mutlak: 100% tahan air, anti rayap selamanya, dan tidak memuai susut akibat kelembaban tinggi.",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Metode Finishing", value: "DUMA Polos (Unfinished), Cat Duco, Veneer Lapis Melamin, Laminated Sheet" },
      { label: "Lebar Pintu Standar", value: "72 cm, 82 cm, 92 cm (Kustom tinggi hingga 240 cm)" },
      { label: "Tebal Dinding Profil", value: "Core panel 3.5 mm - 4.5 mm dengan sekat penguat dalam" },
      { label: "Ketahanan Ekosistem", value: "Bebas jamur, rayap, serbuk bubuk kayu, kelembaban uap kamar mandi" }
    ],
    features: [
      "Hadir lengkap dengan kusen WPC DUMA presisi berpasangan",
      "Bisa digergaji, diserut, dibaut seperti layaknya kayu solid asli",
      "Pilihan sekat akustik internal terstruktur yang meredam bising pintu ruangan",
      "Material ramah lingkungan, 100% terdaur ulang (Green Label Product)"
    ],
    whatsappTemplate: "Halo BSM, saya butuh penawaran unit Pintu DUMA WPC tipe cat finishing cokelat kayu beserta kusennya untuk pintu kamar mandi dan kamar hotel."
  },

  // --- Reinforcement ---
  {
    id: "bondek-floor-deck",
    name: "Bondek / Floor Deck Galvanis Struktural",
    category: "reinforcement",
    tagline: "Bekisting Baja Cor Permanen Efisien Mengurangi Pemakaian Perancah Kayu",
    description: "Bondek (Floor Decking) adalah pelat baja bergelombang berlapis galvanis yang didesain secara khusus untuk menggantikan papan bekisting kayu konvensional pada dak lantai beton bertingkat gedung. Selain sebagai cetakan kokoh, gelombang bondek bertindak sebagai tulangan positif tarik yang bersatu dengan cor beton, sangat menghemat volume adukan semen dan besi.",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tebal Lapisan Baja", value: "0.65 mm, 0.70 mm, 0.75 mm, 1.00 mm (Baja Tarik Tinggi)" },
      { label: "Lebar Efektif Pasang", value: "1000 mm (1 meter lebar efektif)" },
      { label: "Bahan Dasar Pelat", value: "Hot Dip Galvanized Steel dengan lapisan seng Z22 (220 g/m²)" },
      { label: "Standar yield strength", value: "Minimal G550 mpa (Kekuatan ultra tinggi)" }
    ],
    features: [
      "Hemat adukan cor beton hingga 20-30% serta mengurangi pemakaian besi tulangan kedua",
      "Mempercepat waktu pengerjaan poyek konstruksi bertingkat secara signifikan",
      "Tampilan bawah dak rapi, bersih, dan modern industri (bisa dibiarkan terekspos tanpa plafon)",
      "Meringankan total beban berat bangunan karena efisiensi rasio beton"
    ],
    whatsappTemplate: "Halo BSM, saya ingin memesan Bondek Galvanis tebal 0.75mm lebar 1m dengan rincian ukuran panjang area proyek cor dak ruko kami."
  },

  // --- Security & Sealants ---
  {
    id: "kawat-duri-silet",
    name: "Kawat Duri Silet (Razor Wire) & Kawat duri SNI",
    category: "security",
    tagline: "Sistem Pengamanan Perimeter Maksimum Anti Intrusor Fisik",
    description: "Kawat Duri Silet (Razor Wire Concertina) dan kawat duri konvensional berkualitas militer yang didesain khusus untuk pertahanan perimeter keamanan tinggi. Menggunakan silet tajam berbahan pelat galvanis antikarat yang didekapkan pada kawat inti baja berkekuatan luluh ekstrim, sehingga mustahil diterobos atau dipotong tanpa peralatan khusus.",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&q=80&w=800",
    specs: [
      { label: "Tipe Kawat Duri Silet", value: "BTO-22, BTO-30, CBT-60, CBT-65 (Double Concertina Coil)" },
      { label: "Diameter Kumparan", value: "45 cm, 50 cm, 60 cm, 90 cm" },
      { label: "Daya Rentang Per Roll", value: "Membentang sejauh 7 meter s/d 9 meter per roll spiral" },
      { label: "Bahan Dasar Duri", value: "Pelat Baja Karbon Tinggi Hot Dip Galvanized / Stainless Steel AISI 304" }
    ],
    features: [
      "Pemasang spiral bersilang menjamin kerapatan silet tanpa celah penyusupan",
      "Dipasang di atas Pagar BRC, tembok beton perimeter, pagar bandara, pangkalan militer",
      "Silet sangat runcing, kaku, dan tajam di kedua belah sisi yang merobek segala jenis kain",
      "Kawat core baja karbon tinggi mencegah pemotongan dengan tang kawat biasa"
    ],
    whatsappTemplate: "Halo BSM, tolong rincikan harga Kawat Duri Silet tipe BTO-22 diameter 45cm sebanyak 50 roll untuk pengamanan luar pagar pabrik."
  }
];
