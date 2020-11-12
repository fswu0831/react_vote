import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Editor from '../question/QuestionSentenceEditor';

test('QuestionSentenceEditor', () => {
    const placeholder = 'editor';
    const value = 'hoge';
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
        <Editor placeholder={placeholder} onChange={handleChange} />
    );

    const textarea = getByPlaceholderText(placeholder);
    fireEvent.change(textarea, { target: { value } });

    expect(handleChange).toHaveBeenCalled();
});
