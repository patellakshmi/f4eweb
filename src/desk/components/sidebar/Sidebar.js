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
import {instanceOf} from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import {USER_INFO} from "../../../mob/constants/ComponentConst";
import {Card, Col, Row} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import { FaCertificate } from "react-icons/fa";
import {SiMinds} from "react-icons/si";
import {FcSettings,FcRating,FcSupport,FcOvertime} from "react-icons/fc";
import { FaBattleNet } from "react-icons/fa";

class Sidebar extends  Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            centralContainerHeightChanged : false,
            showUserInfoButton:cookies.get('f4e_auth') != null ? true: false,
        };

        this.props.updateCentralContent(( cookies.get('f4e_auth') != null ) ? USER_INFO: CENTRAL_CONTENT);

    }

    getHeightOfCentralContainer=()=>{
        return document.getElementById("central-container-panel").getBoundingClientRect().height
    }

    changeThePage=()=>{
        console.log("::>>>>"+this.props.centralContent);
        if(this.props.centralContent == USER_INFO){
            this.props.updateCentralContent(CENTRAL_CONTENT);
        }else{
            this.props.updateCentralContent(USER_INFO);
        }
    }

    getLoginUserDetail =() =>{
        let userInfo = { "LoginID":"4UFSCT322","email":"lakshmi@gmail.com" };
        let userDetail = <Card>
                            <Card.Body>
                                <Table striped bordered hover style={{fontSize:6, margin:0, height:30}}>
                                    <tbody>
                                        <tr>
                                            <td>LoginID</td>
                                            <td>{userInfo.LoginID}</td>
                                        </tr>
                                        <tr>
                                            <td>LoginID</td>
                                            <td>{userInfo.LoginID}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>{userInfo.email}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
        return userDetail;
    }

    getLoginUserSpecificFeature=()=>{
        let items =[];
        let wowList =[{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"Certificate","icon":<FaCertificate style={{ height:30,width:30}}/> },{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"Tests","icon":<SiMinds style={{ height:30,width:30}}/> },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Ranks","icon":<FcRating style={{ height:30,width:30}}/> }, { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Setting","icon":<FcSettings style={{ height:30,width:30}}/> },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Help","icon":<FaBattleNet style={{ height:30,width:30}}/> },{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"TimeTable","icon":<FcOvertime style={{ height:30,width:30}}/> },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"TimeTable","icon":<FcOvertime style={{ height:30,width:30}}/> },{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"TimeTable","icon":<FcOvertime style={{ height:30,width:30}}/> },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"TimeTable","icon":<FcOvertime style={{ height:30,width:30}}/> }];
        for(let i = 0; i < wowList.length; i++ ){
            console.log("***"+wowList[i]);
            let button = <Col xs={4} onClick={()=>this.props.updateCentralContent(wowList[i].keyword)} >
                <div style={{marginTop:20, textAlign:"center"}}>
                    {wowList[i].icon}
                    <p style={{fontSize: 10,marginBottom:10,padding:0}}>{wowList[i].buttonName}</p>
                </div>
            </Col>;
            items.push(button);
        }
        return items;
    }

    getAllSlideBarButton=()=>{
        let items =[];
        let wowList =[{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"About F4E" },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"F4E Success" }, { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Scholar Exame" },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Contact" },
        { "keyword":"F4E_SCHOLARSHIPS","buttonName":"Download" },{ "keyword":"F4E_SCHOLARSHIPS","buttonName":"F4E Center" }
        ];
        for(let i = 0; i < wowList.length; i++ ){
            console.log("***"+wowList[i]);
            let button = <li onClick={()=>this.props.updateCentralContent(wowList[i].keyword)} >
                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid red"}}>
                                <p style={{fontSize: 10,margin:0,padding:0}}>{wowList[i].buttonName}</p>
                            </div>
                        </li>;
            items.push(button);
        }
        return items;
    }

    render() {
        console.log(this.props);
        return (
            <div style={{ width:260, height:this.getHeightOfCentralContainer, alignContent:"center",
                marginTop:2, marginBottom:2, padding:5, alignItems:"center", position:"relative"
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
                                 src={ this.props.centralContent == USER_INFO ?  RTHome :  RTHome}
                                 alt="Image One"
                                 onClick={ ()=>this.changeThePage() }
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

                {
                    (this.props.loginInfo.loginStatus  || this.state.showUserInfoButton )&&
                    <div style={{ width: 250, marginTop:5, boxShadow: "2px 2px 5px black",backgroundColor:"white", borderRadius:5, backgroundImage:`url(${ClassRoom})` }}>
                       <Row>
                            { this.getLoginUserSpecificFeature() }
                        </Row>
                    </div>
                }
                <div style={{ width: 250, marginTop:5, boxShadow: "2px 2px 5px black",backgroundColor:"white", borderRadius:5, backgroundImage:`url(${ClassRoom})` }}>
                    <ul style={{padding: 10, paddingBottom:50}}>
                        { this.getAllSlideBarButton() }
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
    loginInfo:state.deskReducer.loginInfo,
    centralContent:state.deskReducer.centralContent
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Sidebar));
