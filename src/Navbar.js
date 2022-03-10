import React, { Component } from "react";
import {Link} from "react-router-dom";
import { withStyles } from "@material-ui/styles";

import Slider from "rc-slider";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import styles from "./styles/NavbarStyles"


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }
    handleChange(e){
        this.setState({format: e.target.value, open: true });
        this.props.handleChange(e.target.value);
    }
    closeSnackbar(){
        this.setState({open:false})
    }
    render(){
        let {format} = this.state;
        let { classes } = this.props;
        return (
            
            <header className={classes.Navbar}>
                <div className={classes.logo}>
                    <Link to="/">ReactColorPicker</Link>
                </div>
                {this.props.showLevel &&
                (<div>
                    <span>Level: {this.props.level}</span>
                    <div className={classes.Slider}>                       
                        <Slider defaultValue={this.props.level} 
                                min={100} 
                                max={900} 
                                step={100} 
                                onAfterChange={this.props.levelChange}/>
                    </div>
                </div>)
                }
               <div className={classes.SelectContainer}>
                    <Select onChange={this.handleChange} value={format}>
                        <MenuItem value="hex">HEX - #FFFFFF</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
               </div>
               <Snackbar
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    open={this.state.open}
                    onClose={this.closeSnackbar}
                    autoHideDuration={3000}
                    message={<span id="message-id">Format change to {format.toUpperCase()}!</span>}
                    ContentProps = {{
                        "aria-describedby": "message-id"
                    }}
                    action={                                           
                        <IconButton size="small" aria-label="close" onClick={this.closeSnackbar} color="inherit" key="close">
                            <CloseIcon fontSize="small" />
                        </IconButton>
                   
                    }
                />
            </header>
            
        );
    }
}

export default withStyles(styles)(Navbar);