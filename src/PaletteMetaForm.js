import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteMetaForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            paletteName: "",
            formStage: "form"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleNameSubmit = this.handleNameSubmit.bind(this);
        this.handleEmojiSubmit = this.handleEmojiSubmit.bind(this);
    }  
    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', value =>
            this.props.palettes.every( ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase() )
        );
    }
    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value});
    }
    handleNameSubmit(){
        this.setState({formStage:"emoji"});
    }
    handleEmojiSubmit(emoji){
        let newPalette = { paletteName: this.state.paletteName, emoji: emoji.native};
        this.props.handleSubmit(newPalette);
        this.setState({formStage:""});
    }
    
    render(){
        // let {paletteName} = this.state;
        let { open, handleClose} = this.props;
        return (
            <div>
            
            <Dialog open={this.state.formStage==="emoji"} onClose={handleClose} aria-labelledby="form-dialog-emoji-title">
                <DialogTitle id="form-dialog-emoji-title">Pick an emoji</DialogTitle>
                <DialogContent>
                    <Picker onSelect={this.handleEmojiSubmit} />     
                </DialogContent>
            </Dialog>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create a new palette</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Create your own palette, please give it a unique name
                </DialogContentText>
                <ValidatorForm
                onSubmit={this.handleNameSubmit}
                >
                    <TextValidator
                    label="Palette Name"
                    onChange={this.handleChange}
                    name="paletteName"
                    fullWidth
                    margin="normal"
                    value={this.state.paletteName}
                    validators={['required', 'isPaletteNameUnique']}
                    errorMessages={['this field is required', 
                                    'This palette name has been used',
                                    ]}
                    />                                                     
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>              
                        <Button variant="contained" color="primary" type="submit">
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>  
                </DialogContent>
               
            </Dialog>
            </div>
        );
    }
  
}
export default PaletteMetaForm;