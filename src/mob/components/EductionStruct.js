import React, {Component} from 'react';
import {Card, Col, Row} from 'react-bootstrap'
import Button from "react-bootstrap/Button";
import YOUTUBE from "../../img/social-media/youtube.png";
import UDEMY from "../../img/social-media/udemy.png";
import {Table} from 'react-bootstrap'
import {ELEVENTH_CLASS_DATA} from "../../../src/constants/ELEVENTH_CLASS_DATA";
import {TWELFTH_CLASS_DATA} from "../../../src/constants/TWELFTH_CLASS_DATA";
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
import {SIXTH_CLASS_DATA} from "../../../src/constants/SIXTH_CLASS_DATA";
import {SEVENTH_CLASS_DATA} from "../../../src/constants/SEVENTH_CLASS_DATA";
import {EIGHT_CLASS_DATA} from "../../../src/constants/EIGHT_CLASS_DATA";
import {CURRENT_AFFAIRS_CLASS_DATA} from "../../../src/constants/CURRENT_AFFAIRS_CLASS_DATA";
import RTHome from "../../img/home/ReturnHome.png";
import {CENTRAL_CONTENT} from "../../desk/constants/Constants";
import {updateCentralContent} from "../../desk/actions/Actions";
import {connect} from "react-redux";

