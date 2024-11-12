import React from "react";
import img12 from "../../public/img12.jpeg";

export default function Header() {
  return (
    <header class="bg-[#d4a373] py-4">
      <div class="container mx-auto flex justify-between items-center">
        <img src={img12} className=" w-[80px]" />
        {/* <h1 class="text-2xl font-bold text-pink-800">Glossy</h1> */}
        <nav class="space-x-6 text-black">
          <a href="#" class="hover:text-pink-900">
            Home
          </a>
          <a href="#" class="hover:text-pink-900">
            About
          </a>
          <a href="#" class="hover:text-pink-900">
            Services
          </a>
          <a href="#" class="hover:text-pink-900">
            Portfolio
          </a>
          <a href="#" class="hover:text-pink-900">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
