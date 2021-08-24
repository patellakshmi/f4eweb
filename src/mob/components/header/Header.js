import {Component} from 'react';
import Fight4EduWall from '../../../img/FacebookWall.png';
import F4EWithName from '../../../img/F4EWithName.png';

class Header extends  Component{

    render() {
        return (
            <div>
                <div style={{ height: 90, width:window.innerWidth, textAlign:"center",
                    backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}}} >
                    <img src={F4EWithName} style={{ height:60, width:100 ,marginLeft:30, marginTop:13}}/>
                </div>
                <div style={{ height: 3, marginTop:2, width:window.innerWidth, textAlign:"center",
                    backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}}} >
                </div>
            </div>
        )
    }
}

export default Header;