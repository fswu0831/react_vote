import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Question from '../question/Question';
import { questions } from '../../models/data';

test('Question', () => {
    const handleVote = jest.fn();
    const handleDelete = jest.fn();

    const { getByText } = render(
        <Question
            onVote={handleVote}
            onDelete={handleDelete}
            {...questions[0]}
            loginUserId={questions[0].createdBy}
        />
    );

    // 投票する
    const voteButton = getByText(questions[0].choices[0].content);
    fireEvent.click(voteButton);
    expect(handleVote).toHaveBeenCalled();

    // 削除
    const deleteButton = getByText('削除');
    fireEvent.click(deleteButton);
    expect(handleDelete).toHaveBeenCalled();
});
