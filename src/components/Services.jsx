import React from 'react';

const ServiceCard = ({ img, title, desc }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 text-center">
      <img src={img} alt={title} className="w-auto h-auto object-cover rounded-md mx-auto" />
      <h2 className="text-xl font-semibold mt-4 text-yellow-500">{title}</h2>
      <p className="text-gray-600 mt-2">{desc}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      img: "https://img.icons8.com/nolan/96/purchase-order.png",
      title: "Delivery Order",
      desc: "Layanan antar gratis hingga 10 KM",
    },
    {
      img: "https://img.icons8.com/nolan/96/wish-list.png",
      title: "Ala Carte",
      desc: "Minimal order Rp500,000.-",
    },
    {
      img: "https://img.icons8.com/nolan/96/natural-food.png",
      title: "Prasmanan",
      desc: "Untuk setiap acara spesial Anda.",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
        <span className="text-yellow-500 italic">Services</span> <br />
        Pemesanan Online
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
