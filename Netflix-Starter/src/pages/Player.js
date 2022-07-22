import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Player = () => {
  
  const {state: currentlyPlaying}=useLocation();
  return (
  <>
  <div className="playerPage">
  <video autoPlay controls className='videoPlayer'>
    <source
      src={currentlyPlaying}
      type="video/mp3"
      ></source>
  </video>
  </div>
  </>
)
}

export default Player;
