import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../common/Button';

test('Common Button', () => {
    const text = 'button';
    const handleClick = jest.fn();
    const { getByText } = render(
        <Button variant="normal" onClick={handleClick}>
            {text}
        </Button>
    );

    const button = getByText(text);
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
});
