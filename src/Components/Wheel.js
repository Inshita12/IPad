import React from "react";
import "./Wheel.scss";
class Wheel extends React.Component {
  render() {
    return (
     //this.props.home is used as we're getting the value of it from another component and var home('Second ') tells that the value of var has chnaged so that onclick another component will render with the same name
        <div className="wheel">
          <div id="menu" onClick={() => this.props.home("Screen")}>
            Menu
          </div>
          
          <div id="forward">
            
            <i className="fas fa-fast-forward" onClick={() => this.props.home("Second")}></i> 
          </div>
          <div id="backward">
            <i className="fas fa-fast-backward" onClick={() => this.props.home("Song")}></i>
          </div>
          <div id="fast">
            <i className="fas fa-play"></i>
            <i className="fas fa-pause"></i>
          </div>

          <div className="smallwheel"></div>
        </div>
     
    );
  }
}

export default Wheel;
