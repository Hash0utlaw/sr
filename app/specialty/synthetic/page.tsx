import SpecialtyRoofingTemplate from '@/components/SpecialtyRoofingTemplate';

export default function SyntheticRoofing() {
  return (
    <SpecialtyRoofingTemplate
      title="Synthetic Roofing"
      subtitle="Advanced Technology Meets Traditional Aesthetics"
      description="Synthetic roofing materials represent the cutting edge of roofing technology, offering the authentic look of natural materials with enhanced durability and performance. Our synthetic options provide superior protection while maintaining the aesthetic appeal of traditional roofing materials."
      materialSpecs={[
        { label: "Material", value: "Engineered Polymer" },
        { label: "Weight", value: "200-350 lbs/square" },
        { label: "Styles", value: "Slate, Shake, Tile Look" },
        { label: "UV Protection", value: "Advanced Coating" },
        { label: "Fire Rating", value: "Class A" },
        { label: "Impact Rating", value: "Class 4" }
      ]}
      benefits={[
        "Authentic appearance of natural materials",
        "Significantly lighter than natural materials",
        "Enhanced impact and weather resistance",
        "Lower installation and maintenance costs",
        "Environmentally sustainable production",
        "Consistent color and appearance"
      ]}
      features={[
        "Advanced polymer composition",
        "Multiple width and exposure options",
        "Innovative interlocking system",
        "Enhanced UV protection",
        "Color-through material technology",
        "Lifetime warranty available"
      ]}
      imageUrl="/images/specialty/synthetic-hero.jpg"
      durabilityRating={9}
      lifespanYears={50}
      maintenanceLevel="Low"
      idealFor={[
        "Traditional style homes",
        "Historic renovations",
        "Weight-restricted structures",
        "High-wind areas",
        "Luxury properties",
        "Environmental conscious homeowners"
      ]}
      galleryImages={[
        "/images/specialty/synthetic-1.jpg",
        "/images/specialty/synthetic-2.jpg",
        "/images/specialty/synthetic-3.jpg",
        "/images/specialty/synthetic-4.jpg",
        "/images/specialty/synthetic-5.jpg",
        "/images/specialty/synthetic-6.jpg"
      ]}
    />
  );
}

