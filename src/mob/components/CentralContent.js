import React, {Component} from 'react';
import ImageScroller from "./ImageScroller";
import F4EObjective from "./F4EObjective";

class CentralContent extends  Component{
    render() {
        return (
            <div id={"main-contain"} style={{width: window.innerWidth,marginTop:2,marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "2px 2px 5px black"}}>
                <div>
                    <ImageScroller/>
                    <F4EObjective/>
                </div>
            </div>
        )
    }
}

export default CentralContent;