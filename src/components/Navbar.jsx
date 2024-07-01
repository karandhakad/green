import React,{ useState }  from 'react'
import "../assets/style/navbar.css"
import logo from '../assets/images/logo.png'
import searchLogo from '../assets/images/search.png'
import globeIcon from '../assets/images/globe.png'
import accountIcon from '../assets/images/account.png'
import { Link } from 'react-router-dom'

function Navbar() {

    const [navBtn, setNavBtn] = useState(false)

  return (
    <>
      <div className="container">

        {/* Horizontal Navbar */}
        <div className="nav-horizontal-container">
            <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="menu">
                <ul>
                  <Link to='/about-us'>
                    <li>About Us</li>
                  </Link>
                  <Link to='/card-list'>
                      <li>Shop</li>
                    </Link>
                    <li>Cart</li>
                    <li>Offers</li>
                </ul>
            </div>
            <div className="search-bar">
                <img src={searchLogo} alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <div className="nav-globe">
                    <img src={globeIcon} alt="" />
            </div>
            <div className="account">
                <img src={accountIcon} alt="" />
                <p>My Account</p>
            </div>
         </div>

        {/* Vertical Navbar */}

        <div className="nav-vertical-container">
          <div className="logo">
            <Link to="/"><img src={logo} alt="" /></Link>
            </div>
          <div className="nav-btn">
            <i className="fa-solid fa-bars navBtnIcon" onClick={()=> setNavBtn(!navBtn)} ></i>
          </div>

        <div className={`nav-vertical-menuList ${navBtn ? 'hide-vertical-nav' : ''}`}>
          <div className="nav-vertical-menu">
                  <ul>
                    <Link to='/about-us'>
                      <li>About Us</li>
                    </Link>
                    <Link to='/card-list'>
                      <li>Shop</li>
                    </Link>
                      <li>Cart</li>
                      <li>Offers</li>
                  </ul>
            </div>
            <div className="search-bar">
                <img src={searchLogo} alt="" />
                <input type="text" placeholder='Search' />
            </div>
            <div className="nav-globe">
                    <img src={globeIcon} alt="" />
            </div>
            <div className="account">
                <img src={accountIcon} alt="" />
                <p>My Account</p>
            </div>
          </div>
        </div>
      </div>  

    </>
  )
}

export default Navbar