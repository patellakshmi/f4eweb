import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Fight4EducObj} from '../constants/data/Fight4EduObjective';

class F4EObjective extends  Component{
    render() {
        return (
            <div style={{paddingTop:10, paddingLeft:(window.outerWidth-260-window.outerWidth*.6)/2}}>
                <div style={{ display: 'block', marginLeft:0, width: window.outerWidth*.6, paddingLeft: 30, paddingBottom:10 }}>
                    <div style={{backgroundColor:'white',padding:3}}>
                        <div style={{margin:15, padding:3,borderRadius:5, border:'1px dotted black', backgroundColor:'white'}}>
                            {Fight4EducObj}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default F4EObjective;

