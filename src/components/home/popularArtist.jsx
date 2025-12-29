import React from "react";
import "./popular.css"
import { useNavigate } from "react-router-dom";
const PopularArtist = ({ data }) =>{
  const endpoint = "https://ola90.pythonanywhere.com";
  const navigate = useNavigate();
  return (
    <div className="artist-scroll scroll-container">
      {data.slice(13, 22).map((i, idx) => (
      <div onClick={() => navigate(`/playlist/${i.id}`)}  key={idx} className="artist-circle text-center">
      <img src={endpoint + i.album} className="avatar-lg mb-2"/>
      <small className="font-light d-block">{i.artist}</small>
      </div>
     ))}
  </div>
  )
}

export default PopularArtist;