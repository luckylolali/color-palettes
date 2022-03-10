import React, {Component} from "react";
import {Link} from "react-router-dom";
import MiniPalette from "./MiniPalette";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
//import PersonIcon from '@material-ui/icons/Person';
import { blue } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletePaletteId: ""
        }
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }
    openDialog(id){
        this.setState({openDeleteDialog: true, deletePaletteId: id});
    }
    closeDialog(){
        this.setState({openDeleteDialog: false, deletePaletteId: ""})
    }
    handleDelete(){
        this.props.deletePalette(this.state.deletePaletteId);
        this.closeDialog();
    }
    goToPalette (id) {
        this.props.history.push(`/palette/${id}`);
    }
    render(){
        let {list, classes} = this.props;
        let { openDeleteDialog } = this.state;

        return (
            <div className={ classes.root}>
                <div className={classes.container}>
                    <div className={classes.nav}>
                        <h1>Color Pallettes</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </div>                    
                        <TransitionGroup className={classes.palettes}>
                        {list.map( p => (
                            <CSSTransition key={p.id} timeout={500} classNames="fade">
                            <MiniPalette {...p} 
                             //deletePalette = { this.props.deletePalette}
                             //deletePalette={this.openDialog(p.id)}
                             openDialog = {this.openDialog}
                             key={p.id}
                             id={p.id}
                            handleClick={this.goToPalette} />   
                            </CSSTransition>                                                   
                        ))}
                        </TransitionGroup>                                      
                </div>
                <Dialog aria-labelledby="simple-dialog-title" open={openDeleteDialog} onClose={this.closeDialog}>
                    <DialogTitle id="simple-dialog-title">Want to delete this palette?</DialogTitle>
                    <List>
                        <ListItem autoFocus button onClick={this.handleDelete}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                            <CheckIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Delete Palette" />
                        </ListItem>
                        <ListItem autoFocus button onClick={this.closeDialog}>
                        <ListItemAvatar>
                            <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                            <CloseIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Cancel Delete" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}
export default withStyles(styles)(PaletteList);
