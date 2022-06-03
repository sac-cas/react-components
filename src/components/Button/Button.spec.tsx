import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

const label = 'Some Label';

describe("<Button/>", () => {
    it('should render the component', () => {
        const { container } = render(<Button>{label}</Button>);
        expect(container.textContent).toEqual(label);
    });
});
