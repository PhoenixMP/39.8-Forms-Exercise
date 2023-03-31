import React from "react";
import { render } from "@testing-library/react";
import Item from "./Item";


it("renders without crashing", function () {
    render(<Item />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<Item />);
    expect(asFragment()).toMatchSnapshot();
});



