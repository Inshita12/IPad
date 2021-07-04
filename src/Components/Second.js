import React from 'react';
import './Song.scss';
import Toxic from '../assests/Toxic.mp3';
import ToxicImage from '../assests/ToxicImage.jfif';

class Song extends React.Component {
  render() {
    return (
      <div className="audio_screen">
         <img src={ToxicImage} alt=""/>
       <div id="audio"><audio ref="audio_tag" src={Toxic} controls /></div> 
      </div>
    );
  }
}

export default Song;