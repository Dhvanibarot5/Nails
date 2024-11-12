import React from "react";
import img1 from "../../public/img1.jpeg";
import img2 from "../../public/img2.jpeg";
import img3 from "../../public/img3.jpeg";
import img6 from "../../public/img6.jpeg";
import img7 from "../../public/img7.jpeg";
import img8 from "../../public/img8.jpeg";
import img14 from "../../public/img14.jpeg";
import img13 from "../../public/img13.jpeg";

export default function FeaturedServices() {
  return (
    <section class="text-center py-16 bg-white">
      <h3 class="text-2xl font-bold text-black mb-9">Featured Nail Services</h3>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img1} alt="Manicures" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">Nail Art</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img3} alt="Nail Art" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">Nail Art</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img14} alt="Nail Art" class="w-[full] rounded-lg mb-4" />
          <p class="font-semibold text-black">Nail Art</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img13} alt="Nail Enhancements" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">Nail Art</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img6} alt="Nail Enhancements" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">PressOn Nails</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img7} alt="Nail Enhancements" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">PressOn Nails</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img8} alt="Nail Enhancements" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">PressOn Nails</p>
        </div>
        <div class="bg-[#d4a373] p-4 rounded-lg shadow-md">
          <img src={img2} alt="Nail Enhancements" class="w-full rounded-lg mb-4" />
          <p class="font-semibold text-black">PressOn Nails</p>
        </div>
      </div>
    </section>
  );
}
