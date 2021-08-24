import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Fight4EducObj} from '../constants/data/Fight4EduObjective';

class F4EObjective extends  Component{
    render() {
        return (
            <div style={{paddingTop:10, marginLeft:10,width: window.innerWidth-20, paddingBottom:20}}>
                <Card style={{ width: window.innerWidth-20 }}>
                    <Card.Body>
                        <Card>
                            <Card.Body style={{textAlign: "justify", fontSize:9}}>
                                {Fight4EducObj}
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default F4EObjective;

