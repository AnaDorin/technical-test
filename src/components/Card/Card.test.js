import React from "react";
import Card from "./Card";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe("Question component", () => {
    const sliderObject = {
        name: "Digital isolator SO-16W",
        productImageUrl: "https://www.distrelec.biz/Web/WebShopImages/landscape_medium/ho/to/SO-16W-Photo.jpg",
        productImageAltText: "Image not found",
        price: {
            currency: "GBP",
            formattedValue: "8.83"
        },
    }
    const wrapper = () => {
        return render(<Card index={0} props={sliderObject}/>);
    };
    it("should build the component", () => {
        const { container } = wrapper();
        expect(container).toMatchSnapshot();
    });
});