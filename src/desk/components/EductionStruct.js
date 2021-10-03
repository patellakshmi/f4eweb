import React, {Component} from 'react';
import {Card, Col, Row} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import YOUTUBE from "../../img/social-media/youtube.png";
import UDEMY from "../../img/social-media/udemy.png";
import {Table} from 'react-bootstrap'
import {ELEVENTH_CLASS_DATA} from "../../constants/ELEVENTH_CLASS_DATA";
import {TWELFTH_CLASS_DATA} from "../../constants/TWELFTH_CLASS_DATA";
import {
    ALL_STD,
    CURRENT_AFFAIRS,
    EIGHTH,
    ELEVENTH,
    NINTH,
    SEVENTH,
    SIXTH,
    TENTH,
    TWELFTH
} from "../constants/ClassLevelConst";
import {SIXTH_CLASS_DATA} from "../../constants/SIXTH_CLASS_DATA";
import {SEVENTH_CLASS_DATA} from "../../constants/SEVENTH_CLASS_DATA";
import {EIGHT_CLASS_DATA} from "../../constants/EIGHT_CLASS_DATA";
import {CURRENT_AFFAIRS_CLASS_DATA} from "../../constants/CURRENT_AFFAIRS_CLASS_DATA";
import RTHome from "../../img/home/ReturnHome.png";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {F4E_COURSES, USER_INFO} from "../constants/ComponentConst";
import axios from "axios";
import * as ApiUrl from "../../api-url/ApiUrl";

let ALL_STD_DATA;
const MAX_ROW = 5;
const NUM_OF_COLUMN = 4;
let NUM_OF_ROWS = 2;
let NUM_OF_COL_IN_LAST_ROW = 2;
let DATA;

const listOfStreamStd=new Set();

