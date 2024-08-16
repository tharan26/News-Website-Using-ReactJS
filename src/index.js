import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Components/Header';
import Foot from './Components/Footer';
import Cover from './Components/Cover';
import Cards from './Components/Cards';
import Video from './Components/Video';
import News from './Components/News'

class Chronicle extends Component{
  render(){
    return(
    <div>
      <Head/>
      <Cover/>
      <Video/>
      <News/>
      <Cards/>
      <Foot/>
    </div>
    );
  }
}

ReactDOM.render(<Chronicle/>,document.getElementById("root"));
