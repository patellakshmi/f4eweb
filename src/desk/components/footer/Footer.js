import  React,  {  Component  }  from  'react';
import VNS_ADD from "../../../img/address/Varanasi.png";
import BLR_ADD from "../../../img/address/Banglore.png";
import FACEBOOK from "../../../img/social-media/facebook.png";
import YOUTUBE from "../../../img/social-media/youtube.png";
import UDEMY from "../../../img/social-media/udemy.png";
import Button from "react-bootstrap/Button";

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
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Site-Map</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Contact</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Privacy</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Term Of Use</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Legal</p></Button>
                            </div>
                            <div style={{float:"right"}}>
                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}><p style={{fontSize:9}}>Copyright © 2021 Fight For Education Inc. All rights reserved.</p></Button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        )
    }
}

export default Footer;