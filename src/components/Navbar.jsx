import React from 'react';

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent z-10">
      <div className="text-white text-2xl font-bold">
        <img src="https://restorangaruda.com/images/logo.png" alt="Restaurant Garuda" width="200" height="300" />
      </div>
      <ul className="hidden md:flex space-x-6 text-white">
        <li><a href="/" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/tentangkami" className="hover:text-yellow-300">Tentang Kami</a></li>
        <li><a href="/menu" className="hover:text-yellow-300">Menu</a></li>
        <li><a href="#" className="hover:text-yellow-300">Delivery Order</a></li>
        <li><a href="#" className="hover:text-yellow-300">Ala Carte</a></li>
      </ul>
      <a href="/hubungikami" className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
        Hubungi Kami
      </a>
    </nav>
  )
}

export default Navbar;