import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Fight4EducObj} from '../../constants/Fight4EduObjective';

class F4EObjective extends  Component{
    render() {
        return (
            <div style={{paddingTop:10, paddingLeft:(window.outerWidth-260-window.outerWidth*.8)/2}}>
                <div style={{ display: 'block', marginLeft:0, width: window.outerWidth*.8, paddingLeft: 30, paddingBottom:10 }}>
                    <div style={{backgroundColor:'white',borderRadius:5, padding:3, border:'1px dotted black'}}>
                        <div style={{textAlign:"justify", margin:15, padding:3,borderRadius:5, border:'1px dotted black', backgroundColor:'white'}}>
                            {Fight4EducObj}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default F4EObjective;

