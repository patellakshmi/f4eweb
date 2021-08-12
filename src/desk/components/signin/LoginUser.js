import React, {Component} from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import CentralContent from "../home/CentralContent";
import Footer from "../footer/Footer";

class LoginUser extends  Component{
    render() {
        return (
            <div>
                <Header/>
                <div style={{float:"left"}}>
                    <Sidebar/>
                </div>
                <div style={{float:"right"}}>
                    <CentralContent/>
                </div>
                <div style={{float:"left"}}>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default LoginUser;