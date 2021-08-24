import React, {Component} from 'react';
import RTHome from "../../img/ReturnHome.png";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import UDEMY from "../../img/udemy.png";
import YOUTUBE from "../../img/youtube.png";
import {TableBody} from "@material-ui/core";

class F4EScholarships extends  Component{

    getScholarshipsDetail=()=>{
        let rows = [];
        for (let i = 0; i < 4; i++) {
            let column = [];
            for(let j = 0; j < 6; j++){
                let localTD
                if(j == 0 )
                    localTD = <td>{i+1}</td>
                else
                    localTD = <td>{j}</td>

                column.push(localTD);
            }

            let localRow = <tr>{column}</tr>
            rows.push(localRow);
        }
        let tableHead = <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Min. Eligibility</th>
                                <th>Award</th>
                                <th>Coming Date</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
        let tableBody =  <tbody>{rows}</tbody>
        let tableMain = <Table responsive striped bordered hover>{tableHead}{tableBody}</Table>
        return tableMain;
    }
    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,
                backgroundColor:"#85C1E9",marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "2px 2px 5px black"}}>
                <div style={{float:"right", marginTop:10, marginRight:10}}>
                    <img style={{ display: 'block', width: 30, height:30 }}
                         className="d-block w-100"
                         src={RTHome}
                         alt="Image One"
                         onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                    />
                </div>

                <div style={{clear:"both"}}></div>

                <div id="F4EScholarships">
                    <div id="container" style={{marginLeft:"10%", marginTop:"3%", width:"80%"}}>
                        <div id="tableHead" style={{textAlign:"left"}}>
                            <h3>Scholarship</h3>
                        </div>
                        <div style={{overflow:"scroll", height: window.innerHeight*.7}}>
                            { this.getScholarshipsDetail() }
                        </div>
                    </div>
                </div>

                <div>
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

export default connect(mapStateToProps,mapDispatchToProps)(F4EScholarships);