import React, {Component} from 'react';
import ImageScroller from "./ImageScroller";
import F4EObjective from "./F4EObjective";

class CentralContent extends  Component{
    render() {
        return (
            <div id={"main-contain-center"} style={{ width: window.innerWidth-262,marginTop:2,marginBottom:12, marginLeft:0, padding:0,borderRadius:3, boxShadow: "0px 0px 6px black"}}>
                <div>
                    <ImageScroller/>
                </div>
                {
                    /*
                <div>
                    <F4EObjective/>
                </div>
                */
    }
            </div>
        )
    }
}

export default CentralContent;