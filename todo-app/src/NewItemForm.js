import React, { useState } from "react";

/** Form for creating a new box to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {color, width, height} to fn rec'd from parent.
 *
 */

const NewItemForm = ({ addItem }) => {
    const INITIAL_STATE = { name: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {name} to parent
     *    & clear form. */

    const handleSubmit = evt => {
        evt.preventDefault();
        addItem(formData);
        setFormData(INITIAL_STATE);
    };

    /** Update local state w/curr state of input elem */

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };

    /** render form */

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Todo List Item:</label>
            <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <button>Add a new Item!</button>
        </form>
    );
};

export default NewItemForm;
