export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: "Tips Konstruksi" | "Panduan Material" | "Update Proyek";
  date: string;
  author: string;
  readTime: string;
  image: string;
  featured?: boolean;
  content: string[]; // paragraph blocks
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Panduan Memilih Pagar BRC: Perbedaan Utama Lapisan Hot Dip Galvanis (HDG) vs Electroplating (EP)",
    slug: "panduan-memilih-pagar-brc-hdg-vs-ep",
    excerpt: "Memahami perbedaan proteksi pelapisan sangat penting bagi kelayakan struktur baja Anda. Ketahui mana opsi terbaik untuk proyek perkotaan vs area pantai agar tidak salah investasi.",
    category: "Panduan Material",
    date: "26 Mei 2026",
    author: "Ir. Hermawan Susanto (B2B Lead Consultant BSM)",
    readTime: "7 menit baca",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
    featured: true,
    content: [
      "Pagar BRC (British Reinforced Concrete) merupakan salah satu produk penutup perimeter yang paling banyak digunakan di Indonesia, mulai dari rumah tinggal, pabrik, bandara, hingga kawasan militer. Namun, banyak kontraktor pemula maupun pemilik toko besi eceran yang kebingungan saat disuguhkan pilihan tipe finishing: Hot Dip Galvanizing (HDG) atau Electroplating Galvanizing (EP).",
      "Secara sederhana, perbedaannya terletak pada metode pelapisan seng (Zinc) dan ketebalannya, yang berujung langsung pada ketahanan korosi (karat) dan harga beli awal.",
      "1. Hot Dip Galvanizing (HDG): Menggunakan metode pencelupan kawat baja BRC langsung ke dalam kolam cairan timah seng panas bersuhu mendekati 450°C. Proses pencelupan ini memicu pembentukan ikatan metalurgi multi-layer antara seng dan besi baja core. Lapisan pelindung HDG biasanya mencapai ketebalan 60 - 80 micron. Karakteristik permukaannya sedikit kasar dan berwarna abu-abu buram (matte silver). Keuntungan tertingginya adalah garansi bebas karat hingga 15-20 tahun bahkan di lingkungan lembab, korosif tinggi, atau area pantai.",
      "2. Electroplating Galvanizing (EPD): Merupakan pelapisan seng dingin berbantuan arus listrik (elektrokimia). Kawat BRC direndam dalam bak kimia bermuatan positif-negatif yang mengendapkan partikel seng secara tipis dan merata di permukaan baja. Hasil pelapisannya sangat tipis (sekitar 10 - 15 micron), namun menghasilkan visual yang sangat cantik, halus, mengkilap (chrome-like). Kekurangannya adalah ketahanan karat yang relatif rendah (2 - 5 tahun saja sebelum mulai teroksidasi), sehingga hanya disarankan untuk partisi dalam ruangan (indoor) atau daerah beriklim kering jauh dari polusi industri.",
      "Dari segi biaya investasi, Pagar BRC HDG memang memiliki harga awal yang berkisar 20% - 30% lebih tinggi dibanding versi EP. Namun, dalam perhitungan RAB jangka panjang, BRC HDG jauh lebih hemat karena nihil biaya perawatan berkala, pengecatan ulang, maupun risiko keharusan mengganti pagar yang patah akibat karat dalam waktu singkat. Bagi para Project Manager (PM) proyek ketat dengan audit keselamatan kerja, memilih BRC berstandar SNI berlapis HDG adalah keharusan mutlak."
    ]
  },
  {
    id: "blog-2",
    title: "Mengenal Desain Guardrail Jalan Tol SNI: Komponen Mutlak dan Standar Keselamatan Direktorat Jenderal Darat",
    slug: "mengenal-komponen-guardrail-jalan-tol-sni",
    excerpt: "Dari tiang pancang, W-beam, hingga penyangga baut splice. Pelajari bagaimana sistem guardrail baja menyerap benturan ekstrem kendaraan di kecepatan tinggi.",
    category: "Tips Konstruksi",
    date: "22 Mei 2026",
    author: "Tim Engineer BSM",
    readTime: "5 menit baca",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
    content: [
      "Sebagai pengamat infrastruktur atau pelaksana lapangan, Anda pasti sering menjumpai pagar baja pembatas jalan di sisi kiri-kanan tol atau tikungan tajam bertebing. Nama teknisnya adalah Guardrail (W-Beam Highway Barrier). Di CV. Bangun Sarana Makmur, kami memproduksi ini secara fabrikasi penuh berstandar keselamatan nasional.",
      "Sistem peredaman kinetik ini dirancang sedemikian rupa bukan untuk 'menghentikan kendaraan secara kaku', melainkan untuk menyerap energi kejut secara elastis-plastis dan memandu roda kendaraan meluncur sejajar kembali ke aspal jalan agar tidak terperosok keluar badan jalan.",
      "Komponen penyusun sistem guardrail jalan yang mumpuni meliputi:",
      "- Guardrail Beam: Lempengan baja bergelombang (W-Profile) tebal 2.7 mm pemicu peredamanan utama.",
      "- Post (Tiang Penyangga): Pelat tiang baja tebal 5mm atau 6mm yang dipantakkan langsung ke bahu jalan tanah atau dinabolt ke cor jembatan.",
      "- Steel Block (Penyangga Jarak/Spacer): Menjaga jarak optimal antara balok beam dengan tiang agar roda truk tidak tersangkut tiang pancang saat hantaman menyamping.",
      "- Terminal End Section (Sleeve Melengkung): Ujung guardrail berbentuk sirip ikan melengkung yang tumpul untuk mencegah bahaya bagian tajam baja menusuk frontal mobil.",
      "Seluruh elemen baja ini wajib melalui proses galvanisasi Hot Dip standar AASHTO M-180 guna melawan terpaan hujan asam, asap gas buang knalpot industri, dan suhu aspal yang tinggi tanpa berkarat sedikit pun."
    ]
  },
  {
    id: "blog-3",
    title: "Mengapa Atap UPVC Berongga (Double Wall) Menjadi Standar Baru Pabrik Manufaktur Indonesia",
    slug: "mengapa-atap-upvc-double-wall-populer",
    excerpt: "Kelembaban tinggi, cuaca ekstrem, dan uap kimia menjadi musuh utama atap seng tradisional. Solusi inovatif atap dingin hemat energi dan bebas korosif pabrik modern.",
    category: "Panduan Material",
    date: "14 Mei 2026",
    author: "Ir. Gunawan Setiadi (Ahli Struktur Logam)",
    readTime: "6 menit baca",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    content: [
      "Pabrik-pabrik manufaktur, perkebunan kelapa sawit, dan pergudangan raksasa di Indonesia kini mulai beralih massal dari atap spandek logam konvensional ke atap UPVC berongga ganda (seperti Alderon atau Rooftop). Mengapa fenomena ini terjadi?",
      "Setidaknya ada tiga faktor utama yang memicu perubahan spesifikasi teknis dari para arsitek dan pemilik bisnis dalam memilih atap:",
      "1. Peredaman Suara Maksimal (Suara Hujan Redup Semesta): Atap logam akan menghasilkan suara bising luar biasa gaduh (hingga menghasilkan kepekakan 85-90 dB) ketika dihantam hujan lebat khatulistiwa. Ini sangat mengganggu koordinasi tim produksi di pabrik. Struktur berongga (hollow core) di atap UPVC menyerap gelombang suara dan bertindak seperti dinding isolasi akustik built-in.",
      "2. Temperatur Ruangan Lebih Sejuk Sehat: Atap UPVC tidak menghantarkan panas. Sebaliknya ia merefraksi sinar infrared matahari. Ruangan di bawah pabrik bisa lebih dingin 4 - 8 derajat Celcius tanpa perlu memasang AC berbiaya listrik jumbo atau kipas baling giga-watt.",
      "3. Anti Reaksi Kimia & Karat Korosi Sempurna: Untuk industri pengolahan pupuk, pabrik pelapisan logam, pengolahan ikan asin, atau gudang di bibir pantai, keasaman udara sangat korosif. Atap seng konvensional bisa bolong karatan dalam waktu tak sampai 2 tahun. UPVC, secara material kimiawi, kebal penuh terhadap serangan gas asam sulfat, kelembaban garam, dan noda semen."
    ]
  },
  {
    id: "blog-4",
    title: "Ekspansi Distribusi BSM ke Kalimantan Selatan dan Maluku Utara: Solusi Pengiriman Material Antar Pulau",
    slug: "ekspansi-distribusi-logistik-antar-pulau-bsm",
    excerpt: "Bagaimana CV. Bangun Sarana Makmur memastikan kemandirian logistik, keutuhan kargo, dan jadwal bongkar jangkar yang tepat waktu di luar pulau Jawa.",
    category: "Update Proyek",
    date: "05 Mei 2026",
    author: "Dian Saputra (Logistics Manager BSM)",
    readTime: "4 menit baca",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800",
    content: [
      "Mengirim ratusan ton Pagar BRC, tiang besi, lilitan kawat duri, dan lembaran kaca akrilik tebal ke pelosok luar pulau kerap kali menjadi mimpi buruk logistik bagi kontraktor utama. Hambatan kapal mogok, biaya kontainer bengkak ilegal, hingga kerusakan fisik barang saat transit sering merugikan margin profit.",
      "CV. Bangun Sarana Makmur (Group Depo Jawa Timur) telah membangun jaringan kerja sama dengan 12 vendor EMKL ekspedisi pelayaran andal yang melayani rute curah maupun peti kemas FCL (Full Container Load) ke seluruh pelabuhan utama Kalimantan, Sulawesi, Bali, NTT, NTB, Maluku, hingga Papua.",
      "Setiap pengemasan lilitan kawat harmonika dipalet menggunakan kayu kokoh bercap standar ekspor, sementara paket pipa guardrail diikat dengan steel band kaku guna meminimalisasi gesekan permukaan seng selama kontainer diombang-ambing di laut.",
      "Dengan jaminan asuransi kargo penuh dan surat jalan legalitas bermaterai, BSM memikul keyakinan bahwa material berkelas pro Anda akan tiba di site pelaksana dalam keadaan mulus tanpa cacat bengkok."
    ]
  }
];
