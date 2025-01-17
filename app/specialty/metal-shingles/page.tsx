import SpecialtyRoofingTemplate from '@/components/SpecialtyRoofingTemplate';

export default function MetalShinglesRoofing() {
  return (
    <SpecialtyRoofingTemplate
      title="Metal Shingles"
      subtitle="Modern Protection with Classic Appeal"
      description="Metal shingles combine the durability of metal roofing with the aesthetic appeal of traditional shingles. Our premium metal shingle systems offer superior protection against severe weather while providing the sophisticated look of slate, shake, or tile at a fraction of the weight."
      materialSpecs={[
        { label: "Material", value: "Steel or Aluminum" },
        { label: "Thickness", value: "26-28 Gauge" },
        { label: "Weight", value: "100-150 lbs/square" },
        { label: "Styles", value: "Slate, Shake, Tile Look" },
        { label: "Finish", value: "PVDF Coating" },
        { label: "Wind Rating", value: "120+ mph" }
      ]}
      benefits={[
        "Exceptional durability with 50+ year lifespan",
        "Superior energy efficiency with reflective coating",
        "100% recyclable and eco-friendly",
        "Resistant to fire, hail, and high winds",
        "Lightweight - ideal for any structure",
        "Minimal maintenance requirements"
      ]}
      features={[
        "Interlocking panel design for security",
        "Hidden fastener system",
        "Multiple style and color options",
        "Advanced snow guards available",
        "Premium underlayment system",
        "Complete ventilation integration"
      ]}
      imageUrl="/images/specialty/metal-shingles-hero.jpg"
      durabilityRating={9}
      lifespanYears={50}
      maintenanceLevel="Low"
      idealFor={[
        "Modern residential homes",
        "Historic property updates",
        "High wind/storm areas",
        "Energy-conscious homeowners",
        "Properties with strict HOA requirements",
        "Light-frame structures"
      ]}
      galleryImages={[
        "/images/specialty/metal-shingles-1.jpg",
        "/images/specialty/metal-shingles-2.jpg",
        "/images/specialty/metal-shingles-3.jpg",
        "/images/specialty/metal-shingles-4.jpg",
        "/images/specialty/metal-shingles-5.jpg",
        "/images/specialty/metal-shingles-6.jpg"
      ]}
    />
  );
}

