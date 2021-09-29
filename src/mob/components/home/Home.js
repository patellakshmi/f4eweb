import React, {Component} from "react";
import {connect} from "react-redux";
import Header from "../header/Header";
import {
    ADMISSION_NOTICE,
    CENTRAL_CONTENT,
    CLASSES_TIME_TABLE, EXCELLENT_PERFORMER, F4E_COURSES,
    F4E_SCHOLARSHIPS, GENIUS_OF_MONTH, RESULT_AWARD, LOGIN_INFO,USER_INFO
} from "../../constants/ComponentConst"
import F4EScholarships from "../F4EScholarships"
import AdmissionNotice from "../AdmissionNotice";
import CentralContent from "../CentralContent";
import ClassesAndTimeTable from "../ClassesAndTimeTable";
import ResultAndAward from "../ResultAndAward";
import GeniusOfMonth from "../GeniusOfMonth";
import ExcellentPerformer from "../ExcellentPerformer";
import Navbar from "../navbar/Navbar";
import {updateCentralContent} from "../../../desk/actions/Actions";
import Footer from "../../components/footer/Footer";
import EductionStruct from "../EductionStruct";
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

    render() {
        return (
            <div>
                <Header/>
                <Navbar style={{zIndex:10000}}></Navbar>
                <div style={{float:"left"}}>
                    { ( this.props.centralContent === USER_INFO ) && <UserHome/>}
                    { this.props.centralContent === LOGIN_INFO && <UserHome/>}
                    { this.props.centralContent === F4E_COURSES && <EductionStruct/>}
                    { this.props.centralContent === F4E_SCHOLARSHIPS && <F4EScholarships/>}
                    { this.props.centralContent === ADMISSION_NOTICE && <AdmissionNotice/>}
                    { this.props.centralContent === CENTRAL_CONTENT && <CentralContent/>}
                    { this.props.centralContent === CLASSES_TIME_TABLE && <ClassesAndTimeTable/>}
                    { this.props.centralContent === RESULT_AWARD && <ResultAndAward/>}
                    { this.props.centralContent === GENIUS_OF_MONTH && <GeniusOfMonth/>}
                    { this.props.centralContent === EXCELLENT_PERFORMER && <ExcellentPerformer/>}
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
    patel:console.log(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Home));