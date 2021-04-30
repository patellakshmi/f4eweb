import {Component } from 'react';
import { StyleSheet, css } from 'aphrodite';



class Button extends Component{
    constructor(props) {
        super(props);
        this.width = window.innerWidth;
        this.height = 50;
    }
    render() {
        return (
            <div className={css(styles.headerAttr)} >
            </div>
        );
    }
}


const styles = StyleSheet.create({
    headerAttr: {
        backgroundColor: 'blue',
        height: 20,
        width: 30,
        marginTop: 0,
        paddingTop: 0
    }
});


export default Button;
