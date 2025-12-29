import React, { useState, useEffect, useContext } from "react";
import Music from "../components/music";
import Videos from "../components/video";
import Controlers from "../components/controls";
import "../App.css";
import { PlayerContext } from "../context/PlayerContext";
import { GlobalContext } from "../context/GlobalContext";

const Search = () => {
  const [inputVal, setInputVal] = useState("");
  const [isSearch, setIsSearch] = useState(true);
  const endpoint = "https://ola90.pythonanywhere.com";

  const {
    playerState,
    playSong,
    togglePlay,
    forward,
    backward,
    setVolume,
  } = useContext(PlayerContext);
  
  const { data, loading, error } = useContext(GlobalContext);

  const handleInput = (e) => setInputVal(e.target.value);

  // Play a selected song
  const handleSelectSong = (song, index) => {
    if (!song?.song) return;
    const path = song.song.startsWith("/") ? song.song : "/" + song.song;
    // Pass the full data array so forward/backward works
    playSong({ ...song, song: path }, index, data, endpoint);
    setIsSearch(false);
  };

  // Filter search results
  const filteredData = data.filter((item) => {
    const query = inputVal.toLowerCase();
    return (
      item.title.toLowerCase().startsWith(query) ||
      item.title.toLowerCase().endsWith(query) ||
      item.artist.toLowerCase().startsWith(query) ||
      item.artist.toLowerCase().endsWith(query)
    );
  });

  return (
    <div className="container-fluid bg-light">
      {isSearch ? (
        <>
          <div style={{ marginTop: "10vw" }}>
            <input
              autoComplete="off"
              type="search"
              name="search_query"
              className="p-4 text-darklight form-control"
              value={inputVal}
              placeholder="Search on Buzz..."
              onChange={handleInput}
            />
          </div>

          <div className="mt-4">
            {filteredData.map((item, indx) => (
              <div
                key={indx}
                onClick={() => handleSelectSong(item, indx)}
                className="p-3 d-flex"
                style={{ cursor: "pointer" }}
              >
                <img
                  style={{ borderRadius: "2%", height: "40px", width: "40px" }}
                  alt="searching Image"
                  src={endpoint + item.album}
                />
                <div style={{ position: "relative", left: "8vw" }}>
                  <h4 className="text-dark">{item.title}</h4>
                  <span style={{ color: "lightgrey" }}>{item.artist}</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div style={{ marginTop: "7vw" }} className="data-container">
          {/* Current playing song banner */}
          <Music
            staticImage={playerState.currentSong?.album}
            title={playerState.currentSong?.title}
          />
          <Videos play={togglePlay} isplay={playerState.isPlay} />

          {/* Song list */}
          <div className="mt-5 container-fluid">
            {data.map((item, indx) => (
              <div
                id="hoover"
                key={indx}
                onClick={() => handleSelectSong(item, indx)}
                className="justify-content-between d-flex"
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex">
                  <span
                    style={{ color: "lightgrey", fontSize: "4vw" }}
                    className="fw-bold"
                  >
                    {indx}
                  </span>
                  <div id="player-click">
                    <span
                      style={{ fontSize: "3.5vw" }}
                      className="text-light fw-bold"
                    >
                      {item.title}
                    </span>
                    <p
                      style={{ color: "lightgrey", fontSize: "2.5vw" }}
                      className=""
                    >
                      {item.artist}
                    </p>
                  </div>
                </div>
                <i className="fw-bold text-light awesome fa fa-ellipsis-v"></i>
              </div>
            ))}
          </div>

          {/* Global Controller */}
          {playerState.currentSong?.song && (
            <div className="fixed-bottom container-fluid">
              <Controlers
                playing={playerState.currentSong}
                values={playerState.volume}
                mute={setVolume}
                move={setVolume}
                played={togglePlay}
                isplay={playerState.isPlay}
                forward={forward}
                backward={backward}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;