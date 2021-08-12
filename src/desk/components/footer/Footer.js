import  React,  {  Component  }  from  'react';
import Fight4EduWall from "../../../img/FacebookWall.png";
import Address from "./Address";
import ImageScroller from "../ImageScroller";
import F4EObjective from "../F4EObjective";


class Footer extends  Component{

    render() {
        return (
            <div>
                <div style={{ height: 200, width:window.innerWidth-5, alignContent:"center",
                    marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#1F384D",
                    boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                }} >
                </div>
                <div style={{ height: 1, width:window.innerWidth-5, alignContent:"center",
                    marginTop:0,marginLeft:2, marginBottom:2, padding:0, alignItems:"center", backgroundColor:"yellow",
                    boxShadow: "1px 1px 1px yellow", position:"relative",borderRadius:2
                }} >
                </div>
                <div style={{ height: 200, width:window.innerWidth-5, alignContent:"center",
                    marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"Black",
                    boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                }} >
                </div>

            </div>
        )
    }
}

export default Footer;