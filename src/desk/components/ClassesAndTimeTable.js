import React, {Component} from 'react';
import RTHome from "../../img/ReturnHome.png";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {Dropdown, Table,InputGroup,FormControl} from "react-bootstrap";

class classesAndTimeTable extends  Component{
    getTimeTableDetail=()=>{
        let rows = [];
        for (let i = 0; i < 4; i++) {
            let column = [];
            for(let j = 0; j < 5; j++){
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
            <th>Course-Code</th>
            <th>Course-Name</th>
            <th>Days</th>
            <th>Timing</th>
        </tr>
        </thead>
        let tableBody =  <tbody>{rows}</tbody>
        let tableMain = <Table responsive striped bordered hover>{tableHead}{tableBody}</Table>
        return tableMain;
    }
    wow=(result)=>{
        console.log("Selected:"+result) ;
    }
    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "0px 0px 8px black"}}>
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
                        <div id="tableHead" style={{textAlign:"left"}}>
                            <h3>Time Table</h3>
                        </div>
                        <div style={{overflow:"scroll", height: window.innerHeight*.7}}>
                            { this.getTimeTableDetail() }
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

export default connect(mapStateToProps,mapDispatchToProps)(classesAndTimeTable);