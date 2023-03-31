import React from "react";

function Item({ id, name, deleteItem }) {
    const remove = () => deleteItem(id)
    return (

        <div>
            {name}
            <button onClick={remove}>X</button>
        </div>

    )
}


export default Item;