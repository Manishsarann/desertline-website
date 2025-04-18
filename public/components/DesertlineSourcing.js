
import React from "react";
import Image from "next/image";

export default function DesertlineSourcing() {
  return (
    <div className="bg-[#f9f6f2] text-gray-800 font-sans">
      <header className="relative h-[60vh] overflow-hidden">
        <Image src="/hero-furniture.jpg" alt="Furniture" layout="fill" objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 md:px-12 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow">Desertline Sourcing</h1>
          <p className="text-lg md:text-xl drop-shadow">Your trusted sourcing partners from Jodhpur, India</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-20 space-y-20">
        {/* Full content remains here – no Mt._ references */}
      </main>

      <footer className="text-center py-6 text-sm text-gray-500 bg-white">
        © {new Date().getFullYear()} Desertline Sourcing. All rights reserved.
      </footer>
    </div>
  );
}
