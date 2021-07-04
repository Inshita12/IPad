import React from 'react';
import './Song.scss';
import Waalian from '../assests/Waalian.mp3';
import WaalianImage from '../assests/WaalianImage.jpg';

class Song extends React.Component {
  render() {
    return (
      <div className="audio_screen">
         <img src={WaalianImage} alt=""/>
       <div id="audio"><audio ref="audio_tag" src={Waalian} controls /></div> 
      </div>
    );
  }
}

export default Song;