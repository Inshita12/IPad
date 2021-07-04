import React from "react";
import "./App.scss";
import Wheel from "./Components/Wheel";
import Screen from "./Components/Screen";
import Coverflow from "./Components/Coverflow";
import Music from "./Components/Music";

import Games from "./Components/Games";
import Settings from "./Components/Settings";
import Album from './Components/Album';
import Artist from "./Components/Artist";
import Song from "./Components/Song";
import Second from './Components/Second';
class App extends React.Component {
  constructor(props) {
    super(props);

    // Initial state as the first screen is home screen
    this.state = {
      home: "Screen",
    };
  }
  //Var to handle the screen onClick
  handleClick = (inner) => {
    this.setState({
      home: inner,
    });
  };

  render() {
    const { home } = this.state; 
    const { handleClick } = this;
    return (
      // When value of home var changes the component as per the value renders
      <div className="App">
        
        {home==="Screen"  && <Screen home={handleClick}/>} 
        
        {home === "Coverflow" && <Coverflow home={handleClick} />}
        {home === "Music" && <Music home={handleClick} />}
        {home === "Games" && <Games home={handleClick} />}
        {home === "Settings" && <Settings home={handleClick} />}
        {home === "Album" && <Album home={handleClick} />}
        {home === "Artist" && <Artist home={handleClick} />}
        { home === "Song" && <Song home={handleClick}/>}
        {home==="Second" && <Second home={handleClick}/>}
        <Wheel home={handleClick} />
  
      </div>
      
    );
  }
}

export default App;
