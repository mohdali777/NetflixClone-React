import React, { useEffect, useRef } from 'react'
import './titlecard.css'
import cards_data from '../../assets/cards/Cards_data'

const Titlecards = ({title}) => {
  const cardref = useRef();
  useEffect(()=>{
cardref.current.addEventListener('wheel',handlwheel)
  },[])
  const handlwheel = (event)=>{
    event.preventDefault()
cardref.current.scrollLeft += event.deltaY
  }
  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardref}>
 {cards_data.map((card,index)=>{
  return <div className='card' key={index}>
    <img src={card.image} alt="" />
    <p>{card.name}</p>
  </div>
 })}
      </div>
    </div>
  )
}

export default Titlecards
