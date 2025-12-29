import React from "react";
import "../App.css"; // make sure you have global styles
import 'font-awesome/css/font-awesome.min.css';

const Music = ({ staticImage, title }) => {
  const endpoint = "https://ola90.pythonanywhere.com";

  return (
    <div className="music-container container-fluid" style={{ padding: "2vw" }}>
      {/* Album Card */}
      <div
        className="album-card1"
        style={{
          width: "100%",
          maxWidth: "350px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(255, 0, 255,0.3)",
        }}
      >
        <img
          src={endpoint + staticImage}
          alt="Playing Now"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            
          }}
        />
      </div>

      {/* Song Info */}
      <div
        className="song-info mt-3 text-center"
        style={{
          color: "#fff",
          textShadow: "0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,0,255,0.5)",
          animation: "textGlow 2s infinite alternate",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            marginBottom: "0.5rem",
            letterSpacing: "1px",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#e0e0e0",
            maxWidth: "350px",
            margin: "0 auto",
            lineHeight: "1.5",
          }}
        >
          Your weekly cosmic mixtape of fresh music. Feel the vibes of the universe as each beat flows through your soul. Updated every Monday.
        </p>
      </div>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes rotateGlow {
            0% { transform: rotate(0deg) scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(255, 0, 255,0.3);}
            50% { transform: rotate(5deg) scale(1.02); box-shadow: 0 0 60px rgba(255,255,255,0.7), 0 0 80px rgba(255, 0, 255,0.5);}
            100% { transform: rotate(0deg) scale(1); box-shadow: 0 0 40px rgba(255,255,255,0.5), 0 0 60px rgba(255, 0, 255,0.3);}
          }

          @keyframes textGlow {
            0% { text-shadow: 0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,0,255,0.5);}
            50% { text-shadow: 0 0 20px rgba(255,255,255,1), 0 0 40px rgba(255,0,255,0.7);}
            100% { text-shadow: 0 0 10px rgba(255,255,255,0.7), 0 0 20px rgba(255,0,255,0.5);}
          }
        `}
      </style>
    </div>
  );
};

export default Music;