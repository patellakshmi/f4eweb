import React, {Component} from 'react';
import RTHome from "../../img/home/ReturnHome.png";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {Dropdown, Table, Form, Col, Row} from "react-bootstrap";
import {SCHOLARSHIPS} from "../../constants/SCHOLARSHIPS";

class ResultAndAward extends  Component{

    getAdmissionDetail=()=>{
        let rows = [];
        for (let i = 0; i < SCHOLARSHIPS.length; i++) {
            let column = [];
            for(let j = 0; j < 6; j++){
                let localTD
                localTD = <td style={{fontSize:7}}>{i+1}</td>;
                switch (j){
                    case 0:  localTD = <td style={{fontSize:7}}>{i+1}</td>; break;
                    case 1:  localTD = <td style={{fontSize:7, margin:0, padding:0}}>{SCHOLARSHIPS[i].name}</td> ; break;
                    case 2:  localTD = <td style={{fontSize:7, margin:0, padding:0}}>{SCHOLARSHIPS[i].minEligibility}</td> ; break;
                    case 3:  localTD = <td style={{fontSize:7, margin:0, padding:0}}>{SCHOLARSHIPS[i].award}</td> ; break;
                    case 4:  localTD = <td style={{fontSize:7, margin:0, padding:0}}>{SCHOLARSHIPS[i].date}</td> ; break;
                    case 5:  localTD = <td style={{fontSize:7, margin:0, padding:0}}>{SCHOLARSHIPS[i].detail}</td> ; break;
                    default: localTD = <td style={{fontSize:7, margin:0, padding:0}}>j</td>; break;
                }
                column.push(localTD);
            }

            let localRow = <tr>{column}</tr>
            rows.push(localRow);
        }
        let tableHead = <thead>
        <tr>
            <th style={{fontSize:7}}>#</th>
            <th style={{fontSize:7}}>Name</th>
            <th style={{fontSize:7}}>Min. Eligibility</th>
            <th style={{fontSize:7}}>Award</th>
            <th style={{fontSize:7}}>Coming Date</th>
            <th style={{fontSize:7}}>Detail</th>
        </tr>
        </thead>
        let tableBody =  <tbody style={{overflowY:true}}>{rows}</tbody>
        let tableMain = <Table responsive striped borderless hover size="sm">{tableHead}{tableBody}</Table>
        return tableMain;

    }

    wow=(result)=>{
        console.log("Selected:"+result) ;
    }

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
                <div id="table-container"  style={{marginTop:5}}>
                    <div><h5 style={{fontSize:10, fontFace:"bold"}}>Result & Award</h5></div>
                    <div id="container"  style={{overflow:"scroll", height: window.innerHeight*.7}}>
                        {
                            this.getAdmissionDetail()
                        }
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
    centralContent: state.mobReducer.centralContent,
    patel:console.log(state)
})


export default connect(mapStateToProps,mapDispatchToProps)(ResultAndAward);