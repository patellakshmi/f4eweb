import React, {Component} from 'react';
import RTHome from "../../img/home/ReturnHome.png";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {Card, FormControl, InputGroup, Table} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";
import {ADMISSION_NOTICE} from "../../constants/ADMISSION_NOTICE";

class UserHome extends  Component{


    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,
                marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "0px 0px 8px black"}}>
                <div style={{float:"right", marginTop:10, marginRight:10}}>
                    <img style={{ display: 'block', width: 30, height:30 }}
                         className="d-block w-100"
                         src={RTHome}
                         alt="Image One"
                         onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                    />
                </div>

                <div style={{clear:"both"}}></div>

                <div id="USER_HOME">
                    <div id="UserName" style={{marginLeft:200}}>
                        <h2>{this.props.loginInfo.userEmail}</h2>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    updateCentralContent:data=>dispatch(updateCentralContent(data))
})

const mapStateToProps=state=>({
    centralContent: state.deskReducer.centralContent,
    loginInfo: state.deskReducer.loginInfo,
    patel:console.log(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);