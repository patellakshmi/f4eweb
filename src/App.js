import {Component} from 'react';
import { BrowserView, MobileView, isBrowser, isMobile} from "react-device-detect";
import MobileApp from './mob/App';
import DeskApp from "./desk/App";

class App extends  Component{

  render() {
      //if (isMobile) return <MobileApp></MobileApp>;
      return <DeskApp></DeskApp>;
  }

}

export default App;
