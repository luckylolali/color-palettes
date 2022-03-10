import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteStyles"



class SingleColorPalette extends Component {
    constructor(props){
        super(props);
        this.__colorShades = this.getColorShades(this.props.palette, this.props.colorId);
        this.state = {
            format: "hex"
        }
        this.formatChange = this.formatChange.bind(this);
        //console.log(this.__colorShades);
    }
    getColorShades(palette, colorId){
        let shades = [];
        const allColors = this.props.palette.colors;
        for (const key in allColors) {
            shades = shades.concat(allColors[key].filter( c => c.id === colorId));
        }
        return shades.slice(1);
    }
    formatChange (value) {
        this.setState({format: value });
    }
    render(){
        let {palette, classes} = this.props;
        let {format} = this.state;
        let boxes = this.__colorShades.map ( color => <ColorBox 
                                                        name={color.name} 
                                                        color={color[format]} 
                                                        key={color.name}
                                                        showingFullPalette={false}
                                                    />);
        return (
            <div className={classes.Palette}>
                <Navbar handleChange={this.formatChange} showLevel={false}/>
                <div className={classes.Colors}>
                    {boxes}
                    <div className={classes.goBack}>
                        <Link to={`/palette/${palette.id}`}>                        
                            <button>
                                Go Back
                            </button>
                        </Link>
                    </div>                   
                </div>
                <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji}/>
            </div>
        );
    }
}

export default withStyles(styles)(SingleColorPalette);