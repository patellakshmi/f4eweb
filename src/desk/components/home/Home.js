import React, {Component} from 'react';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import  "../../css/HomeStyle.css";
import CEO from "../../../img/ceo.png";
import CentralContent from "./CentralContent";
import EductionStruct from "../EductionStruct";
import ImageScroller from "../ImageScroller";
import Card from "react-bootstrap/Card";

class Home extends  Component{
    render() {
        return (
            <div>
                <Header/>
                <div>
                    <div style={{float:"left"}}>
                        <Sidebar/>
                    </div>
                    <div style={{float:"left"}}>
                        <CentralContent/>
                    </div>
                </div>
                <div id={"main-contain"} style={{clear:"both"}}>
                    <EductionStruct/>
                </div>
                <div style={{float:"left"}}>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default Home;