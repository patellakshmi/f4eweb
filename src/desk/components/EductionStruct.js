import React, {Component} from 'react';
import {Card} from 'react-bootstrap'
import {Container,Row,Col} from "react-bootstrap";
import RTHome from "../../img/ReturnHome.png";
import {CENTRAL_CONTENT} from "../constants/Constants";
import Button from "react-bootstrap/Button";
import PHYSICS1 from "../../img/physics1.png";
import CHEMISTRY1 from "../../img/chemistry.jpg";
import MATHS1 from "../../img/maths1.jpg";
import BIO1 from "../../img/biology.jpg";
import YOUTUBE from "../../img/youtube.png";
import UDEMY from "../../img/udemy.png";
import {Table} from 'react-bootstrap'
import {DATA} from "../constants/data/DataConstant";

const MAX_ROW = 10;
class EductionStruct extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            togglingDetail:false,
            details: new Array(MAX_ROW)
        };
        for(let i = 0; i < this.state.details.length;i++){ this.state.details[i] = new Array(4);}
        for(let i = 0; i < this.state.details.length;i++){
            for(let j = 0; j < 4; j++){ this.state.details[i][j] = false; }
        }
    }

    toggleDetailField = (i,j) => {
        console.log("toggleDetailField");
        this.state.details[i][j] = !this.state.details[i][j];
        console.log(this.state.details[i][j]);
        this.setState({ togglingDetail: !this.state.togglingDetail });
        console.log(DATA[i][j]);
    }

    giveAllRow=()=>{
        let rows = [];
        for (let i = 0; i < 2; i++) {
            let column = []
            for(let j = 0; j < 4; j++){
                column.push(
                    <Col xs={3}>
                        <Card>
                            { !this.state.details[i][j] &&
                            <img style={{display: 'block', width: 100, height: 150}}
                                 className="d-block w-100"
                                 src={BIO1}
                                 alt="Image One"
                            />
                            }
                            {
                                this.state.details[i][j] &&
                                <Card>
                                    <Card.Body>
                                        <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                            <tbody>
                                            <tr>
                                                <td>Faculty</td>
                                                <td>Mr. Anurag Verma</td>
                                            </tr>
                                            <tr>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            <tr>
                                                <td>Larry the Bird</td>
                                                <td>@twitter</td>
                                            </tr>
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            }
                            <Card.Body>
                                <Card.Title>Physics for XII</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                <Card.Text style={{fontSize:14}}>
                                    We believe in basic of physics, by understanding with F4E, student are able to
                                    crack IIT exam easily.
                                </Card.Text>
                                <div id="guide-button">
                                    <Row className="justify-content-xm-center">
                                        <Col xs={3}>
                                            <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                <p style={{fontSize:9}}>Off-10%</p>
                                            </Button>
                                        </Col>
                                        <Col xs={3}>
                                            <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                <p style={{fontSize:9}}>2400 INR</p>
                                            </Button>
                                        </Col>
                                        <Col xs={3}>
                                            <Button variant="info" size="sm" style={{marginLeft:10,marginTop:10, height:20}} onClick={()=>this.toggleDetailField(i,j)}>
                                                <p style={{fontSize:9}}>Details</p>
                                            </Button>
                                        </Col>
                                        <Col xs={3}>
                                            <Row className="justify-content-xm-center">
                                                <Col xs={6}>
                                                    <Card.Link href="#">
                                                        <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                            <img style={{ display: 'block', width: 20, height:20 }}
                                                                 className="d-block w-100"
                                                                 src={UDEMY}
                                                                 alt="Image One"
                                                            />
                                                        </div>
                                                    </Card.Link>
                                                </Col>
                                                <Col xs={6}>
                                                    <Card.Link href="#">
                                                        <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                            <img style={{ width: 20, height:20 }}
                                                                 className="d-block w-100"
                                                                 src={YOUTUBE}
                                                                 alt="Image One"
                                                            />
                                                        </div>
                                                    </Card.Link>
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
            let finalRow = <Row className="justify-content-xm-center">{column}</Row>;
            rows.push(finalRow);
        }
        return rows;
    }

    render() {
        console.log("render again-->");
        return (
            <div style={{ width:window.innerWidth-5, alignContent:"center",
                marginTop:2,marginLeft:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#AEB6BF",
                boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
            }} >
                <div id="select-class">
                    <div style={{float:"right",borderColor:"white", borderRadius:5,borderWidth:1, borderStyle:"solid",marginLeft:2, padding:5}}>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:0,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>All</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>XII</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>XI</p>
                        </Button>
                    </div>
                    <div style={{float:"right", borderColor:"white", borderRadius:5, borderWidth:1, borderStyle:"solid",marginRight:2,marginLeft:2, padding:5}}>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:0,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>All</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>XII</p>
                        </Button>
                        <Button variant="outline-primary" size="sm" style={{marginLeft:5,marginTop:2,marginBottom:5,width:60, height:20}}>
                            <p style={{fontSize:9}}>XI</p>
                        </Button>
                    </div>
                </div>
                <div id="separator" style={{clear:"both"}}></div>
                <div id="container"  style={{marginTop:5}}>
                    {
                        this.giveAllRow()
                    }


                    {/*<Row className="justify-content-xm-center">
                        <Col xs={3}>
                            <Card>
                                { this.state.isPhysics &&
                                <img style={{display: 'block', width: 100, height: 150}}
                                     className="d-block w-100"
                                     src={BIO1}
                                     alt="Image One"
                                     onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                }
                                {
                                    !this.state.isPhysics &&
                                    <Card>
                                        <Card.Body>
                                            <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                                <tbody>
                                                <tr>
                                                    <td>Faculty</td>
                                                    <td>Mr. Anurag Verma</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                }
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <p style={{fontSize:9}}>Off-10%</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <p style={{fontSize:9}}>2400 INR</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="info" size="sm" style={{marginLeft:10,marginTop:10, height:20}} onClick={this.toggleDetails}>
                                                    <p style={{fontSize:9}}>Details</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                { this.state.isPhysics &&
                                <img style={{display: 'block', width: 100, height: 150}}
                                     className="d-block w-100"
                                     src={BIO1}
                                     alt="Image One"
                                     onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                }
                                {
                                    !this.state.isPhysics &&
                                    <Card>
                                        <Card.Body>
                                            <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                                <tbody>
                                                <tr>
                                                    <td>Faculty</td>
                                                    <td>Mr. Anurag Verma</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                }
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <p style={{fontSize:9}}>Off-10%</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <p style={{fontSize:9}}>2400 INR</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="info" size="sm" style={{marginLeft:10,marginTop:10, height:20}} onClick={this.toggleDetails}>
                                                    <p style={{fontSize:9}}>Details</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                { this.state.isPhysics &&
                                <img style={{display: 'block', width: 100, height: 150}}
                                     className="d-block w-100"
                                     src={BIO1}
                                     alt="Image One"
                                     onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                }
                                {
                                    !this.state.isPhysics &&
                                    <Card>
                                        <Card.Body>
                                            <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                                <tbody>
                                                <tr>
                                                    <td>Faculty</td>
                                                    <td>Mr. Anurag Verma</td>
                                                </tr>
                                                <tr>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                <tr>
                                                    <td>Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                                </tbody>
                                            </Table>
                                        </Card.Body>
                                    </Card>
                                }
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <p style={{fontSize:9}}>Off-10%</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <p style={{fontSize:9}}>2400 INR</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="info" size="sm" style={{marginLeft:10,marginTop:10, height:20}} onClick={this.toggleDetails}>
                                                    <p style={{fontSize:9}}>Details</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                { this.state.isPhysics &&
                                    <img style={{display: 'block', width: 100, height: 150}}
                                         className="d-block w-100"
                                         src={BIO1}
                                         alt="Image One"
                                         onClick={() => this.props.updateCentralContent(CENTRAL_CONTENT)}
                                    />
                                }
                                {
                                    !this.state.isPhysics &&
                                        <Card>
                                            <Card.Body>
                                                <Table striped bordered hover style={{fontSize:8, margin:0, height:100}}>
                                                    <tbody>
                                                    <tr>
                                                        <td>Faculty</td>
                                                        <td>Mr. Anurag Verma</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Jacob</td>
                                                        <td>Thornton</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Larry the Bird</td>
                                                        <td>@twitter</td>
                                                    </tr>
                                                    </tbody>
                                                </Table>
                                            </Card.Body>
                                        </Card>
                                }
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <p style={{fontSize:9}}>Off-10%</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button disabled variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <p style={{fontSize:9}}>2400 INR</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="info" size="sm" style={{marginLeft:10,marginTop:10, height:20}} onClick={this.toggleDetails}>
                                                    <p style={{fontSize:9}}>Details</p>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginTop:5}}>
                        <Col xs={3}>
                            <Card>
                                <img style={{ display: 'block', width: 100, height:150 }}
                                     className="d-block w-100"
                                     src={PHYSICS1}
                                     alt="Image One"
                                     onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Off-10%</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>2400 INR</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Details</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                <img style={{ display: 'block', width: 100, height:150 }}
                                     className="d-block w-100"
                                     src={PHYSICS1}
                                     alt="Image One"
                                     onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Off-10%</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>2400 INR</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Details</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={3}>
                            <Card>
                                <img style={{ display: 'block', width: 100, height:150 }}
                                     className="d-block w-100"
                                     src={PHYSICS1}
                                     alt="Image One"
                                     onClick={()=>this.props.updateCentralContent(CENTRAL_CONTENT)}
                                />
                                <Card.Body>
                                    <Card.Title>Physics for XII</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Advanced understanding</Card.Subtitle>
                                    <Card.Text style={{fontSize:14}}>
                                        We believe in basic of physics, by understanding with F4E, student are able to
                                        crack IIT exam easily.
                                    </Card.Text>
                                    <div id="guide-button">
                                        <Row className="justify-content-xm-center">
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10,width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Off-10%</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, width:60, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>2400 INR</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Button variant="outline-primary" size="sm" style={{marginLeft:10,marginTop:10, height:20}}>
                                                    <Card.Link href="#">
                                                        <p style={{fontSize:9}}>Details</p>
                                                    </Card.Link>
                                                </Button>
                                            </Col>
                                            <Col xs={3}>
                                                <Row className="justify-content-xm-center">
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ display: 'block', width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={UDEMY}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                    <Col xs={6}>
                                                        <Card.Link href="#">
                                                            <div style={{marginLeft:0, marginTop:10, marginRight:0}}>
                                                                <img style={{ width: 20, height:20 }}
                                                                     className="d-block w-100"
                                                                     src={YOUTUBE}
                                                                     alt="Image One"
                                                                />
                                                            </div>
                                                        </Card.Link>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>*/}
                </div>
            </div>
        )
    }
}

export default EductionStruct;