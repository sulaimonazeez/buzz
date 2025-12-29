import React, { useContext } from "react";
import AllRoute from "./routes/router";
import Controlers from "./components/controls";
import { PlayerProvider, PlayerContext } from "./context/PlayerContext";
import {GlobalProvider, GlobalContext} from "./context/GlobalContext"
const GlobalPlayer = () => {
  const { playerState, togglePlay, forward, backward, setVolume } =
    useContext(PlayerContext);

  // If no song is selected, don't render
  if (!playerState.currentSong?.song) return null;

  // Handle progress/volume input
  const handleMove = (e) => {
    if (playerState.audioRef.current?.duration) {
      playerState.audioRef.current.currentTime =
        (playerState.audioRef.current.duration * e.target.value) / 100;
    }
  };

  const handleMute = (e) => setVolume(e.target.value);

  return (
    <Controlers
      playing={playerState.currentSong}
      values={playerState.volume}
      mute={handleMute}
      move={handleMove}
      played={togglePlay}
      isplay={playerState.isPlay}
      forward={forward}
      backward={backward}
    />
  );
};

const App = () => {
  return (
    <GlobalProvider>
      <PlayerProvider>
        <AllRoute />
        <GlobalPlayer />
      </PlayerProvider>
    </GlobalProvider>
  );
};

export default App;