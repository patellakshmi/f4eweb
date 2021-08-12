import {Component} from 'react';
import Header from './components/header/Header'

class MobileApp extends  Component{

    render() {
        return (
            <div style={{ marginTop: window.innerHeight/2-50, marginLeft: window.innerWidth/2-200}} >
                <h1 style={{color:"red"}}>Still under the development...</h1>
            </div>
        )
    }
}

export default MobileApp;
