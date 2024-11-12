import React from "react";

export default function HeroSection() {
  return (
    <section class="text-center py-16 bg-[#faedcd]">
      <h2 class="text-3xl font-bold text-[#d4a373] mb-4">Enjoy the Best Nail Art!</h2>
      <p class="text-[#99582a] mb-8">Make your nails perfect right now!</p>
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-[#aa813f] font-semibold">Location</h3>
          <p class="text-gray-700">
            903,Abhilasha Appt. besides coffee king
            <br />
            Adajan, Surat.
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-[#aa813f] font-semibold">Hours</h3>
          <p class="text-gray-700">
            Monday - Friday: 10am - 7pm
            <br />
            Saturday - Sunday: 10am - 6pm
          </p>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-md">
          <h3 class="text-[#aa813f] font-semibold">Contact</h3>
          <p class="text-gray-700">
            +91 7984632024
            <br />
            Vishwapatel308@gmail.com
          </p>
        </div>
      </div>
      <button class="mt-8 px-6 py-2 bg-[#7f4f24] text-white rounded-lg">Book an Appointment</button>
    </section>
  );
}
