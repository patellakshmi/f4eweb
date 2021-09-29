import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {connect} from "react-redux";
import ImageScroller from "../ImageScroller";
import F4EObjective from "../F4EObjective";
import "./NavbarStyle.css";
import {updateCentralContent} from "../../../desk/actions/Actions";
import {ADMISSION_NOTICE, F4E_COURSES, F4E_SCHOLARSHIPS, RESULT_AWARD} from "../../constants/ComponentConst";
import {CLASSES_TIME_TABLE, EXCELLENT_PERFORMER} from "../../../desk/constants/ComponentConst";
import {LOGIN_INFO} from "../../constants/Constants";
import {instanceOf} from "prop-types";
import {withCookies, Cookies} from "react-cookie";

let toggle = true;
let NAV_COLORS_CODE=["#85C1E9"];
let NAV_COLORS_CODE_SIZE = 1;
const NAV_NAMES = new Map();
NAV_NAMES.set(0, [LOGIN_INFO, "User Page"]);
NAV_NAMES.set(1, [F4E_COURSES, "Courses Details"]);
NAV_NAMES.set(2, [F4E_SCHOLARSHIPS, "F4E-Scholarships"]);
NAV_NAMES.set(3, [CLASSES_TIME_TABLE, "Time & Tables"]);
NAV_NAMES.set(4, [ADMISSION_NOTICE, "Admission Notice"]);
NAV_NAMES.set(5, [EXCELLENT_PERFORMER, "Excellent Performer"]);
NAV_NAMES.set(6, [RESULT_AWARD, "Result & Award"]);

class Navbar extends Component{

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        window.addEventListener("click",(e)=>this.detectMouseClickArea(e))
        this.detectMouseClickArea = this.detectMouseClickArea.bind(this);
        const { cookies } = props;
        this.state ={
            showUserDetailPage:cookies.get('f4e_auth') != null ? true: false
        }
    }

    detectMouseClickArea(e){
        //below function stop double call of this function after click
        e.stopImmediatePropagation();
        if (document.getElementById('navigation_bar').contains(e.target)){
            if( toggle === true) document.getElementById("nav-item").style.display = "inline-block";
            else document.getElementById("nav-item").style.display = "none";
        } else{
            document.getElementById("nav-item").style.display = "none";
        }
        toggle = !toggle;
    }


    getNavList=()=>{
        let navList = []

        if( this.props.loginInfo.loginStatus == true || this.state.showUserDetailPage){
            let navListItem = <li className="nav-li-item" style={{marginTop: 90}}
                              onClick={() => this.props.updateCentralContent(NAV_NAMES.get(0)[0])}>
                <div className="nav-li-element-detail" style={{backgroundColor: NAV_COLORS_CODE[0], fontFamily: "Arial, Helvetica, sans-serif"}}>
                    {NAV_NAMES.get(0)[1]}
                </div>
            </li>;
            navList.push(navListItem);
        }


        for(let j = 1; j < NAV_NAMES.size; j++){
            let navListItem;
            if( j == 1) {
                let marginTop={ marginTop: 90}

                if( this.props.loginInfo.loginStatus == true || this.state.showUserDetailPage ) marginTop.marginTop = 0;

                navListItem = <li className="nav-li-item" style={marginTop}
                                  onClick={() => this.props.updateCentralContent(NAV_NAMES.get(j)[0])}>
                    <div className="nav-li-element-detail" style={{
                        backgroundColor: NAV_COLORS_CODE[j % NAV_COLORS_CODE_SIZE],
                        fontFamily: "Arial, Helvetica, sans-serif"
                    }}>
                        {NAV_NAMES.get(j)[1]}
                    </div>
                </li>;

            }else{
                navListItem = <li className="nav-li-item" style={{marginTop: 0}}
                                  onClick={() => this.props.updateCentralContent(NAV_NAMES.get(j)[0])}>
                    <div className="nav-li-element-detail" style={{backgroundColor: NAV_COLORS_CODE[j%NAV_COLORS_CODE_SIZE], fontFamily: "Arial, Helvetica, sans-serif"}}>
                        {NAV_NAMES.get(j)[1]}
                    </div>
                </li>;
            }
            navList.push(navListItem);
        }
        return navList;
    }

    render() {
        return (
           <div id="humBerger">
               <div id="navigation_bar" className="navigation">
                   <div id="menu" style={{top:5, left:5, position: "absolute"}}>
                       <div id = "bar1" className="bar"></div>
                       <div id = "bar2" className="bar"></div>
                       <div id = "bar3" className="bar"></div>
                       <div id = "bar4" className="bar"></div>
                   </div>
                   <ul className="nav-item" id="nav-item" style={{width:window.innerWidth/2, height:window.innerHeight }} >
                       {
                           this.getNavList()
                       }
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
    centralContent: state.mobReducer.centralContent,
    loginInfo: state.mobReducer.loginInfo,
})

export default connect(mapStateToProps,mapDispatchToProps)(withCookies(Navbar));
