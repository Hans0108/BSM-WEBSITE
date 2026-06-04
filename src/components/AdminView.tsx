import React, { useState } from "react";
import { useProducts } from "../context/ProductContext";
import { Trash2, Plus, ShieldCheck, Tag, Edit2, X } from "lucide-react";
import { Product } from "../data/products";
import CompanyLogo from "./CompanyLogo";

export default function AdminView() {
  const { products, categories, addProduct, deleteProduct, updateProduct } = useProducts();
  
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "core",
    description: "",
    tagline: "",
    image: "",
    price: "",
    whatsappTemplate: ""
  });

  const [specs, setSpecs] = useState([{ label: "", value: "" }]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSpecChange = (index: number, field: 'label' | 'value', value: string) => {
    const newSpecs = [...specs];
    newSpecs[index][field] = value;
    setSpecs(newSpecs);
  };

  const addSpecField = () => {
    setSpecs([...specs, { label: "", value: "" }]);
  };

  const removeSpecField = (index: number) => {
    const newSpecs = specs.filter((_, i) => i !== index);
    setSpecs(newSpecs);
  };

  const startEditing = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      description: product.description,
      tagline: product.tagline,
      image: product.image,
      price: "",
      whatsappTemplate: product.whatsappTemplate || ""
    });
    setSpecs(product.specs && product.specs.length > 0 ? product.specs : [{ label: "", value: "" }]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEditing = () => {
    setEditingProduct(null);
    setFormData({
      name: "",
      category: "core",
      description: "",
      tagline: "",
      image: "",
      price: "",
      whatsappTemplate: ""
    });
    setSpecs([{ label: "", value: "" }]);
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.description) return;
    
    // Filter out empty specs
    const validSpecs = specs.filter(s => s.label.trim() !== "" && s.value.trim() !== "");

    const newProduct: Product = {
      id: editingProduct ? editingProduct.id : formData.name.toLowerCase().replace(/\s+/g, '-'),
      name: formData.name,
      category: formData.category,
      description: formData.description,
      tagline: formData.tagline || "Produk Baru",
      image: formData.image || "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      specs: validSpecs,
      features: editingProduct ? editingProduct.features : [],
      certifications: editingProduct ? editingProduct.certifications : [],
      whatsappTemplate: formData.whatsappTemplate || `Halo BSM, saya tertarik dengan ${formData.name}.`
    };

    if (editingProduct) {
      updateProduct(newProduct);
      setEditingProduct(null);
    } else {
      addProduct(newProduct);
    }
    
    // Reset form
    setFormData({
      name: "",
      category: "core",
      description: "",
      tagline: "",
      image: "",
      price: "",
      whatsappTemplate: ""
    });
    setSpecs([{ label: "", value: "" }]);
  };

  return (
    <div className="bg-industrial-charcoal min-h-screen pt-20 pb-12 px-4 md:px-8 text-left">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8 border-b border-white/10 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-safety-orange tracking-widest uppercase font-bold">MODE ADMINISTRATOR</span>
            <h1 className="text-2xl md:text-3xl font-display font-medium text-white tracking-tight uppercase mt-1">
              Manajemen Katalog Material
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              Tambah material baru atau hapus produk yang tidak lagi tersedia di gudang.
            </p>
          </div>
          <div className="shrink-0">
            <CompanyLogo size="sm" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Add Form */}
          <div className="lg:col-span-1">
            <div className="bg-slate-950/40 border border-white/10 p-5 rounded-none text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-md font-display font-bold text-white uppercase flex items-center gap-2">
                  {editingProduct ? (
                    <><Edit2 className="w-4 h-4 text-safety-orange" /> Edit Produk</>
                  ) : (
                    <><Plus className="w-4 h-4 text-safety-orange" /> Tambah Baru</>
                  )}
                </h3>
                {editingProduct && (
                  <button onClick={cancelEditing} className="text-slate-400 hover:text-white transition-colors" title="Batal Edit">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              <form onSubmit={handleAddProduct} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Nama Produk *</label>
                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                    placeholder="Nama produk..."
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Kategori *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                  >
                    {categories.filter(c => c.id !== "all").map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Tagline Singkat</label>
                  <input
                    name="tagline"
                    value={formData.tagline}
                    onChange={handleInputChange}
                    className="w-full bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                    placeholder="Deskripsi singkat/tagline..."
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">URL Gambar Image</label>
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                    placeholder="https://..."
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold">Deskripsi Lengkap *</label>
                  <textarea
                    required
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange h-24 resize-none"
                    placeholder="Uraian fitur/spesifikasi lengkap..."
                  />
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  <label className="text-[10px] font-mono text-gray-400 uppercase font-bold flex items-center justify-between">
                    Spesifikasi Produk
                    <button
                      type="button"
                      onClick={addSpecField}
                      className="text-safety-orange hover:text-white flex items-center gap-1 transiton-colors"
                    >
                      <Plus className="w-3 h-3" /> Tambah Spek
                    </button>
                  </label>
                  {specs.map((spec, index) => (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        value={spec.label}
                        onChange={(e) => handleSpecChange(index, "label", e.target.value)}
                        className="w-1/3 bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                        placeholder="Label (e.g., Berat)"
                      />
                      <input
                        value={spec.value}
                        onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                        className="flex-1 bg-[#17191C] border border-white/10 p-2 text-xs text-white focus:outline-none focus:border-safety-orange"
                        placeholder="Nilai (e.g., 50 kg)"
                      />
                      {specs.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeSpecField(index)}
                          className="shrink-0 p-2 text-red-400 hover:bg-red-500/10 border border-transparent rounded-none transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-safety-orange hover:bg-safety-orange-hover text-white font-display text-xs uppercase font-bold rounded-none transition-colors"
                >
                  {editingProduct ? "Simpan Perubahan" : "Simpan Produk"}
                </button>
              </form>
            </div>
          </div>

          {/* List of current products */}
          <div className="lg:col-span-2">
            <div className="space-y-3">
              {products.map(product => (
                <div key={product.id} className="bg-slate-950/40 border border-white/10 p-4 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center rounded-none group hover:border-safety-orange/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 shrink-0 bg-slate-900 border border-white/10 relative overflow-hidden">
                      <img src={product.image} className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all" alt="" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[9px] font-mono bg-slate-900 text-safety-orange border border-white/10 px-1.5 py-0.5 rounded-none uppercase">
                          {product.category}
                        </span>
                        <h4 className="text-sm font-display font-medium text-white">{product.name}</h4>
                      </div>
                      <p className="text-xs text-slate-400 line-clamp-1">{product.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 flex-col md:flex-row">
                    <button
                      onClick={() => startEditing(product)}
                      className="shrink-0 p-2 text-slate-400 hover:bg-safety-orange/10 border border-transparent hover:border-safety-orange/30 hover:text-safety-orange rounded-none transition-colors cursor-pointer self-end md:self-auto"
                      title="Edit Produk"
                    >
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm(`Hapus ${product.name}?`)) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="shrink-0 p-2 text-red-400 hover:bg-red-500/10 border border-transparent hover:border-red-500/30 rounded-none transition-colors cursor-pointer self-end md:self-auto"
                      title="Hapus Produk"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
