import React, {Component} from 'react';
import RTHome from "../../img/ReturnHome.png";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {Dropdown, Table, Col, Row} from "react-bootstrap";

class GeniusOfMonth extends  Component{

    getAdmissionDetail=()=>{
        let rows = [];
        for (let i = 0; i < 50; i++) {
            let column = [];
            for(let j = 0; j < 7; j++){
                let localTD
                if(j == 0 )
                    localTD = <td style={{fontSize:7}}>{i+1}</td>
                else
                    localTD = <td style={{fontSize:7}}>{j}</td>

                column.push(localTD);
            }

            let localRow = <tr>{column}</tr>
            rows.push(localRow);
        }
        let tableHead = <thead>
        <tr>
            <th style={{fontSize:7}}>#</th>
            <th style={{fontSize:7}}>Course-Code</th>
            <th style={{fontSize:7}}>Course-Name</th>
            <th style={{fontSize:7}}>Field</th>
            <th style={{fontSize:7}}>WhoCanLearn</th>
            <th style={{fontSize:7}}>Last Date</th>
            <th style={{fontSize:7}}>Detail</th>
        </tr>
        </thead>
        let tableBody =  <tbody style={{overflowY:true, height:200 }}>{rows}</tbody>
        let tableMain = <Table style={{ height:500}} responsive striped borderless hover size="sm">{tableHead}{tableBody}</Table>
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
                    <div><h5 style={{fontSize:10, fontFace:"bold"}}>Admission</h5></div>
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


export default connect(mapStateToProps,mapDispatchToProps)(GeniusOfMonth);