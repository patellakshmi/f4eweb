import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../../img/scrollar/Scroll1.jpg';
import Image2 from '../../img/scrollar/Scroll2.jpg';
import Image3 from '../../img/scrollar/Scroll3.jpg';
import Image4 from '../../img/scrollar/Scroll4.jpg';
import Image5 from '../../img/scrollar/Scroll5.jpg';
import Image6 from '../../img/scrollar/Scroll6.jpg';
import Image7 from '../../img/scrollar/Scroll7.jpg';
import Image8 from '../../img/scrollar/Scroll8.jpg';
import Image9 from '../../img/scrollar/Scroll9.jpg';
import axios from "axios";
import * as ApiUrl from "../../api-url/ApiUrl";
import Chart from 'chart.js/auto';
import { Bar,Line, Pie,Doughnut } from 'react-chartjs-2';
import Plotly from 'react-plotly.js';
import Plot from 'react-plotly.js';
import MyAnimation from './map/MyAnimation';
import DrawSVG from 'react-svg-drawing';
import IndiaMap from './map/IndiaMap';
import * as d3 from "d3";
import CourseBatchForce from './CourseBatchForce';


const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];


let DATA;

class ImageScroller extends  Component{



    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }
    


    componentDidMount() {
        axios.get(ApiUrl.GET_SLIDERS).then(response=> {
            if (response.status === 200) {
                DATA = response.data.data;
                this.setState({ isLoading: false });
            }else { throw new Error("Bad response from server"); }
        }).catch((err)=>{
            this.setState({signupInfo: {errorStatus:true, msg:err.response.data.message}});
            setTimeout(() => {
                this.setState({signupInfo: {errorStatus:false, msg:err.response.data.message}});
            }, 4000)
        });

    }

    getAllSliderImage=()=>{
        let allImage =[];
        for(let i = 0; i < DATA.length; i++){
            let image = <Carousel.Item interval={1500}>
                            <img
                                className="d-block w-100"
                                src={DATA[i].imageUrl}
                                alt="Image One"
                            />
                        </Carousel.Item>;
            allImage.push(image);
        }

        return allImage;
    }

    getGraph=(i)=>{
        let graph
        switch(i){
    
                case 1 :
                    var trace1 = {
                        values: [19097, 18601, 15595, 13546, 12026, 7434, 5419],
                        mode: 'markers',
                        name: 'Latin America',
                        text: ['Chile', 'Argentina', 'Mexico', 'Venezuela', 'Venezuela', 'El Salvador', 'Bolivia'],
                        marker: {
                          color: 'rgb(142, 124, 195)',
                          size: 300
                        },

                        type: 'pie',
                       
                      };
                    var plt1 = 
                    <Plot

                    style={{marginTop:window.innerHeight*0.05, marginLeft:window.innerHeight*0.23, height:window.innerHeight*0.8, width:window.innerHeight*0.8 }}
                      data={[
                          trace1
                      ]}

                    />

                    return plt1;

                 case 2:
                    var plt1 = <IndiaMap  ></IndiaMap>;
 
                    return plt1;

                case 3:
                    const data = {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [
                          {
                            label: "First dataset",
                            data: [33, 53, 85, 41, 44, 65],
                            fill: true,
                            backgroundColor: "rgba(75,192,192,0.2)",
                            borderColor: "rgba(75,192,192,1)",
                          },
                          {
                            label: "Second dataset",
                            data: [33, 25, 35, 51, 54, 76],
                            fill: false,
                            borderColor: "#742774"
                          }
                        ]
                      };

                    return  <Line style={{marginTop:window.innerHeight*0.12}} data={data} />;

                default: 
                
                 return <CourseBatchForce></CourseBatchForce>
        }
    }

   

    getAllSliderPlot=()=>{
        let allImage =[];
        for(let i = 1; i < 5; i++){
            let image = <Carousel.Item interval={3000}>
                                {this.getGraph(i)}
                        </Carousel.Item>;
            allImage.push(image);
        }
        return allImage;
    }


    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            console.log("::::loading..... -->");
            return <div className="Slider">Loading...</div>;
        }

        return (
            <div style={{paddingTop:10, paddingLeft:(window.outerWidth-260-window.outerWidth*.8)/2}}>
                <div style={{ display: 'block',justifyContent: "center", marginLeft:0, width: window.outerWidth*.8, height: window.innerHeight*0.9 ,paddingLeft: 30, paddingBottom:10 }}>
                    <Carousel>
                        {this.getAllSliderPlot()}
                    </Carousel>
                </div>
                <div style={{paddingLeft: 30, paddingBottom:10}}>
                </div>
            </div>
        )
    }
}

export default ImageScroller;
