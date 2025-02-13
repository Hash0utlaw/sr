import SpecialtyRoofingTemplate from '@/components/SpecialtyRoofingTemplate';

export default function TileRoofing() {
  return (
    <SpecialtyRoofingTemplate
      title="Tile Roofing"
      subtitle="Timeless Mediterranean Style & Superior Protection"
      description="Tile roofing combines stunning aesthetics with exceptional durability, offering a premium roofing solution that stands the test of time. Available in a variety of styles and colors, our tile roofing systems provide superior protection while adding distinctive character to your property."
      materialSpecs={[
        { label: "Material", value: "Clay or Concrete" },
        { label: "Weight", value: "600-1,200 lbs/square" },
        { label: "Styles", value: "Spanish, Mission, French" },
        { label: "Color Options", value: "Wide Range Available" },
        { label: "Fire Rating", value: "Class A" },
        { label: "Impact Rating", value: "Class 4" }
      ]}
      benefits={[
        "Exceptional durability with 50+ year lifespan",
        "Superior energy efficiency and insulation",
        "Resistant to fire, hail, and high winds",
        "Wide variety of styles and colors available",
        "Maintains color and appearance over time",
        "Environmentally friendly and recyclable"
      ]}
      features={[
        "Enhanced structural support system",
        "Premium underlayment protection",
        "Advanced ventilation integration",
        "Custom pattern and color options",
        "Proper flashing and drainage design",
        "Expert installation by certified teams"
      ]}
      imageUrl="/specialty/tile-hero.png"
      durabilityRating={9}
      lifespanYears={50}
      maintenanceLevel="Low"
      idealFor={[
        "Mediterranean-style homes",
        "Spanish Colonial architecture",
        "High-end residential properties",
        "Coastal environments",
        "Historic renovations",
        "Commercial buildings"
      ]}
      galleryImages={[
        "/specialty/tile-gallery-1.png",
        "/specialty/tile-gallery-2.png",
        "/specialty/tile-gallery-3.png",
        "/specialty/tile-gallery-4.png",
        "/specialty/tile-gallery-5.png",
        "/specialty/tile-gallery-6.png"
      ]}
    />
  );
}

