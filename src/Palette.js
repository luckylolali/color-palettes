import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteStyles"

class Palette extends Component {
    constructor(props){
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.formatChange = this.formatChange.bind(this);
    }
    changeLevel (level){
        this.setState({level: level});
    }
    formatChange (value) {
        this.setState({format: value });
    }
    render(){      
        let { level,format } = this.state;
        let { classes } = this.props;
        let colors = this.props.palette.colors[level];        
        let boxes = colors.map( c => <ColorBox 
                                        name={c.name} 
                                        color={c[format]} 
                                        key={c.id}
                                        moreUrl = {`/palette/${this.props.palette.id}/${c.id}`}
                                        showingFullPalette
                                        /> );
        return (
            <div className={classes.Palette}>
                <Navbar 
                    level={this.state.level} 
                    levelChange={this.changeLevel} 
                    handleChange={this.formatChange}
                    showLevel
                />
                <div className={classes.Colors}>
                    {boxes}
                </div>
                <PaletteFooter paletteName={this.props.palette.paletteName} emoji={this.props.palette.emoji} />
            </div>
        );
    }
}

export default withStyles(styles)(Palette);