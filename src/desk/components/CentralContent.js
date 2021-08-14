import React, {Component} from 'react';
import ImageScroller from "./ImageScroller";
import F4EObjective from "./F4EObjective";

class CentralContent extends  Component{
    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,
                backgroundColor:"#AEB6BF",marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "2px 2px 5px black"}}>

                <div>
                    <ImageScroller/>
                    <F4EObjective/>
                </div>
            </div>
        )
    }
}

export default CentralContent;