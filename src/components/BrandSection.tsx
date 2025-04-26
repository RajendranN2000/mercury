import React from "react";

const brands = [
  { name: "towa", src: "/assets/images/brand-logo/brand-img-1.png", alt: "Towa Logo" },
  { name: "stamps", src: "/assets/images/brand-logo/brand-img-2.png", alt: "Stamps Logo" },
  { name: "rigid", src: "/assets/images/brand-logo/brand-img-3.png", alt: "Rigid Logo" },
  { name: "manter", src: "/assets/images/brand-logo/brand-img-4.png", alt: "Manter Logo" },
  { name: "explo", src: "/assets/images/brand-logo/brand-img-5.png", alt: "Explo Logo" },
];

const BrandSection: React.FC = () => {
  return (
    <div className="text-white py-16 text-center">
      <p className="text-base text-[#3B3C45] mb-12">
        The platform fueling today’s high-growth revenue teams
      </p>
      <div className="flex justify-center items-center gap-12 mb-12">
        {brands.map((brand) => (
          <img
            key={brand.name}
            src={brand.src}
            alt={brand.alt}
            className="h-[112px] w-auto grayscale "
          />
        ))}
      </div>
      <button className="bg-white text-black px-6 py-3 border border-[#E8EAED] rounded-full text-sm font-medium">
        See Customer Reviews
      </button>
    </div>
  );
};

export default BrandSection;
