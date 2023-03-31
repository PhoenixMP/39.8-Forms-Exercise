import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ItemList from "./ItemList";

function addBox(itemList, name = "sort out my life") {
    const nameInput = itemList.getByLabelText("Todo List Item:");
    fireEvent.change(nameInput, { target: { value: name } });
    const button = itemList.getByText("Add a new Item!");
    fireEvent.click(button);
}

it("renders without crashing", function () {
    render(<ItemList />);
});
// expect(asFragment()).toMatchSnapshot();
it("matches snapshot", function () {
    const { asFragment } = render(<ItemList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new item", function () {
    const itemList = render(<ItemList />);

    // no items yet
    expect(itemList.queryByText("X")).not.toBeInTheDocument();

    addBox(itemList);

    // expect to see a item
    const removeButton = itemList.getByText("X");
    const itemName = itemList.getByText("sort out my life");
    expect(removeButton).toBeInTheDocument();
    expect(itemName).toBeInTheDocument();

    // expect form to be empty
    expect(itemList.getAllByDisplayValue("")).toHaveLength(1);


});

it("can remove a box", function () {
    const itemList = render(<ItemList />);
    addBox(itemList);

    const removeButton = itemList.getByText("X");

    // click the remove button and the item should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});
