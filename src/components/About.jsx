import React from 'react';

const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 px-5 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src="resto.jpg" alt="Restoran Garuda" className="w-full h-auto rounded-lg shadow-lg" />
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-900">
            <span className="text-yellow-500 italic">Welcome</span> <br />
            Restoran Garuda
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Restoran Garuda telah berdiri sejak 1976 hingga saat ini. Kami bergerak di bidang mengelola makanan Minang dan Melayu.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About;