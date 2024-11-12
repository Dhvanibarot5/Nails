import React from "react";

export default function PricingSection() {
  return (
    <section class="text-center py-16 bg-[#d4a373] ">
      <h3 class="text-2xl font-bold text-black mb-4">Pricing</h3>
      <p class="text-[#8a4f26] mb-8">
        We believe that your perfect nails are the result of continuous search for excellence, taste, and readiness to try any experience with nail
        design.
      </p>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h4 class="text-[#99582a] font-semibold pb-2">Extentions</h4>
          <ul class="text-gray-600 space-y-2">
            <li>Semi/Temporary extention</li>
            <li>Soft Gel extention</li>
            <li>Gel extention</li>
            <li>Gel Polish</li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h4 class="text-[#99582a] font-semibold pb-2">PressOn Nails</h4>
          <ul class="text-gray-600 space-y-2">
            <li>Starting rate - 399Rs.</li>
            <li>Charges increase according to art..</li>
            <li>Share your nail size with us!</li>
            <li className="font-bold text-lg">Contact us for more details...!</li>
          </ul>
        </div>
      </div>
      <button class="mt-8 px-6 py-2 bg-[#7f4f24] text-white rounded-lg">More Details</button>
    </section>
  );
}
