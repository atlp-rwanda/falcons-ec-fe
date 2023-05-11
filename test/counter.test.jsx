/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {render, screen, fireEvent} from './jest.setup'
import '@testing-library/jest-dom';
import Counter from "../src/components/Counter";


describe('test landing page', () => {
    test('should test landing page',async () => { 
        render(
            <Counter />
        )
        expect(screen.getByTestId('counter')).toBeInTheDocument()
        const button = screen.getByRole('button', {name: 'Increment'});
        const input = screen.getByPlaceholderText('Enter a number')
        fireEvent.click(button)
        expect(button).toBeInTheDocument()
        expect(input).toBeInTheDocument()
       
     })
})