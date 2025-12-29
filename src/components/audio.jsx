



import React, {useState} from 'react';

function playingNow(props){
  const [setState, data] = {}
  const audio = new Audio();
  if (props.audio !== null & props.audio !== NaN & props.audio !== ''){
    audio.src = 'https://ola90.pythonanywhere.com'+props.audio;
    audio.preload = 'metadata';
    audio.play()
  }
}
export default playingNow;