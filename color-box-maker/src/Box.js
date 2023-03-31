import React from "react";

function Box({ id, color, width, height, deleteBox }) {
    const remove = () => deleteBox(id)
    return (
        <div>
            <div style={{ backgroundColor: color, width: width, height: height }} >
            </div>
            <button onClick={remove}>X</button>
        </div>
    )
}


export default Box;