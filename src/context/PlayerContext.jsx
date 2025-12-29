import React, { createContext, useState, useRef } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef(new Audio());
  const [playerState, setPlayerState] = useState({
    isPlay: false,
    currentSong: {},
    playIndex: -1,
    volume: 50,
    songList: [],
  });

  const playSong = (song, index, songList, endpoint) => {
    if (!song) return;
    audioRef.current.src = endpoint + song.song;
    audioRef.current.play();
    setPlayerState((prev) => ({
      ...prev,
      currentSong: song,
      playIndex: index,
      isPlay: true,
      songList,
    }));
  };

  const togglePlay = () => {
    if (!playerState.currentSong.song) return;
    if (playerState.isPlay) audioRef.current.pause();
    else audioRef.current.play();
    setPlayerState((prev) => ({ ...prev, isPlay: !prev.isPlay }));
  };

  const forward = (endpoint) => {
    const next = playerState.playIndex + 1;
    if (next < playerState.songList.length) {
      playSong(playerState.songList[next], next, playerState.songList, endpoint);
    }
  };

  const backward = (endpoint) => {
    const prevIdx = playerState.playIndex - 1;
    if (prevIdx >= 0) {
      playSong(playerState.songList[prevIdx], prevIdx, playerState.songList, endpoint);
    }
  };

  const setVolume = (value) => {
    audioRef.current.volume = value / 100;
    setPlayerState((prev) => ({ ...prev, volume: value }));
  };

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        playerState,
        setPlayerState,
        playSong,
        togglePlay,
        forward,
        backward,
        setVolume,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};