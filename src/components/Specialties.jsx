import React from 'react';

const SpecialtyCard = ({ img, name }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={img} alt={name} className="w-full h-40 object-cover rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{name}</h2>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Online Order</button>
    </div>
  )
};

const Specialties = ({ menu }) => {
  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        <span className="text-yellow-500 italic">Specialties</span> <br />
        Menu Kami
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {menu.map((item, index) => (
          <SpecialtyCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Specialties;