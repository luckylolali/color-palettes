import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from "@material-ui/core/Button";
import DraggableColorBoxList from "./DraggableColorBoxList";
import {arrayMove} from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import styles from "./styles/NewPaletteFormStyles";
import seedColors from "./seedColors";

class NewPaletteForm extends Component{
    static defaultProps = {
        maxBox: 20
    }
    constructor(props){
        super(props);
        this.state ={
            open: true,
            colors: seedColors[1].colors,
            paletteName: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.deleteSingleColorBox = this.deleteSingleColorBox.bind(this);
        this.onSortEnd = this.onSortEnd.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }
    
    handleDrawerOpen(){
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    addNewColor = (newColor) => {        
        this.setState({colors: [...this.state.colors, newColor]});
    }
    handleSubmit(palette){
        //const name = this.state.paletteName;
        let name = palette.paletteName;
        let newPalette = {
            paletteName: name,
            id: name.replace(/ /g, "-"),
            emoji: palette.emoji,
            colors: this.state.colors
        }
        this.props.savePalette(newPalette);
        this.setState({paletteName: ""});
        this.props.history.push("/");
    }
    deleteSingleColorBox(colorName) {
        //alert("delete color box");
        this.setState({
            colors: this.state.colors.filter( c => c.name !== colorName )
        })
    }
    
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({colors}) => ({
            colors: arrayMove(this.state.colors, oldIndex, newIndex),
        }));
    };
    clearColors = () => {
        this.setState({colors: []});
    }
    randomColor = () => {
        let allColors = this.props.palettes.map( p => p.colors ).flat();    
        let rand;
        let randColor;
        let isDuplicteColor = true;
        while(isDuplicteColor) {
            rand = Math.floor(Math.random() * allColors.length);
            randColor = allColors[rand]; 
            isDuplicteColor = this.state.colors.some( 
                color => color.name === randColor.name 
            );
        }
        this.setState({ colors: [...this.state.colors, randColor]});
    }
    
    render(){
        let { classes,maxBox,palettes } = this.props;
        let { open, colors } = this.state;
        let isPaletteFull = colors.length >= maxBox;
        return(
            <div className={classes.root}>
            <PaletteFormNav classes={classes}
                            open={open}
                            palettes={palettes}
                            handleSubmit = { this.handleSubmit }
                            handleDrawerOpen = { this.handleDrawerOpen }
            />
            <Drawer
              className={classes.drawer}
              variant='persistent'
              anchor='left'
              open={open}
              classes={{
                paper: classes.drawerPaper
              }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>              
                <Divider />
                <div className={classes.container}>
                <Typography variant="h4">
                    Design Your Palette
                </Typography>
                <div className={classes.buttons}>
                <Button variant="contained" color="secondary" onClick={this.clearColors} className={classes.button}>
                    Clear Palette
                </Button>
                <Button variant="contained" 
                        color="primary" 
                        onClick={this.randomColor} 
                        disabled={isPaletteFull}>
                        { isPaletteFull ? "Palette is full" : "Random Color"}
                    
                </Button>
                </div>
                <ColorPickerForm isPaletteFull={isPaletteFull} 
                                    colors={colors}
                                    addNewColor={this.addNewColor}
                />
                </div>            
            </Drawer>
            <main
              className={classNames(classes.content, {
                [classes.contentShift]: open
              })}
            >
              <div className={classes.drawerHeader} />                          
              <DraggableColorBoxList 
                colors={this.state.colors} 
                deleteColorBox={this.deleteSingleColorBox} 
                axis="xy"
                distance={1}
                onSortEnd={this.onSortEnd}
             />
            </main>
          </div>
        );
    }
}
export default withStyles(styles,{withTheme: true})(NewPaletteForm);