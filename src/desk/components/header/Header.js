import React, {Component} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import "./ScrollText.css";
import "./LoginPage.css";
import Login from "../../../img/home/login.png";
import Logout from "../../../img/home/logout.png";
import CloseButton from "../../../img/home/closebutton.png";

import {Form, Button} from "react-bootstrap";
import $ from 'jquery';
import {Card,Badge} from "react-bootstrap";
import {updateCentralContent, updateLoginInfo} from "../../actions/Actions";
import {connect} from "react-redux";
import {instanceOf} from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import * as ApiUrl from "../../../api-url/ApiUrl";
import axios from "axios";


class Header extends  Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state ={
            f4e_auth: cookies.get('f4e_auth') || null,
            showLoginButton:cookies.get('f4e_auth') != null ? cookies.get('f4e_auth'): true,
            showLoginPage: false,
            loginInfo: { errorStatus:false, msg:""},
            signupInfo: { errorStatus:false, msg:""}
        }

    }

    /**
     * This function executes when login/logout button will be pressed
     * LoginAndLogoutButton action performing function
     */
    doActionOnLoginAndLogout=()=>{
        if( this.state.showLoginButton == true ){
            this.setState({showLoginPage: true});
        }else{
            this.props.cookies.remove("f4e_auth");
            this.setState({showLoginButton: true});
        }
    }


    hideLoginAndLogoutPage=()=>{
        this.setState({showLoginPage: false,loginInfo: {errorStatus:false, msg:""}});
    }

    hideOutLoginFailedMessage=()=>{
        this.setState({loginInfo: {errorStatus:false, msg:""}});
    }

    onSubmitTheForm=()=>{
        let checkboxValue = $('#checkboxId').prop('checked');
        let userId = document.getElementById("userId").value;
        let password = document.getElementById("password").value;

        if( checkboxValue ){
            axios.post(ApiUrl.SIGNUP_API, {
                username: userId,
                password: password
            }).then(response=> {
                let data = response.data.status;
                console.log("Staus:"+data);
                if (response.status === 200) {
                    this.props.cookies.set('f4e_auth', response.headers.f4e_auth,{path:"/"} );
                    this.setState({showLoginPage: false});
                    this.setState({showLoginButton: false});
                }else { throw new Error("Bad response from server"); }
            }).catch((err)=>{
                this.setState({signupInfo: {errorStatus:true, msg:"wow"}});
                setTimeout(() => {
                    console.log("Calling time out ");
                    this.setState({signupInfo: {errorStatus:false, msg:"wow"}});
                }, 3000)
            });

        }else {
            axios.post(ApiUrl.LOGIN_API, {
                username: userId,
                password: password
            }).then(response=> {
                let data = response.data.status;
                console.log("Staus:"+data);
                if (response.status === 200) {
                    console.log("Cookies is going to set");
                    this.props.cookies.set('f4e_auth', response.headers.f4e_auth,{path:'/'} );
                    this.setState({showLoginPage: false});
                    this.setState({showLoginButton: false});
                }else { throw new Error("Bad response from server"); }
            }).catch((err)=>{
                this.setState({loginInfo:{errorStatus:true, msg:"wow"}});
                setTimeout(() => {
                    console.log("Calling time out ");
                    this.setState({loginInfo:{errorStatus:false, msg:"wow"}});
                }, 3000)
            });
        }
    }

    giveErrorMsgDiv=(loginInfo, signupInfo)=>{

        let displayErrorMsg = "Sorry for inconvenient, try after sometimes";
        if( loginInfo.errorStatus == true){
            displayErrorMsg = "Please use correct username & password";
        }else if(signupInfo.errorStatus == true ){
            displayErrorMsg = "Sorry for inconvenient, try after sometimes";
        }else{
            return;
        }

        let body =  <div style={{marginTop:13, marginLeft:0, alignItems:"center"}}>
            <div style={{clear:"both"}}></div>
            <Badge bg="danger">
                {displayErrorMsg}
            </Badge>
            <div style={{float:"right", marginTop:4}} onClick={()=>this.hideOutLoginFailedMessage()}>
            </div>
        </div>;

        return body;

    }


    render() {
        return (
            <div>
                {
                    this.state.showLoginPage == true &&
                    <div id="login-page">
                        <div id="central-login-form"  style={{ top: (window.innerHeight-250)/2, left: (window.innerWidth-450)/2}}>
                            <div style={{float:"right", marginRight:0}} onClick={()=>this.hideLoginAndLogoutPage()}>
                                <img style={{ width: 20, height: 20}}
                                     src={CloseButton}
                                     alt="Image One"
                                />
                            </div>
                            <div style={{ clear:"both"}}></div>
                            <div id="login-form-div"  style={{marginLeft:90, marginTop: 15, borderRadius: 12, borderWidth:5, borderColor:"black" ,width:250, height: 200}}>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control id="userId" type="text" placeholder="Enter email or Mobile" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control id="password" type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check  id="checkboxId" type="checkbox" label="Is it first time for you ?" />
                                    </Form.Group>
                                    <Button variant="primary" onClick={()=>this.onSubmitTheForm()}>
                                        Submit
                                    </Button>
                                    {
                                        this.giveErrorMsgDiv(this.state.loginInfo, this.state.signupInfo)
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
                                <img style={{width: 70, height: 30}}
                                     src={this.state.showLoginButton == true ? Login : Logout }
                                     alt="Image One"
                                     onClick={()=>this.doActionOnLoginAndLogout()}
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


const mapDispatchToProps=dispatch=>({
    updateLoginInfo:data=>dispatch(updateLoginInfo(data)),
    updateCentralContent:data=>dispatch(updateCentralContent(data))
})

const mapStateToProps=state=>({
    centralContent: state.deskReducer.centralContent,
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Header));