import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/Card';


function App() {
  const [count, setCount] = useState(1)
  const [count1,setCount1] = useState (5)
  const [result, setResult] = useState(0)
  const [name, setName] = useState ('Shaila');
  const [message, setMessage] = useState()
  const [umur, setUmur] = useState ()
  const [pesan, setPesan] = useState ()
  const [name1, setName1] = useState ()
  const [price, setPrice] = useState ()
  const [description, setDescription] = useState()

  const handleClick = () => {
    setCount(count+1)
  };
  const handleClick1 = () => {
    setCount1 (Math.max(count1-1, 0));
  };
  const handleInput = (event) => {
    setName (event.target.value)
  };

  const handleInput1 = () => {
    setResult(count * count1)
  };

  const toggleName =  () => {
    setName((prevName) => (prevName === 'Shaila' ? 'Shee':
      'Shaila'
    ));
  };


  const handleMouseLeave = () =>  {
    setMessage("Kursor telah meninggalkan kotak");
  };

  const handleMouseEnter = () => {
    setMessage("Kursor berada di dalam kotak");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const umurValue = parseInt(umur);
    if (umurValue < 18) {
      setPesan ("Kamu belum cukup umur");
    } else {
      setPesan ("Selamat Datang!");
    }
  };

  const handleSubmit1 = (event) => {
    event.preventDefault();
  };
 
  

  return (
    <>
    <h1>Hello, {name ? name : 'Guest'}</h1>
    <button onClick = {handleClick} >Diklik {count * 2} </button>
    <button onClick = {handleClick1} > Diklik {count1}</button>
    <h1> Hello, {name}</h1>
    <button onClick = {() => toggleName} > Change Name</button>
    <img
    src= {reactLogo}
    alt = 'React Logo'
    widhth = "200"
    height = " 200"
    ></img>
    <div>
      <input Type = "text" placeholder='Ketik Nama Anda' value={name} onChange={handleInput}/> </div>
      <div><input type='number' value={count} onChange={(e) => setCount(parseInt(e.target.value))} placeholder='Masukkan Angka Pertama'/>
      <input type='number' value={count1} onChange={(e) => setCount1(parseInt(e.target.value))} placeholder='Masukkan Angka Kedua'/>
    <button onClick={handleInput1}>Kalikan</button>
    <p> Hasil: {result}</p> 
    </div>
    <div
        style={{
          width: "300px",
          height: "158px",
          backgroundColor: "gray",
          border: "2px dashed #999",
          textAlign: "center",
          lineHeight: "150px",
          marginBottom: "10px",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Arahkan Kursor kesini
      </div>
      <p>{message}</p>

      <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={umur}
          onChange={(e) => setUmur(e.target.value)}
          placeholder="Masukkan umur"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{pesan}</p>
    </div>

    <div>
      <form onSubmit={handleSubmit1}>
        <input
        type='text'
        value={name1}
        onChange={(e) => setName1 (e.target.value)} placeholder='Nama Produk'/>
        <input
        type='number'
        value={price}
        onChange={(e) => setPrice (e.target.value)} placeholder='Harga Produk'/>
        <input
        type='text'
        value={description}
        onChange={(e) => setDescription (e.target.value)} placeholder='Deskripsi Produk'/>
        <button type='submit'>Submit</button>
      </form>
      <ProductCard name = {name1} price = {price} description={description}/>
    </div>
    </>
  );
}
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
 

export default App
