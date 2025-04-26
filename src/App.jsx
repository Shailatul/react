import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Branches from './components/Branches';
import Specialties from './components/Specialties';
import Footer from './components/Footer';

const App = () => {
  const branchesData = [
    { location: "Kota Medan - Berjaya Sisingamangaraja", phone: "6282260987799" },
    { location: "Kota Medan - J-City", phone: "6281397991091" },
    { location: "Kota Medan - Ringroad", phone: "6281260354335" },
    // ...tambahkan cabang lain
  ];

  const menuData = [
    { img: "https://th.bing.com/th/id/OIP.PN0YOTzaFKsK3mHFxDVjXwHaE8?w=254", name: "Kari Kambing" },
    { img: "https://th.bing.com/th/id/OIP.FQE7DCOv2jx8GGWAxuk1ugHaHa?w=152", name: "Daging Rendang" },
    { img: "https://th.bing.com/th/id/OIP.p7-H-kfiwmbJPuJb5PdhIwHaFi?w=257", name: "Telur Dadar" },
    { img: "https://th.bing.com/th/id/OIP.Xr0vBkYZUvU4xKjQtSqFQgHaE8?w=238", name: "Rendang Packing" },
    // ...tambahkan menu lain
  ];

  return (
    <div className="bg-[url('https://th.bing.com/th/id/OIP.Z-UlnXo0mRi11aVmDIzBqAHaEo?w=305&h=190')] bg-cover bg-center bg-no-repeat min-h-screen">
      <Navbar />
      <Header title="Menu" subtitle="HOME > MENU" />
      <About />
      <Services />
      <Branches branches={branchesData} />
      <Specialties menu={menuData} />
      <Footer />
    </div>
  )
}

export default App;