import React, {Component} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import RandomTextGenerator from "react-scrolling-text";
import "./ScrollText.css";
import "./LoginPage.css";
import NoticeBoard from "../../../img/NoticeWW.png";
import Login from "../../../img/home/login.png";
import Logout from "../../../img/home/logout.png";
import CloseButton from "../../../img/home/closebutton.png";
import removeLoginFailedMsg from "../../../img/home/remove-login-failed-error.png";
import loginFailedErrMsg from "../../../img/home/loginFailedErrMsg.png";

import {CENTRAL_CONTENT} from "../../constants/Constants";
import {Form, Button} from "react-bootstrap";
import $ from 'jquery';
import {Card,Badge} from "react-bootstrap";
import {updateCentralContent, updateLoginInfo} from "../../actions/Actions";
import {connect} from "react-redux";
import {LOGIN_INFO} from "../../constants/ComponentConst";


class Header extends  Component{

    constructor() {
        super();
        this.state ={
            showLoginButton:true,
            showLoginPage: false,
            loginFailedMessage: false
        }
    }

    showLoginPageAndLogout=()=>{
        if(this.state.showLoginButton == true) this.setState({showLoginPage: true});
        else {
            this.setState({showLoginButton: true});
            this.props.updateLoginInfo({loginStatus:false, userEmail:""});
            this.props.updateCentralContent(CENTRAL_CONTENT)
        }
    }

    hideLoginPage=()=>{
        this.setState({showLoginPage: false,loginFailedMessage:false});
    }

    hideOutLoginFailedMessage=()=>{
        this.setState({loginFailedMessage:false});
    }

    onSubmitTheForm=()=>{
        let status = true;
        if( status ) this.setState({showLoginButton:false,showLoginPage: false});
        else this.setState({showLoginPage: true,loginFailedMessage:true});
        this.props.updateLoginInfo({loginStatus:true, userEmail: $("#emailId").val()});
        this.props.updateCentralContent(LOGIN_INFO)
    }

    render() {
        return (
            <div>
                {
                    this.state.showLoginPage == true &&
                    <div id="login-page">
                        <div id="central-login-form"  style={{ top: (window.innerHeight-250)/2, left: (window.innerWidth-450)/2}}>
                            <div style={{float:"right", marginRight:0}} onClick={()=>this.hideLoginPage()}>
                                <img style={{display: 'block', width: 20, height: 20}}
                                     className="d-block w-100"
                                     src={CloseButton}
                                     alt="Image One"
                                />
                            </div>
                            <div style={{ clear:"both"}}></div>
                            <div id="login-form-div"  style={{marginLeft:90, marginTop: 15, borderRadius: 12, borderWidth:5, borderColor:"black" ,width:250, height: 200}}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="text" id="emailId" placeholder="Enter email or Mobile" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" id="passwordId" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" id="checkboxId" label="Is it first time for you ?" />
                                    </Form.Group>
                                    <Button variant="primary" onClick={()=>this.onSubmitTheForm()}>
                                        Submit
                                    </Button>
                                    {
                                        this.state.loginFailedMessage == true &&
                                        <div style={{marginTop:13, marginLeft:0, alignItems:"center"}}>
                                            <div style={{clear:"both"}}></div>
                                            <Badge bg="danger">
                                               You have entered wrong password
                                            </Badge>
                                            <div style={{float:"right", marginTop:4}} onClick={()=>this.hideOutLoginFailedMessage()}>
                                                <img style={{display: 'block', width: 20, height: 20}}
                                                     src={loginFailedErrMsg}
                                                     alt="Image One"
                                                />
                                            </div>
                                        </div>
                                    }
                                </Form>
                            </div>
                        </div>
                    </div>
                }
                {
                    <div>
                        <div style={{
                            height: 120, width: window.outerWidth, textAlign: "center",
                            backgroundColor: "#1F384D", backgroundImage: {Fight4EduWall}
                        }}>
                            <img src={F4EWithName} style={{
                                height: 100,
                                width: 210,
                                marginLeft: (window.outerWidth - 970) / 2,
                                marginTop: 13
                            }}/>
                            <div style={{float: "right", marginTop: 85, marginRight: 3}}>
                                <img style={{display: 'block', width: 30, height: 30}}
                                     className="d-block w-100"
                                     src={this.state.showLoginButton == true ? Login : Logout }
                                     alt="Image One"
                                     onClick={()=>this.showLoginPageAndLogout()}
                                />
                            </div>
                        </div>

                        {/* <div style={{ height: 1, marginTop:0, width:window.outerWidth, textAlign:"center",
                        backgroundColor: "white"}}>
                    </div>
                    <div style={{height:30, backgroundColor: "#1F384D", color:"#AAB7B8", fontFamily: "Times New Roman", fontSize:20, textAlign:"center"}}>
                        <div id="demo-1">
                            <h3>Education is power to build yourself but the knowledge is material to define yourself - Aditya Patel ( B.Tech - CSE )</h3>
                        </div>

                        <RandomTextGenerator
                            charList={['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']}
                            text={'Education is power to build yourself but the knowledge is material to define yourself - Aditya Patel ( B.Tech - CSE )'}
                            interval={30}
                            timePerChar={30}
                        />
                    </div>*/}
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


const mapDispatchToProps=dispatch=>({
    updateLoginInfo:data=>dispatch(updateLoginInfo(data)),
    updateCentralContent:data=>dispatch(updateCentralContent(data))
})

const mapStateToProps=state=>({
    centralContent: state.deskReducer.centralContent,
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);