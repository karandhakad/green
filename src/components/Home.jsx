import React from 'react'
import "../assets/style/home.css"
import goArrow from '../assets/images/go-arrow.png'
import homeFrame from '../assets/images/home-frame.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
        <div className="container">
        <div className="titles">
              <h1 className='title'>Greenwave</h1>
              <h1 className='title'>Ecology</h1>
        </div>
        <div className="home-container">
            <div className="home-box1">
              <p className='para'>Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
              <div className="btn-box-bottom">
                <p className='para'>Lorem ipsum dolor sit amet consectetur. </p>
                <Link to='/card-list' className='home-go-btn'>
                Go Green<img src={goArrow} alt="" />
                </Link>
              </div>
            </div>
            <div className="home-box2">
              <img src={homeFrame} alt="" />
            </div>
            <div className="home-box3">
              <p className='para'>Lorem ipsum dolor sit amet consectetur. Mattis accumsan parturient pretium turpis. </p>
              <img src="" alt="" />
            </div>
        </div>
        </div>
    </>
  )
}

export default Home