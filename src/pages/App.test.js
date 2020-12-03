import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
    const wrapper = () => {
        return render(<App />);
    };

    it("should build the component", () => {
        const { container } = wrapper();
        expect(container).toMatchSnapshot();
    });
});