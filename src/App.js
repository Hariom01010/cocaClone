import './App.css';
import Navbar from "./components/Navbar"
import fanta from "./assets/fanta.jpg"
import { BsChevronDown } from "react-icons/bs"
import { BiWorld } from "react-icons/bi"

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      
        {/* Header Component of main page */}
        <div className="header">
          <div className="firstHeaderDiv">
            <div className='imgDiv'>
              <img src={fanta} alt="fanta-can" className='canImg'/>
            </div>
            <div className='mainText'>
              <h1>Your Favorite Orange Drink is back</h1>
            </div>
          </div>
          <div className='downIcon'>
            <BsChevronDown size={42}/>
          </div>
        </div>
      </div>

      <div className='info'>
        <h2>World's Leading Beverage Seller</h2>
        <div className='companies'>
          <p>Coca Cola</p>
          <p>Minute Maid</p>
          <p>Fanta</p>
          <p>Sprite</p>
          <p>Pepsi</p>
        </div>
      </div>

      <div>
        <div className='overview'>
          <BiWorld />
          <p>135+</p>
          <p>years of refreshing the world</p>
        </div>
        <div className='overview'>
        <BiWorld />
          <p>200+</p>
          <p>countries and territories offer our products</p>
        </div>
        <div className='overview'>
        <BiWorld />
          <p>200</p>
          <p>brands worldwide</p>
        </div>
      </div>
    </>
  );
}

export default App;
