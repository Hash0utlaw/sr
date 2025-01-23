import SpecialtyRoofingTemplate from '@/components/SpecialtyRoofingTemplate';

export default function CedarShakeRoofing() {
  return (
    <SpecialtyRoofingTemplate
      title="Cedar Shake Roofing"
      subtitle="Natural Beauty & Superior Insulation"
      description="Cedar shake roofing offers a unique combination of natural beauty and performance, providing your home with distinctive character and excellent weather protection. Our premium cedar shakes are carefully selected and installed by expert craftsmen to ensure lasting beauty and protection."
      materialSpecs={[
        { label: "Material", value: "Western Red Cedar" },
        { label: "Thickness", value: "1/2\" to 3/4\"" },
        { label: "Grade", value: "Premium & #1 Grade" },
        { label: "Treatment", value: "Fire-Resistant Available" },
        { label: "Warranty", value: "30-50 Years" },
        { label: "R-Value", value: "0.87 per inch" }
      ]}
      benefits={[
        "Natural insulation properties reduce energy costs",
        "Ages beautifully to a distinguished silver-gray",
        "Naturally resistant to insects and decay",
        "Excellent wind resistance up to 245 mph",
        "Enhances rustic and traditional architectural styles",
        "Environmentally sustainable roofing option"
      ]}
      features={[
        "Hand-split or machine-cut options available",
        "Premium underlayment system",
        "Proper ventilation integration",
        "Enhanced rain channels for superior drainage",
        "Treatment options for fire resistance",
        "Custom patterns and layouts available"
      ]}
      imageUrl="/specialty/cedar-gallery-1.png"
      durabilityRating={8}
      lifespanYears={30}
      maintenanceLevel="Medium"
      idealFor={[
        "Luxury homes",
        "Mountain retreats",
        "Coastal properties",
        "Historic renovations",
        "Craftsman-style homes",
        "High-end residential developments"
      ]}
      galleryImages={[
        "/specialty/cedar-gallery-1.png",
        "/specialty/cedar-gallery-2.png",
        "/specialty/cedar-gallery-3.png",
        "/specialty/cedar-gallery-4.png",
        "/specialty/cedar-gallery-5.png",
        "/specialty/cedar-gallery-6.png"
      ]}
    />
  );
}

