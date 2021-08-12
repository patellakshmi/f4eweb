import {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Sidebar extends  Component{

    render() {
        return (
            <div style={{ height: window.innerHeight-14, width:260, alignContent:"center",
                marginTop:2, marginBottom:2, padding:5, alignItems:"center", backgroundColor:"#AEB6BF",
                boxShadow: "2px 2px 5px black", position:"relative",borderRadius:2
            }} >
                <div style={{ width: 250,height: 70,boxShadow: "2px 2px 5px black",backgroundColor:"white", borderRadius:5 }}>
                    <h4 style={{textAlign:"center", paddingTop: 10}}>Board</h4>
                </div>

                <div style={{ width: 250,height: window.innerHeight-98, marginTop:5, boxShadow: "2px 2px 5px black",backgroundColor:"white", borderRadius:5 }}>
                   <ol style={{paddingTop: 10}}>
                       <li>hi how are you</li>
                   </ol>
                </div>

            </div>
        )
    }
}

export default Sidebar;
