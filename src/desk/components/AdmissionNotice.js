import React, {Component} from 'react';
import RTHome from "../../img/home/ReturnHome.png";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {Card, FormControl, InputGroup, Table} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";
import {ADMISSION_NOTICE} from "../../constants/ADMISSION_NOTICE";

class AdmissionNotice extends  Component{

    getAdmissionDetail=()=>{
        let rows = [];
        for (let i = 0; i < ADMISSION_NOTICE.length; i++) {
            let column = [];
            for(let j = 0; j < 7; j++){
                let localTD
                switch (j){
                    case 0:  localTD = <td>{i+1}</td>; break;
                    case 1:  localTD = <td>{ADMISSION_NOTICE[i].code}</td> ; break;
                    case 2:  localTD = <td>{ADMISSION_NOTICE[i].name}</td> ; break;
                    case 3:  localTD = <td>{ADMISSION_NOTICE[i].field}</td> ; break;
                    case 4:  localTD = <td>{ADMISSION_NOTICE[i].who}</td> ; break;
                    case 5:  localTD = <td>{ADMISSION_NOTICE[i].date}</td> ; break;
                    case 6:  localTD = <td>{ADMISSION_NOTICE[i].detail}</td> ; break;
                    default: localTD = <td>j</td>; break;
                }

                column.push(localTD);
            }

            let localRow = <tr>{column}</tr>
            rows.push(localRow);
        }
        let tableHead = <thead>
        <tr>
            <th>#</th>
            <th>Course-Code</th>
            <th>Course-Name</th>
            <th>Field</th>
            <th>WhoCanLearn</th>
            <th>Last Date</th>
            <th>Detail</th>
        </tr>
        </thead>
        let tableBody =  <tbody style={{overflowY:true}}>{rows}</tbody>
        let tableMain = <Table  responsive striped borderless hover>{tableHead}{tableBody}</Table>
        return tableMain;

    }

    wow=(result)=>{
      console.log("Selected:"+result) ;
    }

    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,
                marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "0px 0px 8px black"}}>
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
                        <Dropdown id="result-select-button" style={{marginTop:0, float:"right"}}>
                            <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                                Select Res
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onSelect={()=>this.wow("ACTION-1")}>Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onSelect={()=>this.wow("ACTION-2")}>Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onSelect={()=>this.wow("ACTION-3")}>Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <InputGroup style={{width:200, float:"right", marginRight:5}} >
                            <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                            <FormControl
                                placeholder="CourseCode"
                                aria-label="CourseCode"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                        <div id="clearer" style={{clear:"both"}}>
                        </div>

                        <div id="table-container"  style={{marginTop:5}}>
                            <div id="container"  style={{overflow:"scroll", height: window.innerHeight*.7}}>
                                <Card>
                                    <Card.Header>
                                        <Card.Text style={{fontSize:16, fontFace:"bold"}}>
                                            ADMISSION
                                        </Card.Text>
                                    </Card.Header>
                                    <Card.Body>
                                        {this.getAdmissionDetail()}
                                    </Card.Body>
                                </Card>
                            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(AdmissionNotice);