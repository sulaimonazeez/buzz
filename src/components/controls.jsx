import React, { useEffect, useRef, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
//import ".././App.css";

const Controlers = ({
  playing,
  values,
  mute,
  move,
  played,
  isplay,
  forward,
  backward,
}) => {
  const endpoint = "https://ola90.pythonanywhere.com";
  const [barGlow, setBarGlow] = useState(0);

  const glowRef = useRef(null);

  // Animate glow continuously
  useEffect(() => {
    const animate = () => {
      setBarGlow((prev) => (prev + 1) % 360);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "120px",
        background: "linear-gradient(90deg, #4b0082, #800080, #ff00ff)",
        backgroundSize: "300% 100%",
        animation: "bgSlide 15s linear infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
        boxShadow: "0 -5px 50px rgba(255,0,255,0.5)",
        backdropFilter: "blur(10px)",
        zIndex: 99999,
      }}
    >
      {/* Album + Info */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 0 20px #ff00ff, 0 0 40px #8a2be2",
            animation: isplay ? "pulseAlbum 1s infinite alternate" : "none",
          }}
        >
          <img className="w-100"
            src={playing?.album ? endpoint + playing.album : "logo"}
            alt={playing?.title || "song"}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ color: "#fff" }}>
          <h4 style={{ margin: 0, fontWeight: "700" }}>{playing?.title || "Unknown"}</h4>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#ccc" }}>
            {playing?.artist || "Unknown Artist"}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <i
          onClick={backward}
          className="fa fa-step-backward"
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            cursor: "pointer",
            textShadow: "0 0 10px #ff00ff",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <button
          onClick={played}
          style={{
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            background: "radial-gradient(circle at 30% 30%, #ff00ff, #8a2be2, #4b0082)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px #ff00ff, 0 0 60px #8a2be2",
            cursor: "pointer",
            transition: "all 0.3s",
            fontSize: "1.5rem",
          }}
        >
          {isplay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
        </button>
        <i
          onClick={forward}
          className="fa d-none fa-step-forward"
          style={{
            fontSize: "1.5rem",
            color: "#fff",
            cursor: "pointer",
            textShadow: "0 0 10px #ff00ff",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.3)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Progress Bar */}
      <div style={{ flex: 1, margin: "0 2rem" }}>
        <input
          type="range"
          min="0"
          max="100"
          value={values || 0}
          onChange={move}
          onInput={mute}
          style={{
            width: "100%",
            height: "8px",
            borderRadius: "4px",
            background: `linear-gradient(to right, #ff00ff ${values}%, #8a2be2 0%)`,
            accentColor: "#ff00ff",
            cursor: "pointer",
            boxShadow: "0 0 10px #ff00ff, 0 0 20px #8a2be2",
          }}
        />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes pulseAlbum {
          0% { transform: scale(1); box-shadow: 0 0 20px #ff00ff, 0 0 40px #8a2be2; }
          50% { transform: scale(1.1) rotate(-1deg); box-shadow: 0 0 30px #ff00ff, 0 0 60px #8a2be2; }
          100% { transform: scale(1); box-shadow: 0 0 20px #ff00ff, 0 0 40px #8a2be2; }
        }

        @keyframes bgSlide {
          0% { background-position: 0% 0%; }
          100% { background-position: 300% 0%; }
        }
      `}</style>
    </div>
  );
};

export default Controlers;