import React, { useState } from "react";
import NewItemForm from "./NewItemForm";
import Item from "./Item"
import { v4 as uuid } from "uuid";


function ItemList() {
    const [items, setItems] = useState([]);

    /** Remove item object from state. */
    const deleteItem = itemId => {
        setItems(items => items.filter(item => item.id !== itemId))
    };
    // end addItem



    /** Add new item object to state. */
    const addItem = item => {
        let newItem = { ...item, id: uuid() };
        setItems(items => [...items, newItem]);
    };
    // end addItem




    const renderItems = () => {
        return (
            <li>
                {items.map(item => (
                    <ul key={item.id}>
                        <Item id={item.id} name={item.name} deleteItem={deleteItem} />
                    </ul >
                ))}
            </li>
        );
    };
    // end renderBoxes


    return (
        <div className="ItemList">
            <NewItemForm addItem={addItem} />
            {renderItems()}
        </div>
    );
};
// end

export default ItemList;
