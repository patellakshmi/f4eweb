import React, {Component} from 'react';
import RTHome from "../../img/home/ReturnHome.png";
import {updateCentralContent} from "../actions/Actions";
import {connect} from "react-redux";
import {CENTRAL_CONTENT} from "../constants/Constants";
import {Card, FormControl, InputGroup, Table} from "react-bootstrap";
import {Dropdown} from "react-bootstrap";
import {ADMISSION_NOTICE} from "../../constants/ADMISSION_NOTICE";

import Chart from 'chart.js/auto';

class UserHome extends  Component{
    chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				datasets: [{ 
					data: [86,114,106,106,107,111,133],
					label: "Total",
					borderColor: "#3e95cd",
					backgroundColor: "#7bb6dd",
					fill: false,
				}, { 
					data: [70,90],
					label: "Accepted",
					borderColor: "#3cba9f",
					backgroundColor: "#71d1bd",
					fill: false,
				}, { 
					data: [10,21,60,44,17,21,17],
					label: "Pending",
					borderColor: "#ffa500",
					backgroundColor:"#ffc04d",
					fill: false,
				}, { 
					data: [6,3,2,2,7,0,16],
					label: "Rejected",
					borderColor: "#c45850",
					backgroundColor:"#d78f89",
					fill: false,
				}
				]
			},
		});
	}



    render() {
        return (
            <div id={"main-contain"} style={{ height: window.innerHeight-14, width: window.innerWidth-262,marginTop:2,
                marginBottom:2, marginLeft:0, padding:0,borderRadius:0, boxShadow: "0px 0px 8px black"}}>

                <div style={{clear:"both"}}></div>

                <div id="USER_HOME">
                    <div id="UserName" style={{marginLeft:200}}>
                        <div>
                            <canvas
                            id="myChart"
                            ref={this.chartRef}
                            />
                        </div> 
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
    centralContent: state.deskReducer.centralContent,
    loginInfo: state.deskReducer.loginInfo,
    patel:console.log(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(UserHome);