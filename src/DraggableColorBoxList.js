import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import {SortableContainer} from 'react-sortable-hoc';


const DraggableColorBoxList = SortableContainer((props) => {
    let {colors, deleteColorBox } = props;
    return (
        <div style={{height: "100%"}}>
            {colors.map( (c,i) => 
                <DraggableColorBox 
                    index={i}
                    color={c.color} 
                    name={c.name} 
                    key={c.name}
                    deleteColor={ () => deleteColorBox(c.name) }
                />
              )}
        </div>
    );
});

export default DraggableColorBoxList;