import React, { useState } from 'react'
import "./Home.css"
import fanta from "../../assets/fanta.jpg"
import coca from "../../assets/coca.jpg"
import cocaColaUnited from "../../assets/cocaColaUnited.png"
import { BsChevronDown } from "react-icons/bs"
import { BiWorld, BiDrink } from "react-icons/bi"
import { GiBubbles } from "react-icons/gi"

function Home() {
  let [display, setDisplay] = useState(false)

  const showContent = ()=>{
    setDisplay(true)
  }

  return (
    <>
         <div className="App">
        <div className="header">
          <div className="firstHeaderDiv">
            <div className='imgDiv'>
              <img src={fanta} alt="fanta-can" className='canImg' onClick={showContent}/>
            </div>
            <div className={display?'mainText':"mainTextBefore"}>
              <h1>Your All Time Favorite Beverage</h1>
              <p>Coca-Cola, where refreshment and joy are always within reach! Since its establishment in 1886, The Coca-Cola Company has become an iconic symbol of happiness and global success. With a rich history spanning over a century, Coca-Cola has captured the hearts and taste buds of people worldwide, evolving into a true household name.</p>
              <button className='button'>About Us</button>
              <button className='button'>Contact Now</button>
            </div>
          </div>
          <div className='downIcon'>
            <a href='#info'><BsChevronDown size={42}/></a>
          </div>
        </div>
      </div>

      <div className='info' id="info">
        <h2>World's Leading Beverage Seller</h2>
        <div className='companies'>
          <p>Coca Cola</p>
          <p>Minute Maid</p>
          <p>Fanta</p>
          <p>Sprite</p>
          <p>Pepsi</p>
        </div>
      </div>

      <div className='overview' id='overview'>
        <div>
          <div className='overviewDiv'>
            <BiWorld size={42}/>
            <div>
              <p className='overviewNumber'>135+</p>
              <p className='overviewHeading'>years of refreshing the world</p>
            </div>
          </div>

          <div className='overviewDiv'>
            <GiBubbles size={42}/>
              <div>
                <p className='overviewNumber'>200+</p>
                <p className='overviewHeading'>countries and territories offer our products</p>
              </div>
          </div>

          <div className='overviewDiv'>
            <BiDrink size={42}/>
              <div>
                <p className='overviewNumber'>200</p>
                <p className='overviewHeading'>brands worldwide</p>
              </div>
          </div>
        </div>
        <div>
          <img src={coca} alt='cocaCola' className='cocaImg'/>
        </div>
      </div>
      <div className='productTry'>
          <img src={cocaColaUnited} alt="coca-cola-company-beverages" />
          <div>
            <h2 className='productTryHeading'>Ready to dive into the world of Coca-Cola</h2>
            <p>Order Now or Become a Partner</p>
            <button className='productTryBtn'>Order Now</button>
            <button className='productTryBtn'>Become Partner</button>
          </div>
      </div>
    </>
  )
}

export default Home