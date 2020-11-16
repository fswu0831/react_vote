import React from 'react';
import Question from './Question';

import './QuestionList.css';
import { QuestionAttributes } from '../../models/interfaces';

interface QuestionListProps {
    questions?: QuestionAttributes[];
    loginUserId?: number;
    onVote?: (questionId: number, choiceId: number) => void;
    onDelete?: (questionId: number) => void;
}

const QuestionList: React.FC<QuestionListProps> = ({
    questions = [],
    loginUserId,
    onVote,
    onDelete,
}) => {
    return (
        <div className="question-list">
            {questions.map((question) => (
                <Question
                    key={`question-item-${question.id}`}
                    className="question-list__question"
                    {...question}
                    loginUserId={loginUserId}
                    onVote={onVote}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default QuestionList;
