import React from 'react';

const Header = ({ title, subtitle }) => {
  return (
    <header className="relative h-screen w-full">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-6xl font-extrabold">{title}</h1>
        <p className="text-lg mt-4">{subtitle}</p>
      </div>
    </header>
  )
}

export default Header;