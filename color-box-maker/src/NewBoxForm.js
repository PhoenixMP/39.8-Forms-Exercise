import React, { useState } from "react";

/** Form for creating a new box to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {color, width, height} to fn rec'd from parent.
 *
 */

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = { color: "", height: "", width: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);

    /** Send {color, height, width} to parent
     *    & clear form. */

    const handleSubmit = evt => {
        evt.preventDefault();
        addBox(formData);
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
            <label htmlFor="color">Box Color:</label>
            <input
                id="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
            />

            <label htmlFor="width">Box Width:</label>
            <input

                id="width"
                name="width"
                value={formData.width}
                onChange={handleChange}
            />

            <label htmlFor="height">Box Height:</label>
            <input

                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
            />

            <button>Add a new Box!</button>
        </form>
    );
};

export default NewBoxForm;
