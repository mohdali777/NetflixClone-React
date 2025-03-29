import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Titlecards from '../../components/Titlecards/titlecards'
import Footer from '../../components/Footer/footer'


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Discovering His ties to a secret anciant order, a young man living in modern 
            istanbul embrak on a quest to save the city from an imortal enemy
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <Titlecards/>
        </div>
      </div>
      <div className="more-cards">
      <Titlecards title={"BlockBuster Movies"}/>
      <Titlecards title={"Only On Netflix"}/>
      <Titlecards title={"Upcoming"}/>
      <Titlecards title={"Top pics For You"}/>
      </div>
      <Footer/>
      </div>
  )
}

export default Home