let ALL_STD_DATA = ELEVENTH_CLASS_DATA.concat(TWELFTH_CLASS_DATA).concat(SIXTH_CLASS_DATA).concat(SEVENTH_CLASS_DATA).concat(EIGHT_CLASS_DATA);
const MAX_ROW = 5;
const NUM_OF_COLUMN = 4;
let NUM_OF_ROWS = 2;
let NUM_OF_COL_IN_LAST_ROW = 2;
let DATA = ALL_STD_DATA;
class EductionStruct extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            togglingDetail:false,
            details: new Array(MAX_ROW*NUM_OF_COLUMN)
        };
        NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
        NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
        for(let i = 0; i < MAX_ROW*NUM_OF_COLUMN;i++){ this.state.details[i] = false; }
    }

    getDataForGivenStd = (std) =>{
        switch (std){
            case SIXTH:
                DATA = SIXTH_CLASS_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case SEVENTH:
                DATA = SEVENTH_CLASS_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case EIGHTH:
                DATA = EIGHT_CLASS_DATA ;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case ELEVENTH:
                DATA = ELEVENTH_CLASS_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case TWELFTH:
                DATA = TWELFTH_CLASS_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case CURRENT_AFFAIRS:
                DATA = CURRENT_AFFAIRS_CLASS_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            case ALL_STD:
                DATA = ALL_STD_DATA;
                NUM_OF_ROWS = Math.ceil(DATA.length/NUM_OF_COLUMN);
                NUM_OF_COL_IN_LAST_ROW = DATA.length-(NUM_OF_ROWS-1)*NUM_OF_COLUMN;
                this.setState({ togglingDetail: !this.state.togglingDetail });
                break;
            default:
                DATA = ALL_STD_DATA;

        }
    }

    toggleDetailField = (i,j) => {
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
                    <Col xs={12} style={{marginTop:10}}>
                        <Card style={{borderWidth:1, borderColor:"black", borderStyle:"dotted"}}>
                            { !this.state.details[i*NUM_OF_COLUMN+j] &&
                            <img style={{display: 'block', width: window.innerWidth, height: 150}}
                                 className="d-block w-100"
                                 src={DATA[i*NUM_OF_COLUMN+j].img}
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
                                                <td>Faculty</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].details.faculty}</td>
                                            </tr>
                                            <tr>
                                                <td>Mode</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].details.mode}</td>
                                            </tr>
                                            <tr>
                                                <td>Duration ( Times )</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].details.duration+" "+DATA[i*NUM_OF_COLUMN+j].details.durationInTerm+" ("+DATA[i*NUM_OF_COLUMN+j].details.totalTime+" "+DATA[i*NUM_OF_COLUMN+j].details.totalTimeInTerm+")"}</td>
                                            </tr>
                                            <tr>
                                                <td>Days</td>
                                                <td>{DATA[i*NUM_OF_COLUMN+j].details.days}</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            }
                            <Card.Body>
                                <Card.Title>{DATA[i*NUM_OF_COLUMN+j].subTitle}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{DATA[i*NUM_OF_COLUMN+j].subCode}</Card.Subtitle>
                                <Card.Text style={{fontSize:11}}>
                                    {DATA[i*NUM_OF_COLUMN+j].desc}
                                </Card.Text>
                                <div id="guide-button">
                                    <Row className="justify-content-xm-center">
                                        <Col xs={3}>
                                            {
                                                DATA[i*NUM_OF_COLUMN+j].off != null && DATA[i*NUM_OF_COLUMN+j].off != "0" &&
                                            <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:80, height:20}}>
                                                <p style={{fontSize:9}}>{DATA[i*NUM_OF_COLUMN+j].offKeyWord+":"+DATA[i*NUM_OF_COLUMN+j].off+DATA[i*NUM_OF_COLUMN+j].offMode}</p>
                                            </Button>
                                            }
                                        </Col>
                                        <Col xs={3}>
                                            {
                                                DATA[i*NUM_OF_COLUMN+j].fees != null && DATA[i*NUM_OF_COLUMN+j].fees != "0" &&
                                                <Button disabled variant="outline-primary" size="sm"
                                                        style={{marginLeft: 10, marginTop: 10, width: 80, height: 20}}>
                                                    <p style={{fontSize: 9}}>{DATA[i * NUM_OF_COLUMN + j].fees + " " + DATA[i * NUM_OF_COLUMN + j].currency}</p>
                                                </Button>
                                            }
                                        </Col>
                                        <Col xs={3}>
                                            {
                                                DATA[i*NUM_OF_COLUMN+j].details != null  &&
                                                <Button variant="info" size="sm"
                                                        style={{marginLeft: 10, marginTop: 10, height: 20}}
                                                        onClick={() => this.toggleDetailField(i, j)}>
                                                    <p style={{fontSize: 9}}>Details</p>
                                                </Button>
                                            }
                                        </Col>
                                        <Col xs={3}>
                                            <Row className="justify-content-xm-center">
                                                <Col xs={6}>
                                                    {
                                                        DATA[i * NUM_OF_COLUMN + j].udemyUrl != null &&
                                                        <Card.Link href={DATA[i * NUM_OF_COLUMN + j].udemyUrl}>
                                                            <div style={{marginLeft: 0, marginTop: 10, marginRight: 0}}>
                                                                <img style={{display: 'block', width: 20, height: 20}}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    }
                                                </Col>
                                                <Col xs={6}>
                                                    {
                                                        DATA[i * NUM_OF_COLUMN + j].youtubeUrl != null &&
                                                        <Card.Link href={DATA[i * NUM_OF_COLUMN + j].youtubeUrl}>
                                                            <div style={{marginLeft: 0, marginTop: 10, marginRight: 0}}>
                                                                <img style={{width: 20, height: 20}}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    }
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            }

            let finalRow = <Row className="justify-content-xm-center" style={{marginBottom:0}}>{column}</Row>;
            rows.push(finalRow);
        }

        //handling the last row
        let lastRowColumn = []
        let i = NUM_OF_ROWS-1;
        for(let j = 0; j < NUM_OF_COL_IN_LAST_ROW; j++){
            lastRowColumn.push(
                <Col xs={12} style={{marginTop:10}}>
                    <Card style={{borderWidth:1, borderColor:"black", borderStyle:"dotted"}}>
                        { !this.state.details[i*NUM_OF_COLUMN+j] &&
                        <img style={{display: 'block', width: window.innerWidth, height: 150}}
                             className="d-block w-100"
                             src={DATA[i*NUM_OF_COLUMN+j].img}
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
                                            <td>Faculty</td>
                                            <td>{DATA[i*NUM_OF_COLUMN+j].details.faculty}</td>
                                        </tr>
                                        <tr>
                                            <td>Mode</td>
                                            <td>{DATA[i*NUM_OF_COLUMN+j].details.mode}</td>
                                        </tr>
                                        <tr>
                                            <td>Duration</td>
                                            <td>{DATA[i*NUM_OF_COLUMN+j].details.duration+" "+DATA[i*NUM_OF_COLUMN+j].details.durationInTerm+" ("+DATA[i*NUM_OF_COLUMN+j].details.totalTime+" "+DATA[i*NUM_OF_COLUMN+j].details.totalTimeInTerm+")"}</td>
                                        </tr>
                                        <tr>
                                            <td>Days</td>
                                            <td>{DATA[i*NUM_OF_COLUMN+j].details.days}</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        }
                        <Card.Body>
                            <Card.Title>{DATA[i*NUM_OF_COLUMN+j].subTitle}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{DATA[i*NUM_OF_COLUMN+j].subCode}</Card.Subtitle>
                            <Card.Text style={{fontSize:11}}>
                                {DATA[i*NUM_OF_COLUMN+j].desc}
                            </Card.Text>
                            <div id="guide-button">
                                <Row className="justify-content-xm-center">
                                    <Col xs={3}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].off != null && DATA[i*NUM_OF_COLUMN+j].off != "0" &&
                                            <Button disabled variant="outline-primary" size="sm"
                                                    style={{marginLeft: 10, marginTop: 10, width: 80, height: 20}}>
                                                <p style={{fontSize: 9}}>{DATA[i * NUM_OF_COLUMN + j].offKeyWord + ":" + DATA[i * NUM_OF_COLUMN + j].off + DATA[i * NUM_OF_COLUMN + j].offMode}</p>
                                            </Button>
                                        }
                                    </Col>
                                    <Col xs={3}>
                                        {
                                            DATA[i*NUM_OF_COLUMN+j].fees != null && DATA[i*NUM_OF_COLUMN+j].fees != "0" &&
                                            <Button disabled variant="outline-primary" size="sm"
                                                    style={{marginLeft: 10, marginTop: 10, width: 80, height: 20}}>
                                                <p style={{fontSize: 9}}>{DATA[i * NUM_OF_COLUMN + j].fees + " " + DATA[i * NUM_OF_COLUMN + j].currency}</p>
                                            </Button>
                                        }
                                    </Col>
                                    <Col xs={3}>
                                        {
                                            DATA[i * NUM_OF_COLUMN + j].details != null &&
                                            <Button variant="info" size="sm"
                                                    style={{marginLeft: 10, marginTop: 10, height: 20}}
                                                    onClick={() => this.toggleDetailField(i, j)}>
                                                <p style={{fontSize: 9}}>Details</p>
                                            </Button>
                                        }
                                    </Col>
                                    <Col xs={3}>
                                        <Row className="justify-content-xm-center">
                                            <Col xs={6}>
                                                {
                                                    DATA[i * NUM_OF_COLUMN + j].udemyUrl != null &&
                                                    <Card.Link href={DATA[i * NUM_OF_COLUMN + j].udemyUrl}>
                                                        <div style={{marginLeft: 0, marginTop: 10, marginRight: 0}}>
                                                            <img style={{display: 'block', width: 20, height: 20}}
                                                                 className="d-block w-100"
                                                                 src={UDEMY}
                                                                 alt="Image One"
                                                            />
                                                        </div>
                                                    </Card.Link>
                                                }
                                            </Col>
                                            <Col xs={6}>
                                                {
                                                    DATA[i * NUM_OF_COLUMN + j].youtubeUrl != null &&
                                                    <Card.Link href={DATA[i * NUM_OF_COLUMN + j].youtubeUrl}>
                                                        <div style={{marginLeft: 0, marginTop: 10, marginRight: 0}}>
                                                            <img style={{width: 20, height: 20}}
                                                                 className="d-block w-100"
                                                                 src={YOUTUBE}
                                                                 alt="Image One"
                                                            />
                                                        </div>
                                                    </Card.Link>
                                                }
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            );
        }

        let lastRow = <Row className="justify-content-xm-center" style={{marginBottom:0}}>{lastRowColumn}</Row>;
        rows.push(lastRow);
        return rows;
    }

    render() {
        return (

            <div style={{ width:window.outerWidth, alignContent:"center",
                marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#AEB6BF",
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

                <div id="select-class">
                    <div style={{float:"left", borderColor:"white", borderRadius:5, borderWidth:1, borderStyle:"solid",marginRight:2,marginLeft:2,padding:5}}>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(ALL_STD)}>
                            <p style={{fontSize:9}}>ALL</p>
                        </Button>

                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(SIXTH)}>
                            <p style={{fontSize:9}}>VI</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(SEVENTH)}>
                            <p style={{fontSize:9}}>VII</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(EIGHTH)}>
                            <p style={{fontSize:9}}>VIII</p>
                        </Button>

                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(ELEVENTH)}>
                            <p style={{fontSize:9}}>XI</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}} onClick={()=>this.getDataForGivenStd(TWELFTH)}>
                            <p style={{fontSize:9}}>XII</p>
                        </Button>

                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginRight:5,marginTop:2,marginBottom:5,width:90, height:20}} onClick={()=>this.getDataForGivenStd(CURRENT_AFFAIRS)}>
                            <p style={{fontSize:9}}>Current-Affair</p>
                        </Button>
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