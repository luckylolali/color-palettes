import React, { Component } from "react";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/ColorPickerFormStyles";

class ColorPickerForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            currentColor: "black",
            colorName: "",               
        }
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    componentDidMount() {
        // custom rule will have name 'isPasswordMatch'
        ValidatorForm.addValidationRule('isColorNameUnique', value =>
            this.props.colors.every( ({name}) => name.toLowerCase() !== value.toLowerCase() )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.props.colors.every(({ color }) => color !== this.state.currentColor)            
        );
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    handleSubmit(){
        let newColor= { color: this.state.currentColor, name: this.state.colorName};
        this.props.addNewColor(newColor);
        this.setState({currentColor: "#000000", colorName: ""})
    }
    handleColorChange(color, event) {
        this.setState({ currentColor: color.hex });
    }
    render(){
        let {currentColor, colorName} = this.state;
        let { isPaletteFull, classes } = this.props;
        return(
            <div className={classes.root}>
                <ChromePicker 
                className={classes.colorPicker}
                color={currentColor}
                onChangeComplete={ this.handleColorChange }
              />
              <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={errors => console.log(errors)}
                className={classes.colorNameForm}
                instantValidate={false}
                >
                <TextValidator
                    label="Color Name"
                    onChange={this.handleChange}
                    name="colorName"
                    variant="filled"
                    fullWidth={true}
                    margin="normal"
                    value={colorName}
                    validators={['required', 'isColorNameUnique','isColorUnique']}
                    errorMessages={['this field is required', 
                                    'This name has been used',
                                    'This color is in palette already']}
                />
                <Button 
                    variant="contained" 
                    className={classes.colorButton}
                    color="primary" 
                    size="large"
                    fullWidth={true}
                    type="submit"
                    style={{backgroundColor: isPaletteFull ? "grey" : currentColor}}
                    disabled={isPaletteFull}
                    >
                        { isPaletteFull ? "Palette is full" : "Add Color"}
                    
                </Button>
            </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);