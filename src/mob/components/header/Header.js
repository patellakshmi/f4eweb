import {Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Button from "../util/Button";



class Header extends Component{
    constructor(props) {
        super();
        this.width = window.innerWidth;
        this.height = 50;
    }
    render() {
        return (
            <div className={css(styles.headerAttr)} >
                <Button></Button>
            </div>
        );
    }
}


const styles = StyleSheet.create({
    headerAttr: {
        backgroundColor: 'red',
        height: 50,
        marginTop: 0,
        paddingTop: 0
    }
});


export default Header;
