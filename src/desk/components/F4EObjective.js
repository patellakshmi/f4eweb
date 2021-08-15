import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Fight4EducObj} from '../constants/data/Fight4EduObjective';

class F4EObjective extends  Component{
    render() {
        return (
            <div style={{paddingTop:10, paddingLeft:180}}>
                <Card style={{ width: 770 }}>
                    <Card.Body>
                        <Card>
                            <Card.Body style={{textAlign: "justify"}}>
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

