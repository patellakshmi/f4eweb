import React, {Component, useEffect} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import Logout from "../../../img/home/logout.png";
import Login from "../../../img/home/login.png";
import CloseButton from "../../../img/home/closebutton.png";

import {CENTRAL_CONTENT} from "../../constants/Constants";
import {Form, Button} from "react-bootstrap";

class Header extends  Component{

    constructor() {
        super();
        this.state ={
            login:false
        }
    }

    doLoginLogoutAction=()=>{
        this.setState({ login: !this.state.login });

    }

    render() {
        return (
            <div>
                {
                    this.state.login == true &&
                    <div id="login-page">
                        <div id="central-login-form"  style={{ top: (window.innerHeight-230)/2, left: (window.innerWidth-350)/2, width: 350, height: 230}}>
                            <div style={{float:"right", marginRight:0}} onClick={()=>this.doLoginLogoutAction()}>
                                <img style={{display: 'block', width: 20, height: 20}}
                                     className="d-block w-100"
                                     src={CloseButton}
                                     alt="Image One"
                                />
                            </div>
                            <div style={{ clear:"both"}}></div>
                            <div id="login-form-div"  style={{marginLeft:40, marginTop: 5, borderRadius: 12, borderWidth:5, borderColor:"black" ,width:250, height: 200}}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" placeholder="Enter email or Mobile" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Is it first time for you ?" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div style={{
                            height: 90, width: window.outerWidth, textAlign: "center",
                            backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}
                        }}>
                            <img src={F4EWithName} style={{
                                height: 60,
                                width: 100,
                                marginLeft: (window.outerWidth - 160) / 2,
                                marginTop: 13
                            }}/>
                            <div style={{float: "right", marginTop: 65, marginRight: 10}}>
                                <img style={{display: 'block', width: 20, height: 20}}
                                     className="d-block w-100"
                                     src={this.state.login == true ? Logout : Login}
                                     alt="Image One"
                                     onClick={() => this.doLoginLogoutAction()}
                                />
                            </div>
                        </div>
                        <div style={{
                            height: 3, marginTop: 2, width: window.outerWidth, textAlign: "center",
                            backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}
                        }}>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Header;