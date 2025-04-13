import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [count1,setCount1] = useState (5)
  const [result, setResult] = useState(0)
  // const handleClick = () => {
  //   setCount(count+1)
  // }
  // const handleClick1 = () => {
  //   setCount1 (Math.max(count1-1, 0));
  // }
  // const handleInput = (event) => {
  //   setName (event.target.value)
  // }

  const handleInput = () => {
    setResult(count * count1)
  }
  // const [name, setName] = useState('Shaila')
  // const toggleName =  () => {
  //   setName((prevName) => (prevName === 'Shaila' ? 'Shee':
  //     'Shaila'
  //   ))
  // }

  return (
    <>
    {/* <h1>Hello, {name ? name : 'Guest'}</h1>
    <button onClick = {handleClick} >Diklik {count * 2} </button>
    <button onClick = {handleClick1} > Diklik {count1}</button>
    {/* <h1> Hello, {name}</h1> */}
    {/* <button onClick = {() => toggleName} > Change Name</button>
    <img
    src= {reactLogo}
    alt = 'React Logo'
    widhth = "200"
    height = " 200"
    ></img> */} 
    <div>
      {/* <input Type = "text" placeholder='Ketik Nama Anda' value={name} onChange={handleInput}/>
      <input Type = "text" placeholder='Ketik Nama Anda' value={count} onChange={handleInput}/> */}
      <input type='number' value={count} onChange={(e) => setCount(parseInt(e.target.value))} placeholder='Masukkan Angka Pertama'/>
      <input type='number' value={count1} onChange={(e) => setCount1(parseInt(e.target.value))} placeholder='Masukkan Angka Kedua'/>
    <button onClick={handleInput}>Kalikan</button>
    <p> Hasil: {result}</p>
    </div>
    </>
  )
}
  // const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
 //}

export default App
