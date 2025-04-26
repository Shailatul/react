import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        <div>
          <h2 className="text-lg font-bold">Restoran Garuda</h2>
          <p className="mt-2 text-gray-400">Restoran Garuda berdiri sejak 1976. Spesialis makanan Minang & Melayu.</p>
        </div>
        <div>
          <h2 className="text-lg font-bold">Open Hours</h2>
          <ul className="mt-2 text-gray-400">
            <li>Senin - Minggu: 9:00 - 20:00</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Newsletter</h2>
          <input type="email" placeholder="Enter email" className="w-full mt-2 p-2 bg-gray-800 text-white rounded-md" />
          <button className="w-full mt-2 p-2 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500">Subscribe</button>
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mt-10">©2025 Restoran Garuda - All rights reserved.</p>
    </footer>
  )
}

export default Footer;