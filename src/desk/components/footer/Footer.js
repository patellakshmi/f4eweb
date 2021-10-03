import  React,  {  Component  }  from  'react';
import {Form, Button,OverlayTrigger,Tooltip} from "react-bootstrap";
import VNS_ADD from "../../../img/address/Varanasi.png";
import BLR_ADD from "../../../img/address/Banglore.png";
import FACEBOOK from "../../../img/social-media/facebook.png";
import YOUTUBE from "../../../img/social-media/youtube.png";
import UDEMY from "../../../img/social-media/udemy.png";
import  "./FooterStyleSheet.css";
import {instanceOf} from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Footer extends  Component{


    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    entering = (e) => {
        e.children[1].style.borderTopColor = 'green';
        e.children[1].style.backgroundColor = 'green';
    };

    tooltip = (
        <Tooltip id="tooltip" style={{margin:20}}>This is the tooltip. Yeah!his is the tooltip. Yeah!his is the tooltip. 
        Yeah!his is the tooltip. Yeah!his is the tooltip. Yeah!
        his is the tooltip. Yeah!his is the tooltip. Yeah!his is the tooltip. Yeah!</Tooltip>
    );

    render() {
        return (
            <div>
               
                
                {
                    <div>
                        <div style={{ height: 200, width:window.innerWidth-5, alignContent:"center",
                            marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#1F384D",
                            boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                        }} >


                        </div>
                       
                        <div style={{ height: 200, width:window.innerWidth-5, alignContent:"center",
                            marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#1F384D",
                            boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
                        }} >
                            <div style={{float:"left",marginLeft:-10}}>
                                <img style={{ display: 'block', width: 170, height:130,marginTop:30 }}
                                    className="d-block w-100"
                                    src={VNS_ADD}
                                    alt="Image One"
                                />
                            </div>

                            <div style={{float:"left", marginLeft:0, marginTop:30}}>
                                <img style={{ display: 'block', width: 170, height:130 }}
                                    className="d-block w-100"
                                    src={BLR_ADD}
                                    alt="Image One"
                                />
                            </div>

                            <div style={{float:"right", marginLeft:0, marginTop:30,marginRight:50}}>
                                <img style={{ display: 'block', width: 100, height:100}}
                                    className="d-block w-100"
                                    src={FACEBOOK}
                                    alt="Image One"
                                />
                            </div>

                            <div style={{float:"right", marginLeft:0, marginTop:35, marginRight:50}}>
                                <img style={{ display: 'block', width: 90, height:90 }}
                                    className="d-block w-100"
                                    src={YOUTUBE}
                                    alt="Image One"
                                />
                            </div>


                            <div style={{float:"right", marginLeft:0, marginTop:35, marginRight:50}}>
                                <img style={{ display: 'block', width: 90, height:90 }}
                                    className="d-block w-100"
                                    src={UDEMY}
                                    alt="Image One"
                                />
                            </div>




                            <div style={{clear:'both'}}>
                                <div>
                                
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                            <span >
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Site-Map</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                    </div>
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                            <span >
                                            <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Contact</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                       
                                    </div>
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                            <span >
                                            <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Privacy</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                        
                                    </div>
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                            <span >
                                            <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Term Of Use</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                    </div>
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Tooltip!</Tooltip>}>
                                            <span >
                                            <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Legal</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                        
                                    </div>
                                    <div style={{float:"right"}}>
                                        <OverlayTrigger 
                                            overlay={<Tooltip id="tooltip-disabled">
                                                        <div style={{textAlign:"left-justify"}}>CopyrightUser.org is an independent online resource aimed at making UK Copyright Law accessible 
                                                        to creators, media professionals, entrepreneurs, students, and members of the public.</div>
                                                    </Tooltip>}>
                                            <span >
                                            <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Copyright © 2021</p></Button>
                                            </span>
                                        </OverlayTrigger>
                                        
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                    }
                </div>
        )
    }
}

export default withCookies(Footer);