import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextField from '../common/TextField';

test('Common TextField', () => {
    const placeholder = 'test';
    const value = 'hoge';
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
        <TextField placeholder={placeholder} onChange={handleChange} />
    );

    const input = getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value } });

    expect(handleChange).toHaveBeenCalled();
});
