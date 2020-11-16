import React from 'react';
import { render } from '@testing-library/react';
import QuestionSentence from '../question/QuestionSentence';
import '@testing-library/jest-dom/extend-expect';

test('QuestionSentence', () => {
    const text = '質問文';
    const { getByText } = render(<QuestionSentence sentence={text} />);

    const element = getByText(text);
    expect(element).toBeInTheDocument();
});
