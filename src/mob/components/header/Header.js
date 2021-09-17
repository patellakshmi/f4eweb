import React, {Component, useEffect} from 'react';
import Fight4EduWall from '../../../img/social-media/FacebookWall.png';
import F4EWithName from '../../../img/logos/F4EWithName.png';
import Logout from "../../../img/home/logout.png";
import Login from "../../../img/home/login.png";
import CloseButton from "../../../img/home/closebutton.png";

import {CENTRAL_CONTENT} from "../../constants/Constants";
import {Form, Button, Badge} from "react-bootstrap";
import $ from "jquery";
import {LOGIN_INFO} from "../../../desk/constants/ComponentConst";
import loginFailedErrMsg from "../../../img/home/loginFailedErrMsg.png";
import {updateCentralContent, updateLoginInfo} from "../../actions/Actions";
import {connect} from "react-redux";
import axios from "axios";

class Header extends  Component{

    constructor() {
        super();
        this.state ={
            showLoginButton:true,
            showLoginPage: false,
            loginFailedMessage: false,
            signupFailedMessage: false
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

   fetchFunction=()=>{

    }



    onSubmitTheForm=()=>{
        let status = true;
        var checkboxValue = $('#checkboxId').prop('checked');
        let isFirstTime = document.getElementById("checkboxId").value;
        let userId = document.getElementById("userId").value;
        let password = document.getElementById("password").value;

        console.log("UserId: "+userId.trim());
        console.log("Password: "+password.trim());
        console.log("isFirstTime: "+isFirstTime);
        console.log("checkboxValue: "+checkboxValue);


        if( checkboxValue ){
            fetch('/f4e/public/v1/signup', {
                mode:"no-cors",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: userId, password: password})
            }).then(response => response.json())
                .then(data => console.log("DATA:"+data) );

        }else {
             fetch('/f4e/public/v1/login', {
                mode:"no-cors",
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: userId, password: password})
            }) .then((response) => {
                 if (response.status == 200) {   // *** This can be just `if (response.ok) {`
                     console.log(response);      // *** This is premature
                     return response.json();
                 }
                 else
                 {
                     throw `error with status ${response.status}`;
                 }
             })
                 .then(assignment => {               // ***
                     // ...use `assignment` here...  // ***
                 })                                  // ***
                 .catch((exception) => {
                     console.log(exception);
                 });
        }


    }

    render() {
        return (
            <div>
                {
                    this.state.showLoginPage == true &&
                    <div id="login-page">
                        <div id="central-login-form"  style={{ top: (window.innerHeight-230)/2, left: (window.innerWidth-350)/2, width: 350, height: 230}}>
                            <div style={{float:"right", marginRight:0}} onClick={()=>this.hideLoginPage()}>
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
                                        this.state.loginFailedMessage == true &&
                                        <div style={{marginTop:13, marginLeft:0, alignItems:"center"}}>
                                            <div style={{clear:"both"}}></div>
                                            <Badge bg="danger">
                                                You have entered wrong password
                                            </Badge>
                                            <div style={{float:"right", marginTop:4}} onClick={()=>this.hideOutLoginFailedMessage()}>
                                                <img style={{ width: 20, height: 20}}
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
                                     onClick={()=>this.showLoginPageAndLogout()}
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
    centralContent: state.mobReducer.centralContent,
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);