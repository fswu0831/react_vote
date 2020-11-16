import React from 'react';
import { render } from '@testing-library/react';
import QuestionLimit from '../question/QuestionLimit';
import { formatLocalDatetime } from '../../utils';
import '@testing-library/jest-dom/extend-expect';

test('QuestionLimit', () => {
    const limit = '2020-01-01T09:00:00.000Z';
    const { getByText } = render(<QuestionLimit limit={limit} />);

    const element = getByText(`${formatLocalDatetime(new Date(limit))} まで`);
    expect(element).toBeInTheDocument();
});