class EductionStruct extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            togglingDetail:false,
            details: new Array(MAX_ROW*NUM_OF_COLUMN),
            isLoading: true
        };
    }


    componentDidMount() {
        axios.get(ApiUrl.GET_COURSE).then(response=> {
            if (response.status === 200) {
                ALL_STD_DATA = response.data.data;
                DATA = ALL_STD_DATA;
                for(let i = 0; i < ALL_STD_DATA.length; i++){
                    let localData = ALL_STD_DATA[i];
                    listOfStreamStd.add(localData.streamStd);
                }
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                for(let i = 0; i < MAX_ROW*NUM_OF_COLUMN;i++){ this.state.details[i] = false; }
                this.setState({ isLoading: false });
            }else { throw new Error("Bad response from server"); }
        }).catch((err)=>{
            this.setState({signupInfo: {errorStatus:true, msg:err.response.data.message}});
            setTimeout(() => {
                this.setState({signupInfo: {errorStatus:false, msg:err.response.data.message}});
            }, 4000)
        });


    }

    giveAllSubjectWithButton=()=>{
        let myButton =[];
        listOfStreamStd.forEach(a => {
            let btn =  <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(a)}>
                <p style={{fontSize:9}}>{a}</p>
            </Button>;
            myButton.push(btn);
        })
        return myButton;
    }

    getMediaDetail=(i,j)=>{
        let columnData =[];
        if(DATA[i*NUM_OF_COLUMN+j].platformDetails.length!=0) {
            for (let k = 0; k < DATA[i * NUM_OF_COLUMN + j].platformDetails.length; k++) {
                let col = <Col xs={3}>
                    <Card.Link href={DATA[i * NUM_OF_COLUMN + j].platformDetails[k].courseUrl}>
                        <div style={{marginLeft: 0, marginTop: 10, marginRight: 0}}>
                            <img style={{width: 20, height: 20}}
                                 className="d-block w-100"
                                 src={DATA[i * NUM_OF_COLUMN + j].platformDetails[k].imageUrl}
                            />
                        </div>
                    </Card.Link>
                </Col>;
                columnData.push(col);
            }
        }else{
            let col = <Col xs={3}>
                <div style={{height:30}}></div>
            </Col>;
            columnData.push(col);
        }
        return columnData;
    }

    //Function is tested and verified
    giveSpecificStdData=(std)=>{
        let specificStdData =[];
        if( std === 'ALL_STD') return ALL_STD_DATA;
        for(let i = 0; i < ALL_STD_DATA.length; i++) {
            if(ALL_STD_DATA[i].streamStd == std ){
                specificStdData.push(ALL_STD_DATA[i]);
            }
        }
        return specificStdData;
    }

    //Function is tested and verified
    getDataForGivenStd = (std) =>{
        console.log(":::STD"+std);
        DATA = this.giveSpecificStdData(std);
        console.log(":::"+JSON.stringify(DATA));
        NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
        NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
        this.setState({ togglingDetail: !this.state.togglingDetail });
    }

    //Function is tested and verified
    toggleDetailField = (i,j) => {
        console.log("toggleDetailField");
        this.state.details[i*NUM_OF_COLUMN+j] = !this.state.details[i*NUM_OF_COLUMN+j];
        console.log(this.state.details[i*NUM_OF_COLUMN+j]);
        this.setState({ togglingDetail: !this.state.togglingDetail });
    }

    giveAllRow=()=>{
        let rows = [];
        for (let i = 0; i < NUM_OF_ROWS-1; i++) {
            let column = []
            for(let j = 0; j < 4; j++){
                column.push(
                    <Col xs={3}>
                    <Card style={{borderWidth:1, borderColor:"black", borderStyle:"dotted"}}>
                        { !this.state.details[i*NUM_OF_COLUMN+j] &&
                        <img style={{display: 'block', width: window.innerWidth, height: 150}}
                             className="d-block w-100"
                             src={DATA[i*NUM_OF_COLUMN+j].imageUrl}
                             alt="Image One"
                        />
                        }
                        {
                            this.state.details[i*NUM_OF_COLUMN+j] &&
                            <Card>
                                <Card.Body>
                                    <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                        <tbody>
                                            <tr>
                                                <td>Duration</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].duration+" "+DATA[i*NUM_OF_COLUMN+j].durationUnit}</td>
                                            </tr>
                                            <tr>
                                                <td>Mode</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].mode}</td>
                                            </tr>
                                            <tr>
                                                <td>Head</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].head != null?DATA[i*NUM_OF_COLUMN+j].head + " ("+DATA[i*NUM_OF_COLUMN+j].headEmail+" )":"- - -" }</td>
                                            </tr>
                                            <tr>
                                                <td>benefit</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].benefit}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        }
                        <Card.Body>
                            <Card.Title>{DATA[i*NUM_OF_COLUMN+j].name}</Card.Title>
                            <Card.Text style={{fontSize:11}}>
                                <Row className="justify-content-xm-center">
                                <Col xs={6}>
                                    {
                                        DATA[i*NUM_OF_COLUMN+j].streamStd != null && DATA[i*NUM_OF_COLUMN+j].streamStd != "0" &&
                                        <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid red"}}>
                                            <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i*NUM_OF_COLUMN+j].id}</p>
                                        </div>
                                    }
                                </Col>

                                <Col xs={6}>
                                    {
                                        DATA[i*NUM_OF_COLUMN+j].streamStd != null && DATA[i*NUM_OF_COLUMN+j].streamStd != "0" &&
                                        <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid red"}}>
                                            <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i*NUM_OF_COLUMN+j].streamStd}</p>
                                        </div>
                                    }
                                </Col>
                                </Row>
                            </Card.Text>

                            <div id="media-button">
                                <Row className="justify-content-xm-center">
                                    {
                                        this.getMediaDetail(i,j)
                                    }
                                </Row>
                            </div>
                            <div id="guide-button">
                                <Row className="justify-content-xm-center">
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].off != null && DATA[i*NUM_OF_COLUMN+j].off != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid blue"}}>
                                                <p style={{fontSize: 9,margin:0,padding:0}}>{DATA[i * NUM_OF_COLUMN + j].offKeyword + ":" + DATA[i * NUM_OF_COLUMN + j].off + " "+DATA[i * NUM_OF_COLUMN + j].offMode}</p>

                                            </div>
                                        }
                                    </Col>
                                    <Col xs={6}>
                                        {
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'skyblue', borderRadius:5, border: "1px solid red"}} onClick={() => this.toggleDetailField(i, j)}>
                                                <p style={{fontSize: 10,margin:0,padding:0}}>Details</p>
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </div>
                            <div id="fee-pay-button">
                                <Row className="justify-content-xm-center">
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].fee != null && DATA[i*NUM_OF_COLUMN+j].fee != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid green"}} >
                                                <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i * NUM_OF_COLUMN + j].fee + " " + DATA[i * NUM_OF_COLUMN + j].currency}</p>
                                            </div>
                                        }
                                    </Col>
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].fee != null && DATA[i*NUM_OF_COLUMN+j].fee != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'lightyellow', borderRadius:5, border: "1px solid red",}} onClick={() => this.toggleDetailField(i, j)}>
                                                <p style={{fontSize: 9,margin:0,padding:0}}>Pay</p>
                                            </div>
                                        }
                                    </Col>

                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                );
            }

            let finalRow = <Row className="justify-content-xm-center" style={{marginBottom:10}}>{column}</Row>;
            rows.push(finalRow);
        }

        //handling the last row
        let lastRowColumn = []
        let i = NUM_OF_ROWS-1;
        for(let j = 0; j < NUM_OF_COL_IN_LAST_ROW; j++){
            lastRowColumn.push(
                <Col xs={3}>
                    <Card style={{borderWidth:1, borderColor:"black", borderStyle:"dotted"}}>
                        { !this.state.details[i*NUM_OF_COLUMN+j] &&
                        <img style={{display: 'block', width: window.innerWidth, height: 150}}
                             className="d-block w-100"
                             src={DATA[i*NUM_OF_COLUMN+j].imageUrl}
                             alt="Image One"
                        />
                        }
                        {
                            this.state.details[i*NUM_OF_COLUMN+j] &&
                            <Card>
                                <Card.Body>
                                    <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                        <tbody>
                                            <tr>
                                                <td>Duration</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].duration+" "+DATA[i*NUM_OF_COLUMN+j].durationUnit}</td>
                                            </tr>
                                            <tr>
                                                <td>Mode</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].mode}</td>
                                            </tr>
                                            <tr>
                                                <td>Head</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].head != null?DATA[i*NUM_OF_COLUMN+j].head + " ("+DATA[i*NUM_OF_COLUMN+j].headEmail+" )":"- - -" }</td>
                                            </tr>
                                            <tr>
                                                <td>benefit</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].benefit}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        }
                        <Card.Body>
                            <Card.Title>{DATA[i*NUM_OF_COLUMN+j].name}</Card.Title>
                            <Card.Text style={{fontSize:11}}>
                                <Row className="justify-content-xm-center">
                                <Col xs={6}>
                                    {
                                        DATA[i*NUM_OF_COLUMN+j].streamStd != null && DATA[i*NUM_OF_COLUMN+j].streamStd != "0" &&
                                        <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid red"}}>
                                            <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i*NUM_OF_COLUMN+j].id}</p>
                                        </div>
                                    }
                                </Col>

                                <Col xs={6}>
                                    {
                                        DATA[i*NUM_OF_COLUMN+j].streamStd != null && DATA[i*NUM_OF_COLUMN+j].streamStd != "0" &&
                                        <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid red"}}>
                                            <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i*NUM_OF_COLUMN+j].streamStd}</p>
                                        </div>
                                    }
                                </Col>
                                </Row>
                            </Card.Text>

                            <div id="media-button">
                                <Row className="justify-content-xm-center">
                                    {
                                        this.getMediaDetail(i,j)
                                    }
                                </Row>
                            </div>
                            <div id="guide-button">
                                <Row className="justify-content-xm-center">
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].off != null && DATA[i*NUM_OF_COLUMN+j].off != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid blue"}}>
                                                <p style={{fontSize: 9,margin:0,padding:0}}>{DATA[i * NUM_OF_COLUMN + j].offKeyword + ":" + DATA[i * NUM_OF_COLUMN + j].off + " "+DATA[i * NUM_OF_COLUMN + j].offMode}</p>

                                            </div>
                                        }
                                    </Col>
                                    <Col xs={6}>
                                        {
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'skyblue', borderRadius:5, border: "1px solid red"}} onClick={() => this.toggleDetailField(i, j)}>
                                                <p style={{fontSize: 10,margin:0,padding:0}}>Details</p>
                                            </div>
                                        }
                                    </Col>
                                </Row>
                            </div>
                            <div id="fee-pay-button">
                                <Row className="justify-content-xm-center">
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].fee != null && DATA[i*NUM_OF_COLUMN+j].fee != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'white', borderRadius:5, border: "1px solid green"}} >
                                                <p style={{fontSize: 10,margin:0,padding:0}}>{DATA[i * NUM_OF_COLUMN + j].fee + " " + DATA[i * NUM_OF_COLUMN + j].currency}</p>
                                            </div>
                                        }
                                    </Col>
                                    <Col xs={6}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].fee != null && DATA[i*NUM_OF_COLUMN+j].fee != "0" &&
                                            <div style={{marginTop:10, textAlign:"center", backgroundColor:'lightyellow', borderRadius:5, border: "1px solid red",}} onClick={() => this.toggleDetailField(i, j)}>
                                                <p style={{fontSize: 9,margin:0,padding:0}}>Pay</p>
                                            </div>
                                        }
                                    </Col>

                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }

        let lastRow = <Row className="justify-content-xm-center" style={{marginBottom:10}}>{lastRowColumn}</Row>;
        rows.push(lastRow);
        return rows;
    }

    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            console.log("::::loading..... -->");
            return <div className="App">Loading...</div>;
        }

        console.log(":::::loading done");
        return (
            <div style={{ width:window.innerWidth-5, alignContent:"center",
                marginTop:3,marginLeft:2, marginBottom:2, padding:5, alignItems:"center",
                boxShadow: "2px 2px 8px black", position:"relative",borderRadius:2
            }} >
                {
                    this.props.centralContent == F4E_COURSES &&
                    <div style={{float: "right", marginTop: 5, marginRight: 10}}>
                        <img style={{display: 'block', width: 30, height: 30}}
                             className="d-block w-100"
                             src={RTHome}
                             alt="Image One"
                             onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                        />
                    </div>
                }

                <div id="select-class">
                    <div style={{float:"left", borderColor:"white", borderRadius:5, borderWidth:1, borderStyle:"solid",marginRight:2,marginLeft:2,padding:5}}>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(ALL_STD)}>
                            <p style={{fontSize:9}}>ALL</p>
                        </Button>
                    </div>

                    <div style={{float:"right", borderColor:"white", borderRadius:5, borderWidth:1, borderStyle:"solid",marginRight:2,marginLeft:2, padding:5}}>
                        {
                            this.giveAllSubjectWithButton()
                        }
                    </div>
                </div>
                <div id="separator" style={{clear:"both"}}></div>
                <div id="container"  style={{marginTop:5}}>
                    {
                        this.giveAllRow()
                    }
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

export default connect(mapStateToProps,mapDispatchToProps)(EductionStruct);