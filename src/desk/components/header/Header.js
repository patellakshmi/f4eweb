import React, {Component} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import RandomTextGenerator from "react-scrolling-text";
import "./ScrollText.css";

class Header extends  Component{

    render() {
        return (
            <div>
                <div style={{ height: 120, width:window.outerWidth, textAlign:"center",
                    backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}}} >
                    <img src={F4EWithName} style={{ height:100, width:210 ,marginLeft:30, marginTop:13}}/>
                </div>
                <div style={{height:30, backgroundColor: "#2E86C1", color:"#AAB7B8", fontFamily: "Times New Roman", fontSize:20, textAlign:"center"}}>
                    <div id="demo-1">
                        <h3>Education is power to build yourself but the knowledge is material to define yourself - Aditya Patel ( B.Tech - CSE )</h3>
                    </div>

                    {/*<RandomTextGenerator
                        charList={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                        text={'Education is power to build yourself but the knowledge is material to define yourself - Aditya Patel ( B.Tech - CSE )'}
                        interval={30}
                        timePerChar={30}
                    />*/}
                </div>
                <div style={{ height: 3, marginTop:2, width:window.outerWidth, textAlign:"center",
                    backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}}}>
                </div>
            </div>
        )
    }
}

export default Header;