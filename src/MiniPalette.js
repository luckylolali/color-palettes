import React,{PureComponent} from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import styles from "./styles/MiniPaletteStyles";


class  MiniPalette extends PureComponent{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleDelete(e){
        e.stopPropagation(); 
        this.props.openDialog(this.props.id);
    }
    handleClick(){
        this.props.handleClick(this.props.id);
    }
    render(){
        let { classes, paletteName, emoji, colors } = this.props;
        let miniBoxes = colors.map ( color => (
                                    <div className={classes.miniColor} 
                                        style={{backgroundColor: color.color }} 
                                        key={color.name}/>
                                    ) );
        return (
            <div className={classes.root} onClick={this.handleClick}>                
                <DeleteIcon className={classes.deleteIcon}
                            onClick={this.handleDelete}
                />                
                <div className={classes.colors}> { miniBoxes }</div>
                <h5 className={classes.title} >
                    {paletteName}<span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
    );
    }
}


export default withStyles(styles)(MiniPalette);