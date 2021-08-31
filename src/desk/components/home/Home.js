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
    RESULT_AWARD,F4E_COURSES
} from "../../constants/ComponentConst";
import {updateCentralContent} from "../../actions/Actions";
import GeniusOfMonth from "../GeniusOfMonth";


class Home extends  Component{

    constructor(props) {
        super(props);
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
      patel:console.log(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);