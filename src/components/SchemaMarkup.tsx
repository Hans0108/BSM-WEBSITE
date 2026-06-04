import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";

export default function SchemaMarkup() {
  const { products } = useProducts();

  useEffect(() => {
    // 1. LocalBusiness SEO Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "CV. Bangun Sarana Makmur",
      "alternateName": "BSM Building Materials Distributor",
      "description": "Distributor Utama Material Konstruksi Kelas Pro Nasional. Supplier Pagar BRC, Kawat Harmonika, Guardrail, ACP SEVEN, dan Atap UPVC Alderon kualitas SNI.",
      "url": "https://bangunsaranamakmur.co.id",
      "telephone": "+62-812-2244-4883",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Jenderal S. Parman No. 115, Waru",
        "addressLocality": "Sidoarjo",
        "addressRegion": "Jawa Timur",
        "postalCode": "61256",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "-7.348873",
        "longitude": "112.723781"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://www.instagram.com/bangunsaranamakmur/",
        "https://facebook.com/bangunsaranamakmur"
      ],
      "image": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
    };

    // 2. Active Product Catalog SEO Schemas
    const productCatalogSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Katalog Material Konstruksi CV. Bangun Sarana Makmur",
      "numberOfItems": products.length,
      "itemListElement": products.map((prod, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "Product",
          "name": prod.name,
          "image": prod.image,
          "description": prod.tagline + ". " + prod.description.substring(0, 150) + "...",
          "brand": {
            "@type": "Brand",
            "name": "BSM"
          },
          "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "IDR",
            "lowPrice": "15000",
            "highPrice": "2500000",
            "offerCount": "100",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock"
          }
        }
      }))
    };

    // Ingest into Document Head
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.id = "seo-localbusiness-schema";
    script1.text = JSON.stringify(localBusinessSchema);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.id = "seo-productcatalog-schema";
    script2.text = JSON.stringify(productCatalogSchema);

    // Remove existing if any
    const existingScript1 = document.getElementById("seo-localbusiness-schema");
    const existingScript2 = document.getElementById("seo-productcatalog-schema");
    if (existingScript1) existingScript1.remove();
    if (existingScript2) existingScript2.remove();

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      script1.remove();
      script2.remove();
    };
  }, [products]);

  return null; // Side-effect only component
}
