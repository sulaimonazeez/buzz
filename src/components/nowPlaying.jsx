import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import "../App.css"; // make sure you have global styles

const Modal = ({ change, imageModal, title, artist, played, isplay }) => {
  return (
    <div
      onClick={change}
      className="modal-now-playing d-flex justify-content-between align-items-center p-3"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backdropFilter: "blur(12px)",
        background: "linear-gradient(135deg, #6a0dad, #9b59b6)",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
        zIndex: 9999,
        cursor: "pointer",
        transition: "all 0.3s ease",
      }}
    >
      <div className="d-flex align-items-center">
        <div className="image-wrapper" style={{
          width: "60px",
          height: "60px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(255,255,255,0.4)",
          animation: "pulse 2s infinite"
        }}>
          <img
            src={imageModal}
            alt="Now Playing"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="song-info ml-3" style={{ marginLeft: "15px", color: "#fff", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontWeight: 700, fontSize: "1rem", textShadow: "0 0 5px #fff" }}>{title}</span>
          <span style={{ fontSize: "0.85rem", color: "#e0e0e0", textShadow: "0 0 3px #fff" }}>{artist}</span>
        </div>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); played(); }}
        style={{
          border: "none",
          background: "radial-gradient(circle, #fff, #e0e0e0)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
          boxShadow: "0 0 15px #fff",
          transition: "all 0.3s ease",
        }}
        className="play-button"
      >
        {isplay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
      </button>

      {/* Keyframes for pulsing album */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 10px rgba(255,255,255,0.3); transform: scale(1); }
            50% { box-shadow: 0 0 25px rgba(255,255,255,0.6); transform: scale(1.05); }
            100% { box-shadow: 0 0 10px rgba(255,255,255,0.3); transform: scale(1); }
          }

          .play-button:hover {
            transform: scale(1.2);
            box-shadow: 0 0 25px #fff;
          }

          .modal-now-playing:hover {
            transform: translateY(-5px);
          }
        `}
      </style>
    </div>
  );
};

export default Modal;