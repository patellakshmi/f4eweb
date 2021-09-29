import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import {Fight4EducObj} from '../../constants/Fight4EduObjective';
import axios from "axios";
import * as ApiUrl from "../../api-url/ApiUrl";

let DATA;
class F4EObjective extends  Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }


    componentDidMount() {
        axios.get(ApiUrl.GET_OBJECTIVE).then(response=> {
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

    render() {

        const { isLoading } = this.state;

        if (isLoading) {
            console.log("::::loading..... -->");
            return <div className="Slider">Loading...</div>;
        }

        return (
            <div style={{paddingTop:10, paddingLeft:(window.outerWidth-260-window.outerWidth*.8)/2}}>
                <div style={{ display: 'block', marginLeft:0, width: window.outerWidth*.8, paddingLeft: 30, paddingBottom:10 }}>
                    <div style={{backgroundColor:'white',borderRadius:5, padding:3, border:'1px dotted black'}}>
                        <div style={{textAlign:"justify", margin:15, padding:3,borderRadius:5, border:'1px dotted black', backgroundColor:'white'}}>
                            {DATA[0].objective}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default F4EObjective;

