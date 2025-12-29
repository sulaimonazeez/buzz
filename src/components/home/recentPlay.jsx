import React from "react";
import "./recent.css";
import { useNavigate } from 'react-router-dom';
const RecentPlay = ({id, media, artist, title}) => {
  const endpoint = "https://ola90.pythonanywhere.com";
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/playlist/${id}`)} className="recent-play d-flex align-items-center justify-content-between px-2 py-2">
      
      {/* Left: image + artist */}
      <div className="d-flex align-items-center gap-3">
        <img
          src={endpoint + media}
          alt="album"
          className="mr-3 recent-play-icon"
        />
        <div>
          <h6 className="mb-0 fw-semibold"><strong>{artist}</strong></h6>
          <small className="text-muted">{title}</small>
        </div>
      </div>

      {/* Duration */}
      <small className="text-muted me-3">2:30</small>

      {/* Action */}
      <button className="btn btn-sm btn-outline-secondary font-bold rounded-circle">
        +
      </button>

    </div>
  );
};

export default RecentPlay;