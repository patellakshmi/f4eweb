import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import {connect} from 'react-redux';
import NoticeBoard from "../../../img/NoticeWW.png";
import ClassRoom from "../../../img/ClassRoom.jpeg";
import {updateBook, updateCentralContent} from "../../actions/Actions";
import {
    ADMISSION_NOTICE,
    CLASSES_TIME_TABLE,
    EXCELLENT_PERFORMER, F4E_COURSES, F4E_SCHOLARSHIPS,
    GENIUS_OF_MONTH,
    RESULT_AWARD
} from "../../constants/ComponentConst";
import RTHome from "../../../img/home/ReturnHome.png";
import ProfilePhoto from "../../../img/home/Profile-ICon.png";
import {CENTRAL_CONTENT, LOGIN_INFO} from "../../constants/Constants";
import RandomTextGenerator from 'react-scrolling-text';

class Sidebar extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            centralContainerHeightChanged : false
        };
    }

    getHeightOfCentralContainer=()=>{
        return document.getElementById("central-container-panel").getBoundingClientRect().height
    }

    render() {
        console.log(this.props);
        return (
            <div style={{ width:260, height:this.getHeightOfCentralContainer, alignContent:"center",
                marginTop:2, marginBottom:2, padding:5, alignItems:"center", position:"relative",borderRadius:2
            }} >
                {
                    this.props.loginInfo.loginStatus == false &&
                    <div style={{
                        width: 250,
                        height: 70,
                        boxShadow: "2px 2px 5px black",
                        backgroundColor: "white",
                        borderRadius: 5,
                        backgroundImage: `url(${NoticeBoard})`
                    }}>
                        <div style={{float: "right", marginTop: 22, marginRight: 10}}>
                            <img style={{display: 'block', width: 30, height: 30}}
                                 className="d-block w-100"
                                 src={RTHome}
                                 alt="Image One"
                                 onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                            />
                        </div>
                        <h4 style={{
                            textAlign: "center",
                            paddingTop: 20,
                            font: "arial",
                            color: "royalblue",
                            textShadow: "1px 1px black"
                        }}>Board</h4>
                    </div>
                }

                {
                    this.props.loginInfo.loginStatus == true &&
                    <div style={{
                        width: 250,
                        height: 70,
                        boxShadow: "2px 2px 5px black",
                        backgroundColor: "white",
                        borderRadius: 5,
                        backgroundImage: `url(${NoticeBoard})`
                    }}>
                        <div style={{float: "right", marginTop: 22, marginRight: 10}}>
                            <img style={{display: 'block', width: 30, height: 30}}
                                 className="d-block w-100"
                                 src={ProfilePhoto}
                                 alt="Image One"
                                 onClick={() => this.props.updateCentralContent(LOGIN_INFO)}
                            />
                        </div>
                        <h4 style={{
                            textAlign: "center",
                            paddingTop: 20,
                            font: "arial",
                            color: "royalblue",
                            textShadow: "1px 1px black"
                        }}>{this.props.loginInfo.userEmail}</h4>
                    </div>
                }

                <div style={{ width: 250, marginTop:5, boxShadow: "2px 2px 5px black",backgroundColor:"white", borderRadius:5, backgroundImage:`url(${ClassRoom})` }}>
                    <ul style={{paddingTop: 10, paddingBottom:80}}>
                        <li onClick={()=>this.props.updateCentralContent(F4E_COURSES)}  style={{ paddingTop: 10}}><Button variant="outline-info">Courses Details</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(F4E_SCHOLARSHIPS)}  style={{ paddingTop: 10}}><Button variant="outline-primary">Scholarships</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(ADMISSION_NOTICE)}  style={{ paddingTop: 10}}><Button variant="outline-secondary">Admission Notice</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(CLASSES_TIME_TABLE)} style={{ paddingTop: 10}}><Button variant="outline-warning">Time Table</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(RESULT_AWARD)} style={{ paddingTop: 10}}><Button variant="outline-info">Result & Award</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(GENIUS_OF_MONTH)}  style={{ paddingTop: 10}}><Button variant="outline-success">Genius Of months</Button></li>
                        <li onClick={()=>this.props.updateCentralContent(EXCELLENT_PERFORMER)}  style={{ paddingTop: 10}}><Button variant="outline-danger">Excellent-Performer</Button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    updateCentralContent:data=>dispatch(updateCentralContent(data))
})

const mapStateToProps=state=>({
    loginInfo:state.deskReducer.loginInfo
})

export default connect(mapStateToProps,mapDispatchToProps)(Sidebar);
