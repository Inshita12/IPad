import React from "react";
import "./Screen.scss";
class Screen extends React.Component {
  render() {
    return (
      <div className="screen">
        <div className="list"></div>
        <span id="tag">iPod.js</span>
        <ul>
          <li className="coverflow">
            <span className="song" onClick={()=> this.props.home('Coverflow')}>
              Coverflow
            </span>
          </li>
          <li className="music">
            <span className="song" onClick={()=> this.props.home('Music')}>Music</span>
          </li>
          <li className="games">
            <span className="song" onClick={()=> this.props.home('Games')}>Games</span>
          </li>
          <li className="settings">
            <span className="song"onClick={()=> this.props.home('Settings')}>Settings</span> 
          </li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1516655543747-2973ac03d580?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
          alt=""
        ></img>
      </div>
    );
  }
}

export default Screen;
