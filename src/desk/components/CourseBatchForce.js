import React, { Component } from 'react';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';
import * as d3 from "d3";

var data=[{type:"apple", quantity:5, color:"red"},{type:"apple", quantity:15,color:"red"},{type:"banana", quantity:3,color:"red"},{type:"orange", quantity:15,color:"red"},{type:"papaya", quantity:10,color:"red"}];
var data1=[{type:"apple", quantity:5, color:"red"},{type:"apple", quantity:15,color:"red"},{type:"banana", quantity:3,color:"red"},{type:"orange", quantity:15,color:"red"},{type:"papaya", quantity:10,color:"red"}];
var svg;
var colors =["AntiqueWhite","Magenta","Bisque","Aqua","Indigo","CadetBlue","Cornsilk","DarkCyan","GreenYellow","DarkKhaki",
            "DarkOrange","DarkSeaGreen","DeepSkyBlue","LightGrey","LightGreyrange","LemonChiffon","LightBlue","HotPink",
            "OrangeRed","RoyalBlue","SpringGreen","YellowGreen"];

var height = window.innerHeight*.9;
var width = window.outerWidth*.8;

var graphs ={
    nodes:[
    {name:"Lakshmi"},
    {name:"Nagina"},
    {name:"Akshat"},
    {name:"Gyanti"},
    {name:"Lakshman"},
    {name:"Aditya"},
    {name:"Shreya"},
    {name:"Arjun"},
    {name:"Shushila"},
    {name:"Chandan"},
    {name:"Shubham"},
    {name:"Pawan"}
   
    ],
    links:[
        {source:"Lakshmi", target:"Nagina"},
        {source:"Lakshmi", target:"Akshat"},
        {source:"Lakshman", target:"Gyanti"},
        {source:"Lakshman", target:"Aditya"},
        {source:"Lakshman", target:"Shreya"},
        {source:"Arjun", target:"Shushila"},
        {source:"Arjun", target:"Pawan"},
        {source:"Arjun", target:"Chandan"},
        {source:"Arjun", target:"Shubham"},
    ]
}

var link;
var node;


var myData={
    name:"rajpat",
    children:[
        {
            name:"arjun",
            children:[
                {
                    name:"chandan",
                    children:[
                        {
                            name:"sukunu",
                            children:null
                        }
                    ]
                },
                {
                    name:"pawan",
                    children:null
                },
                {
                    name:"shubham",
                    children:null
                }
            ]
        },
        {
            name:"lakshman",
            children:[
                {
                    name:"aditya",
                    children:null
                },
                {
                    name:"gudia",
                    children:null
                }
            ]
        },
        {
            name:"arjun",
            children:[
                {
                    name:"chandan",
                    children:[
                        {
                            name:"sukunu",
                            children:null
                        }
                    ]
                },
                {
                    name:"pawan",
                    children:null
                },
                {
                    name:"shubham",
                    children:null
                }
            ]
        },
        {
            name:"lakshman",
            children:[
                {
                    name:"aditya",
                    children:null
                },
                {
                    name:"gudia",
                    children:null
                }
            ]
        },
        {
            name:"lakshmi",
            children:[
                {
                    name:"akshat",
                    children:null
                },
                {
                    name:"chandan",
                    children:[
                        {
                            name:"sukunu",
                            children:null
                        }
                    ]
                },
                {
                    name:"pawan",
                    children:null
                },
                {
                    name:"shubham",
                    children:null
                },
                {
                    name:"arjun",
                    children:[
                        {
                            name:"chandan",
                            children:[
                                {
                                    name:"sukunu",
                                    children:null
                                }
                            ]
                        },
                        {
                            name:"pawan",
                            children:null
                        },
                        {
                            name:"shubham",
                            children:null
                        }
                    ]
                },
                {
                    name:"lakshman",
                    children:[
                        {
                            name:"aditya",
                            children:null
                        },
                        {
                            name:"gudia",
                            children:null
                        }
                    ]
                },
            ]
        }
    ]
}

class CourseBatchForce extends Component {
   constructor(props){
      super(props); 
   }

   rand=()=>{
    return Math.random(); 
   }

   myTimer=()=>{
    for(let i = 0; i < data.length; i++){
        data1[i].quantity = this.rand()*20;
        data1[i].color = colors[Math.ceil( this.rand()*10 )];
        this.createBarChart(data1);
    }
    
    //this.createBarChart(data1);

   }

   componentDidMount() {
    svg = d3.select("#myDiv").append("svg").attr("width",width).attr("height",height);
    //this.createBarChart(data)
    //var myVar = setInterval(this.myTimer, 1000);
    this.forceGraph();

   }

   ticked=()=>{
    link.attr("x1",(d)=>{ return d.source.x}).attr("y1",(d)=>{ return d.source.y})
    .attr("x2",(d)=>{ return d.source.x}).attr("y2",(d)=>{ return d.source.y});

    node.attr("cx",(d)=>{return d.x}).attr("cy",(d)=>{return d.y});

}

    drag = simulation => {
  
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }
   
   forceGraph=()=>{

    const root = d3.hierarchy(myData);
    const links = root.links();
    const nodes = root.descendants();

    const simulation = d3.forceSimulation(nodes)
    .force("link", d3.forceLink(links).id(d => d.id).distance(50).strength(1))
    .force("charge", d3.forceManyBody().strength(-800))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

    svg.attr("viewBox", [-width / 2, -height / 2, width, height]);

    const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", .3)
        .attr("stroke-width", 2)
    .selectAll("line")
    .data(links)
    .join("line");

    const node = svg.append("g")
        .attr("fill", (d,i)=>colors[Math.ceil( this.rand()*10)] )
        .attr("stroke", "#000")
        .attr("stroke-width", 2)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
        .attr("r", 20)
        .style("fill", (d, i)=>{ return colors[Math.ceil( this.rand()*20)]; })
        .style("stroke", (d, i)=>{ return colors[Math.ceil( this.rand()*20)]; })
        .call(this.drag(simulation));

    

    node.append("text")
    .attr("dx", function(d){return -20})
    .text(function(d){return "Patel";})   


    simulation.on("tick", () => {
    link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y);
    });

        
   }

   createBarChart=(data)=> {
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx",(d,i)=>i*40+0).attr("cy",(d,i)=>50).attr("r",(d,i)=>d.quantity+30).style("fill","red");
    svg.selectAll("circle").data(data).attr("cx",(d,i)=>i*40+0).attr("cy",(d,i)=>50).attr("r",(d,i)=>d.quantity+2).style("fill",(d,i)=>d.color);
   }


render() {
      return <div id="myDiv">
      </div>
   }
}
export default CourseBatchForce