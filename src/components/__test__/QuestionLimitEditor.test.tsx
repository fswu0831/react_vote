import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Editor from '../question/QuestionLimitEditor';

test('QuestionLimitEditor', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<Editor onChange={handleChange} />);

    const input = getByTestId('question-limit');
    fireEvent.change(input, { target: { value: '2020-09-01T00:00' } });

    expect(handleChange).toHaveBeenCalled();
});
