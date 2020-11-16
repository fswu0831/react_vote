import React from 'react';
import { render } from '@testing-library/react';
import VoteResult from '../question/VoteResult';
import '@testing-library/jest-dom/extend-expect';
import { questions } from '../../models/data';

describe('VoteResult', () => {
    test('未投票', () => {
        const { getByText } = render(
            <VoteResult
                choice={questions[0].choices[0]}
                votes={questions[0].votes}
                loginUserId={0}
            />
        );

        // 選択肢
        const choice = getByText(questions[0].choices[0].content);
        expect(choice).toBeInTheDocument();

        // 投票率
        const rate = getByText(/\d %/i);
        expect(rate).toBeInTheDocument();
    });

    test('投票済み', () => {
        const { getByText } = render(
            <VoteResult
                choice={questions[1].choices[1]}
                votes={questions[1].votes}
                loginUserId={1}
            />
        );

        // 投票済みマーク
        const mark = getByText('✔︎');
        expect(mark).toBeInTheDocument();
    });
});
