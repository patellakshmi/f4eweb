import React, {Component, useEffect} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import Logout from "../../../img/home/logout.png";
import Login from "../../../img/home/login.png";
import CloseButton from "../../../img/home/closebutton.png";

import {CENTRAL_CONTENT} from "../../constants/Constants";
import {Form, Button, Badge} from "react-bootstrap";
import $ from "jquery";
import * as ApiUrl from "../../../api-url/ApiUrl";
import loginFailedErrMsg from "../../../img/home/loginFailedErrMsg.png";
import {updateCentralContent, updateF4EAuth, updateLoginInfo} from "../../actions/Actions";
import {connect} from "react-redux";
import axios from "axios";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

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
            loginFailedMessage: false,
            signupFailedMessage: false

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
        this.setState({showLoginPage: false,loginFailedMessage:false});
    }

    hideOutLoginFailedMessage=()=>{
        this.setState({loginFailedMessage:false});
    }

    onSubmitTheForm=()=>{
        let status = true;
        let checkboxValue = $('#checkboxId').prop('checked');
        let isFirstTime = document.getElementById("checkboxId").value;
        let userId = document.getElementById("userId").value;
        let password = document.getElementById("password").value;


        let myauth = null;
        if( this.props.cookies.get('f4e_auth') != null)
            myauth = this.props.cookies.get('f4e_auth');


        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }

        if( checkboxValue ){

            axios.post(ApiUrl.SIGNUP_API, {
                username: userId,
                password: password
            }).then(response=> {
                if (response.status === 200) {
                    console.log("Cookies is going to set");
                    this.props.cookies.set('f4e_auth', response.headers.f4e_auth, );
                    this.setState({showLoginPage: false});
                    this.setState({showLoginButton: false});

                }else { throw new Error("Bad response from server"); }
            }).catch(err=>{
                this.setState({signupFailedMessage:true});
                setTimeout(() => {
                    this.setState({signupFailedMessage:false});
                }, 3000)
            });

        }else {

            axios.post(ApiUrl.LOGIN_API, {
                username: userId,
                password: password
            }).then(response=> {
                if (response.status === 200) {
                   this.props.updateF4EAuth(response.headers.f4e_auth);
                    console.log("Cookies is going to set");
                    this.props.cookies.set('f4e_auth', response.headers.f4e_auth, );
                    this.setState({showLoginPage: false});
                    this.setState({showLoginButton: false});
                }else{
                    throw new Error("Bad response from server");
                }
            }).catch(err=>{
                this.setState({loginFailedMessage:true});
                setTimeout(() => {
                    console.log("Calling time out ");
                    this.setState({loginFailedMessage:false});
                }, 3000)
            });
        }
    }

    giveErrorMsgDiv=(loginFailedMessage, signupFailedMessage)=>{

        let displayErrorMsg = "Sorry for inconvenient, try after sometimes";
        if( loginFailedMessage == true){
            displayErrorMsg = "Please user correct Username & Password";
        }else if(signupFailedMessage == true ){
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
                            <img style={{ width: 20, height: 20}}
                                 src={loginFailedErrMsg}
                                 alt="Image One"
                            />
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
                        <div id="central-login-form"  style={{ top: (window.innerHeight-230)/2, left: (window.innerWidth-350)/2, width: 350, height: 230}}>
                            <div style={{float:"right", marginRight:0}} onClick={()=>this.hideLoginAndLogoutPage()}>
                                <img style={{ width: 20, height: 20}}
                                     src={CloseButton}
                                     alt="Image One"
                                />
                            </div>
                            <div style={{ clear:"both"}}></div>
                            <div id="login-form-div"  style={{marginLeft:40, marginTop: 5, borderRadius: 12, borderWidth:5, borderColor:"black" ,width:250, height: 200}}>
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
                                        this.giveErrorMsgDiv(this.state.loginFailedMessage, this.state.signupFailedMessage)
                                    }
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
                                marginLeft: (window.outerWidth - 460) / 2,
                                marginTop: 13
                            }}/>
                            <div style={{float: "left", marginTop: 65, marginLeft: 10}}>
                                <img style={{display: 'block', width: 50, height: 20}}
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
    updateCentralContent:data=>dispatch(updateCentralContent(data)),
    updateF4EAuth:data=>dispatch(updateF4EAuth(data))
})

const mapStateToProps=state=>({
    centralContent: state.mobReducer.centralContent,
    f4e_auth: state.mobReducer.f4e_auth,
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Header));