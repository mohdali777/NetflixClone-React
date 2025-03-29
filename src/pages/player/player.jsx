import React, { useEffect, useState } from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import {useNavigate, useParams} from 'react-router-dom'
import './player.css'
const Player = () => {
const [ApiData,SetApi] = useState({
  name:"",
  key:" ",
  published_at:" ",
  type:" "
})

const {id} = useParams()
const navigate = useNavigate();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2NiNDZiZGVkMzdhODY1YTg4NjM5M2FjMzNkMzZmMiIsIm5iZiI6MTc0MzIyNDY1My41OCwic3ViIjoiNjdlNzdmNGRhM2Q4Y2M5MjhlNjdhY2Y2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Yc3PTSg52-jliu0BbNhkPncAldgIX_6YTCxc4IUuUgs'
    }
  };
  
    useEffect(()=>{
      fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => SetApi(res.results[0]))
      .catch(err => console.error(err));
    },[])
  return (
    <div>
      <div className="player">
        <img src={back_arrow_icon} alt="" onClick={()=> navigate(-2)} />
        <iframe
  width="90%"
  height="90%"
  src={`https://www.youtube.com/embed/${ApiData.key}`}
  title="Trailer"
  frameBorder="0"
  allowFullScreen
></iframe>
        <div className="player-info">
          <p>{ApiData.published_at}</p>
          <p>{ApiData.name}</p>
          <p>{ApiData.type}</p>
        </div>
      </div>
    </div>
  )
}

export default Player
