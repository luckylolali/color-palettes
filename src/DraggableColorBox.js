
import React from "react";
import {withStyles} from "@material-ui/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement} from 'react-sortable-hoc';
import styles from "./styles/DraggableColorBoxStyles";

const DraggableColorBox = SortableElement ( props =>{
    let {classes, deleteColor} = props;
    return (
        <div className={classes.root}>
            <div className={classes.boxContent}>
                <span>{props.name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={deleteColor}/>
            </div>
        </div>
    );
});
// const DraggableColorBox = (props) =>{
//     let {classes} = props;
//     return (
//         <div className={classes.root}>
//             <div className={classes.boxContent}>
//                 <span>{props.name}</span>
//                 <DeleteIcon className={classes.deleteIcon} onClick={props.deleteColor}/>
//             </div>
//         </div>
//     );
// };

export default withStyles(styles)(DraggableColorBox);