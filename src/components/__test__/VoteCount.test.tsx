import React from 'react';
import { render } from '@testing-library/react';
import VoteCount from '../question/VoteCount';
import '@testing-library/jest-dom/extend-expect';

test('QuestionSentence', () => {
    const count = 10;
    const { getByText } = render(<VoteCount count={count} />);

    const element = getByText(`${count} 票`);
    expect(element).toBeInTheDocument();
});
