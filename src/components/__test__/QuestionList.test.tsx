import React from 'react';
import { render } from '@testing-library/react';
import QuestionList from '../question/QuestionList';
import '@testing-library/jest-dom/extend-expect';
import { questions } from '../../models/data';

test('QuestionList', () => {
    const { getByText } = render(<QuestionList questions={questions} />);

    for (let i = 0; i < questions.length; i += 1) {
        const element = getByText(questions[i].sentence);
        expect(element).toBeInTheDocument();
    }
});
