import React, { useEffect, useState, useContext } from 'react';
import PopularArtist from "../components/home/popularArtist";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './MyMusic.css'; 
import RecentPlay from "../components/home/recentPlay";
import "bootstrap-icons/font/bootstrap-icons.css";
import axios from "axios";
import Controlers from ".././components/controls";
import { GlobalContext } from ".././context/GlobalContext";
const MusicDashboard = () => {
  const { data, loading, error } = useContext(GlobalContext);
  const endpoint = "https://ola90.pythonanywhere.com";

  // Hero background rotation
  const backgrounds = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0gd2tTitsLe8xHi4v6_dX0Jvsuf3Lo1KqUD9lLWlfQ&s",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4",
    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  
  if (error) return <div>Something went wrong....</div>
  
  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-wrapper grid-layout row">
      
      {/* Sidebar */}
      <aside className="sidebar p-4 col-12 col-md-2 col-lg-2">
        <div className="mb-5">
          <h5 className="text-white fw-bold">Library</h5>
          <ul className="list-unstyled mt-3">
            <li className="nav-item active">Browse</li>
            <li className="nav-item">Songs</li>
            <li className="nav-item">Albums</li>
            <li className="nav-item">Artists</li>
            <li className="nav-item">Radio</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white fw-bold">My music</h5>
          <ul className="list-unstyled mt-3">
            <li className="nav-item">Recently Played</li>
            <li className="nav-item">Favorite Songs</li>
            <li className="nav-item">Local File</li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-12 col-md-6 col-lg-6 content-area p-4">
        
        {/* Hero Banner */}
        <section
          className="hero-banner p-4 mb-4 text-white"
          style={{ backgroundImage: `url(${backgrounds[index]})` }}
        >
          <h1 className="display-5 fw-bold mb-2">BLINDING LIGHT</h1>
          <p className="small opacity-75 lh-1">
            Enjoy vivid emotion with this stunning
          </p>
          <p style={{ marginTop: "-9px" }} className="text-light small opacity-75 mb-4">
            music album. Each track is a story
          </p>
          <p className="small opacity-75">
            83,012 Likes • <span className="text-secondary opacity-90">18 Songs, 39 min 43 sec</span>
          </p>
        </section>

        {/* Popular Artists */}
        <section className="mb-3">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="fw-bold"><strong>Popular artists</strong></h6>
            <span className="text-muted small">See all</span>
          </div>
          <PopularArtist data={data} />
        </section>

        {/* Recently Played */}
        <section className="mt-5">
          <h6><strong>Recently played </strong></h6>
          {data.slice(0,7).map(result => <RecentPlay artist={result.artist} id={result.id} media={result.album} title={result.title}/>)}
        </section>
      </main>

      {/* Now Playing */}
      <aside className="col-12 col-md-3 col-lg-3 now-playing p-4 bg-body-secondary rounded mt-4">
        <h6 className="fw-bold mb-4">Now Playing</h6>
        <div className="now-playing-card mb-4">
          <div className="album-art-main rounded-4"> <img src={backgrounds[1]} className="w-100 rounded"/></div>
          <div className="d-flex justify-content-between mt-3">
           <div className="">
            <h6 className="mb-0 fw-bold">Snowfall</h6>
            <small className="text-muted">Oneheart</small>
            </div>
            <div className="mt-2 float-right">
            <i class="text-muted fa fa-music"></i>
            </div>
          </div>
          <hr />
          {data.slice(15,25).map(result => <RecentPlay id={result.id} media={result.album} title={result.artist}/>)}
        </div>
      </aside>

    </div>
  );
};

export default MusicDashboard;