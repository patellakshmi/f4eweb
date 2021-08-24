import  React,  {  Component  }  from  'react';
import VNS_ADD from "../../../img/Varanasi.png";
import BLR_ADD from "../../../img/Banglore.png";
import FACEBOOK from "../../../img/facebook.png";
import YOUTUBE from "../../../img/youtube.png";
import UDEMY from "../../../img/udemy.png";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";

class Footer extends  Component{

    render() {
        return (
            <div>
                <div style={{ height: 120, width:window.outerWidth, alignContent:"center",
                    marginTop:2,marginLeft:2, marginBottom:2, alignItems:"center", backgroundColor:"#1F384D",
                    boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                }} >
                    <Row className="justify-content-xm-center" style={{padding:30}}>
                        <Col xs={6}>
                            <div style={{float:"center"}}>
                                <img style={{ display: 'block', width: 150, height:60}}
                                     src={VNS_ADD}
                                     alt="Image One"
                                />
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div style={{float:"center"}}>
                                <img style={{ display: 'block', width: 120, height:60 }}
                                     src={BLR_ADD}
                                     alt="Image One"
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{ height: 1, width:window.outerWidth, alignContent:"center",
                    marginTop:0,marginLeft:2, marginBottom:2, alignItems:"center", backgroundColor:"yellow",
                    boxShadow: "1px 1px 1px yellow", position:"relative",borderRadius:2
                }} >
                </div>
                <div style={{ height: 120, width:window.outerWidth, alignContent:"center",
                    marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"Black",
                    boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                }} >

                    <Row className="justify-content-xm-center" style={{paddingTop:10}}>
                        <Col xs={4}>
                            <div style={{float:"center", marginLeft:30}}>
                                <img style={{ display: 'block', width: 80, height:60 }}
                                     src={FACEBOOK}
                                     alt="Image One"
                                />
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div style={{float:"center", marginLeft:10}}>
                                <img style={{ display: 'block', width: 90, height:60  }}
                                     src={YOUTUBE}
                                     alt="Image One"
                                />
                            </div>
                        </Col>

                        <Col xs={4}>
                            <div style={{float:"center", marginLeft:10}}>
                                <img style={{ display: 'block', width: 80, height:60 }}
                                     src={UDEMY}
                                     alt="Image One"
                                />
                            </div>
                        </Col>
                    </Row>

                    <div style={{clear:'both', position:"absolute", top:85, right:5}}>
                        <div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Contact</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Privacy</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Term Of Use</p></Button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Footer;