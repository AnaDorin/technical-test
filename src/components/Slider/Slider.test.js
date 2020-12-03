import React from "react";
import Slider from "./Slider";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Question component", () => {
    const wrapper = () => {
        return render(<Slider/>);
    };
    it("should build the component", () => {
        const { container } = wrapper();
        expect(container).toMatchSnapshot();
    });
});