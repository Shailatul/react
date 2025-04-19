import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [message, setMessage] = useState();
const handleMouseLeave = () => {
    setMessage ("Kursor telah meninggalkan kotak");
  };
  const handleMouseEnter = () => {
    setMessage ("Kursor berada didalam kotak");
  };

  return(
    <div style={{padding: "20px"}}>
      <div
      style={{
        width:"300px",
        height: "158px",
        backgroundColor: "gray",
        border: "2px dashed #999",
        textAlign:"center",
        lineHeight:"150px",
        marginBottom:"10px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        Arahkan Kusor kesini
        </div>
        <p>message</p>
        </div>
  );
}

export default App;
