import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

import Music from "../components/music";
import Videos from "../components/video";
import Modal from "../components/nowPlaying";
import Controlers from "../components/controls";

import { PlayerContext } from "../context/PlayerContext";
import { GlobalContext } from "../context/GlobalContext";

const Playlist = () => {
  const { id } = useParams();
  const endpoint = "https://ola90.pythonanywhere.com";

  const { playerState, playSong, togglePlay, forward, backward, setVolume } =
    useContext(PlayerContext);
  const { data, loading, error } = useContext(GlobalContext);

  const [songs, setSongs] = useState([]);
  const [currentSongReady, setCurrentSongReady] = useState(false);

  useEffect(() => {
    if (loading || !data.length) return;

    const index = Number(id) || 0;
    const playlistSongs = data.slice(0, 50);
    setSongs(playlistSongs);

    // If nothing is playing yet, start the first song of the playlist
    if (!playerState.currentSong?.song) {
      playSong(playlistSongs[index], index, playlistSongs, endpoint);
    }

    setCurrentSongReady(true);
  }, [id, data, loading, playerState.currentSong, playSong, endpoint]);

  const handleMove = (e) => {
    const value = e.target.value;
    if (playerState.audioRef?.current?.duration) {
      playerState.audioRef.current.currentTime =
        (playerState.audioRef.current.duration * value) / 100;
      setVolume(value);
    }
  };

  const handleMute = (e) => {
    setVolume(e.target.value);
  };

  if (loading)
    return <div className="text-light p-4">Loading playlist...</div>;
  if (error) return <div className="text-danger p-4">Error occurred</div>;

  // ✅ Use fallback only if playerState.currentSong is undefined
  const currentSong =
    playerState.currentSong?.song && currentSongReady
      ? playerState.currentSong
      : songs[0] || {
          title: "No song selected",
          album: "/default-album.png",
          artist: "Unknown Artist",
          song: null,
        };

  return (
    <div id="data-container">
      {/* Music Banner */}
      <Music
        staticImage={(currentSong.album || "")}
        title={currentSong.title}
      />

      {/* Video Section */}
      <Videos play={togglePlay} isplay={playerState.isPlay} />

      {/* Playlist */}
      <div className="container-fluid mt-5">
        {songs.map((song, index) => (
          <div
            key={index}
            id="hoover"
            className="d-flex justify-content-between align-items-center"
            onClick={() => playSong(song, index, songs, endpoint)}
          >
            <div className="d-flex">
              <span className="fw-bold text-muted me-3">{index + 1}</span>
              <div>
                <span className="fw-bold text-light">{song.title}</span>
                <p className="text-muted mb-0">{song.artist}</p>
              </div>
            </div>
            <i className="fa fa-ellipsis-v text-light"></i>
          </div>
        ))}
      </div>

      {/* Now Playing Modal */}
      <div className="fixed-bottom container-fluid">
        <Modal
          playNow={!!currentSong.song}
          imageModal={endpoint + (currentSong.album || "")}
          title={currentSong.title}
          artist={currentSong.artist}
          isplay={playerState.isPlay}
          played={togglePlay}
        />
      </div>

      {/* Global Controls */}
      {currentSong.song && (
        <div className="fixed-bottom">
          <Controlers
            playing={currentSong}
            values={playerState.volume}
            mute={handleMute}
            move={handleMove}
            played={togglePlay}
            isplay={playerState.isPlay}
            forward={() => forward(songs, endpoint)}
            backward={() => backward(songs, endpoint)}
          />
        </div>
      )}
    </div>
  );
};

export default Playlist;