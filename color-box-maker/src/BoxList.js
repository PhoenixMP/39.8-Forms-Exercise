import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"
import { v4 as uuid } from "uuid";


function BoxList() {
    const [boxes, setBoxes] = useState([]);

    /** Remove a box object from state. */
    const deleteBox = boxId => {
        setBoxes(boxes => boxes.filter(box => box.id !== boxId))
    };
    // end addBox



    /** Add new box object to state. */
    const addBox = box => {
        let newBox = { ...box, id: uuid() };
        setBoxes(boxes => [...boxes, newBox]);
    };
    // end addBox




    const renderBoxes = () => {
        return (
            <li>
                {boxes.map(box => (
                    <ul key={box.id}>
                        <Box id={box.id} color={box.color} width={box.width} height={box.height} deleteBox={deleteBox} />
                    </ul >
                ))}
            </li>
        );
    };
    // end renderBoxes


    return (
        <div className="BoxList">
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    );
};
// end

export default BoxList;
