import React from "react";
import { render } from "@testing-library/react";
import NewItemForm from "./NewItemForm";

it("renders without crashing", function () {
    render(<NewItemForm />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<NewItemForm />);
    expect(asFragment()).toMatchSnapshot();
});
