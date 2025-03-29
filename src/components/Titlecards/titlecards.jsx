import React, { useEffect, useRef, useState } from 'react'
import './titlecard.css'
import { Link } from 'react-router-dom';

const Titlecards = ({title,category}) => {
  const cardref = useRef();
  const [ResultAPi,SetApi] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NiNDZiZGVkMzdhODY1YTg4NjM5M2FjMzNkMzZmMiIsIm5iZiI6MTc0MzIyNDY1My41OCwic3ViIjoiNjdlNzdmNGRhM2Q4Y2M5MjhlNjdhY2Y2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Yc3PTSg52-jliu0BbNhkPncAldgIX_6YTCxc4IUuUgs'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => {
      SetApi(res.results)
      console.log(res.results);
  })
    .catch(err => console.error(err));
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
 {ResultAPi.map((card,index)=>{
  return <Link to={`/player/${card.id}`} className='card' key={index}>
    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
    <p>{card.original_title}</p>
  </Link>
 })}
      </div>
    </div>
  )
}

export default Titlecards
