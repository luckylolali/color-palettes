import React, { Component } from "react";
import { Link } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { withStyles} from "@material-ui/styles";
import styles from "./styles/ColorBoxStyles";
import classNames from "classnames";

class ColorBox extends Component{
    constructor(props) {
        super(props);
        this.state ={ 
            copied: false,
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }
    changeCopyState (){
        this.setState({copied: true}, () => {
            setTimeout( () => this.setState({copied: false}), 1500);
        })
    }
    render(){
        const { name, color, moreUrl, showingFullPalette, classes } = this.props;
        const {copied } = this.state;
        
        return(
        <CopyToClipboard text={color} onCopy={this.changeCopyState}>
            <div className={classes.ColorBox} >  
                {/* <div className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} style={{backgroundColor: color}}></div>     */}
                <div className={classNames(classes.copyOverlay, {[classes.showOverlay]: copied})}style={{backgroundColor: color}}></div>
                {/* <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}> */}
                <div className={classNames(classes.copyMsg, {[classes.showMsg]: copied})}>
                    <h1>Copied</h1>
                    <div className={classes.copyText}>{color}</div>
                </div>
                <div>
                    <div className={classes.boxContent} >
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                { showingFullPalette &&
                (<Link to={moreUrl} onClick= { e => e.stopPropagation() } >
                    <span className={classes.seeMore}>More</span>
                </Link>
                 )  
                }                 
            </div>
        </CopyToClipboard>
        
        );
    }
}
export default withStyles(styles)(ColorBox);
