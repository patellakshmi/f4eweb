import React, {Component} from 'react';
import RTHome from "../../img/home/ReturnHome.png";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {Card, Col, FormControl, InputGroup, Row, Table} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";
import {ADMISSION_NOTICE} from "../../constants/ADMISSION_NOTICE";

class UserHome extends  Component{


    render() {
        return (
            <div style={{ width:window.outerWidth, alignContent:"center",
                marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center",
                boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
            }} >

                <Row className="justify-content-xm-center">
                    <Col xs={4}>
                        <div style={{float:"right", top:-40, right:10, position:"absolute"}}>
                            <img width="30" height="30"
                                 src={RTHome}
                                 alt="Image One"
                                 onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                            />
                        </div>
                    </Col>
                </Row>


                <div style={{clear:"both"}}></div>

                <div id="separator" style={{clear:"both"}}></div>
                <div id="user-persona-page"  style={{height: window.innerHeight*.7}}>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    updateCentralContent:data=>dispatch(updateCentralContent(data))
})

const mapStateToProps=state=>({
    centralContent: state.mobReducer.centralContent,
    loginInfo: state.mobReducer.loginInfo,
    patel:console.log(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);