import SpecialtyRoofingTemplate from '@/components/SpecialtyRoofingTemplate';

export default function SlateRoofing() {
  return (
    <SpecialtyRoofingTemplate
      title="Slate Roofing"
      subtitle="Timeless Elegance & Unmatched Durability"
      description="Natural slate roofing combines centuries-old beauty with exceptional durability, offering a premium roofing solution that can last for generations. Our expert team specializes in both traditional and modern slate installation techniques, ensuring your roof is both beautiful and built to last."
      materialSpecs={[
        { label: "Material", value: "Natural Slate Stone" },
        { label: "Thickness", value: "1/4\" to 3/8\"" },
        { label: "Weight", value: "800-1,500 lbs/square" },
        { label: "Color Options", value: "Gray, Green, Purple, Red, Black" },
        { label: "Fire Rating", value: "Class A" },
        { label: "Wind Resistance", value: "Up to 110 mph" }
      ]}
      benefits={[
        "Enhances architectural beauty and property value",
        "Exceptionally long lifespan of 100+ years",
        "Completely fireproof and weather-resistant",
        "Environmentally friendly and recyclable",
        "Increases energy efficiency",
        "Zero maintenance requirements"
      ]}
      features={[
        "Individual slate pieces hand-selected for quality",
        "Copper or stainless steel fasteners for longevity",
        "Proper ventilation system integration",
        "Ice and water shield underlayment",
        "Custom color blending available",
        "Expert installation by certified craftsmen"
      ]}
      imageUrl="/images/specialty/slate-hero.jpg"
      durabilityRating={10}
      lifespanYears={100}
      maintenanceLevel="Low"
      idealFor={[
        "Historic home restorations",
        "Luxury residential properties",
        "Churches and institutional buildings",
        "High-end commercial properties",
        "Properties in harsh weather environments",
        "Buildings requiring premium curb appeal"
      ]}
      galleryImages={[
        "/images/specialty/slate-1.jpg",
        "/images/specialty/slate-2.jpg",
        "/images/specialty/slate-3.jpg",
        "/images/specialty/slate-4.jpg",
        "/images/specialty/slate-5.jpg",
        "/images/specialty/slate-6.jpg"
      ]}
    />
  );
}

