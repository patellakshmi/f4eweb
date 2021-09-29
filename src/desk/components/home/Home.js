import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import  "../../css/HomeStyle.css";
import CentralContent from "../CentralContent";
import EductionStruct from "../EductionStruct";
import AdmissionNotice from "../AdmissionNotice";
import ResultAndAward from "../ResultAndAward";
import ExcellentPerformer from "../ExcellentPerformer";
import ClassesAndTimeTable from "../ClassesAndTimeTable";
import F4EScholarships from "../F4EScholarships";
import {
    ADMISSION_NOTICE,
    CENTRAL_CONTENT,
    CLASSES_TIME_TABLE,
    EXCELLENT_PERFORMER, F4E_SCHOLARSHIPS, GENIUS_OF_MONTH,
    RESULT_AWARD, F4E_COURSES, LOGIN_INFO, USER_INFO
} from "../../constants/ComponentConst";
import {updateCentralContent} from "../../actions/Actions";
import GeniusOfMonth from "../GeniusOfMonth";
import UserHome from "../UserHome";
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from "react-cookie";


class Home extends  Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.props.updateCentralContent(( cookies.get('f4e_auth') != null ) ? USER_INFO: CENTRAL_CONTENT);
    }

    scrollUp=()=>{
        window.scroll(0,150);
        return true;
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Header/>
                <div style={{ backgroundColor:"red"}}>
                    <div style={{float:"left"}}>
                        { this.props.centralContent != F4E_COURSES && <Sidebar/> }
                    </div>
                    <div id="central-container-panel" style={{float:"left"}}>
                        { ( this.props.centralContent === USER_INFO ) && <UserHome/> }
                        { this.props.centralContent === LOGIN_INFO && <UserHome/> }
                        { this.props.centralContent === F4E_SCHOLARSHIPS && <F4EScholarships/>}
                        { this.props.centralContent === ADMISSION_NOTICE && <AdmissionNotice/>}
                        { this.props.centralContent === CENTRAL_CONTENT && <CentralContent/>}
                        { this.props.centralContent === CLASSES_TIME_TABLE && <ClassesAndTimeTable/>}
                        { this.props.centralContent === RESULT_AWARD && <ResultAndAward/>}
                        { this.props.centralContent === GENIUS_OF_MONTH && <GeniusOfMonth/>}
                        { this.props.centralContent === EXCELLENT_PERFORMER && <ExcellentPerformer/>}

                    </div>
                </div>
                <div id={"main-contain"} style={{clear:"both"}}>
                    <EductionStruct/>
                </div>
                <div style={{float:"left"}}>
                    <Footer/>
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
      loginInfo: state.deskReducer.loginInfo
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Home));