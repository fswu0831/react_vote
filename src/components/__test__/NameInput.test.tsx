import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NameInput from '../NameInput';

test('名前の入力', () => {
    const name = 'kimura';
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(<NameInput name="" onChange={handleChange} />);
    const inputElement = getByPlaceholderText('名前を入力してください');
    fireEvent.change(inputElement, { target: { value: name } });
    const param = handleChange.mock.calls[0][0];
    expect(param).toBe(name);
});
