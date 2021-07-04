import React from "react";
import "./Music.scss";
class Music extends React.Component {
  
  render() {
    return (
      <div className="musics">
        
        <span id="tag" >Music</span>
        <div className="musicslist">
          <ul>
            <li className="album"  onClick={()=> this.props.home('Album')} >Album</li>
            <li className="album" onClick={()=> this.props.home('Artist')}>Artist</li>
            <li className="album" onClick={()=> this.props.home('Song')}>Songs</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Music;
