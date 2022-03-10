import React, {Component} from "react";
import { withStyles } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import classNames from "classnames";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import Button from "@material-ui/core/Button";
import PaletteMetaForm from "./PaletteMetaForm";
import styles from "./styles/PaletteFormNavStyles";



class PaletteFormNav extends Component {
    constructor(props){
        super(props);
        this.state = {
          showForm: false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClickOpen = () => {
      //setOpen(true);
      this.setState({showForm: true});
    };
    handleClose = () => {
      //setOpen(false);
      this.setState({showForm: false});
    };
   
    render(){
        let { classes, open, handleSubmit, handleDrawerOpen, palettes } = this.props;
        return(
        <div>
            <CssBaseline />
            <AppBar
              position='fixed'
              color="default"
              className={classNames(classes.appBar, {
                [classes.appBarShift]: open
              })}
            >
              <Toolbar disableGutters={!open}>
                <IconButton
                  color='default'
                  aria-label='Open drawer'
                  onClick={handleDrawerOpen}
                  className={classNames(classes.menuButton, open && classes.hide)}
                >
                  <LibraryAddCheckIcon />
                </IconButton>
                <Typography variant='h6' color='inherit' noWrap>
                  Create a palette
                </Typography>
                </Toolbar>
                <div className={classes.navBtns}>
                <Button variant="contained" color="secondary" className={classes.goBackButton}>
                  <Link to="/">
                      Go Back
                  </Link>
                </Button>
                <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                    Save
                </Button>
                <PaletteMetaForm handleSubmit={handleSubmit}
                                 palettes={palettes}
                                 open={this.state.showForm}
                                 handleClose = { this.handleClose}
                />
                </div>                   
            </AppBar>
        </div>
        );
    }
}

export default withStyles(styles,{theme: true})(PaletteFormNav);