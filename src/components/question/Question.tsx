import React, { useMemo } from 'react';
import classnames from 'classnames';
import QuestionSentence from './QuestionSentence';
import QuestionLimit from './QuestionLimit';
import VoteCount from './VoteCount';
import Button from '../common/Button';
import VoteResult from './VoteResult';
import { QuestionAttributes } from '../../models/interfaces';

import './Question.css';

interface QuestionProps extends QuestionAttributes {
    className?: string;
    loginUserId?: number;
    onVote?: (questionId: number, choiceId: number) => void;
    onDelete?: (questionId: number) => void;
}

const Question: React.FC<QuestionProps> = ({
    className,
    id,
    sentence,
    choices,
    votes,
    limit,
    createdBy,
    loginUserId,
    onVote,
    onDelete,
}) => {
    /**
     * 投票可能かどうか
     */
    const isVotable = useMemo(() => {
        // 期限切れなら投票不可
        const now = new Date();
        const limitDate = new Date(limit);
        if (limitDate < now) {
            return false;
        }
        // 投票済みであれば投票不可
        const voted = votes?.some((v) => v.votedBy === loginUserId);
        if (voted) {
            return false;
        }
        // 投票可能
        return true;
    }, [limit, loginUserId, votes]);

    return (
        <div className={classnames('question-item', className)}>
            <QuestionSentence className="question-item__sentence" sentence={sentence} />
            {choices.map((choice) => {
                if (isVotable) {
                    return (
                        <Button
                            key={`vote-button-${choice.id}`}
                            variant="normal"
                            className="question-item__vote-button"
                            onClick={() => {
                                if (onVote) {
                                    onVote(id, choice.id);
                                }
                            }}
                        >
                            {choice.content}
                        </Button>
                    );
                }
                return (
                    <VoteResult
                        key={`vote-result-${choice.id}`}
                        className="question-item__vote-result"
                        choice={choice}
                        votes={votes}
                        loginUserId={loginUserId}
                    />
                );
            })}
            <div className="question-item__footer">
                <QuestionLimit className="question-item__limit" limit={limit} />
                <VoteCount className="question-item__vote-count" count={votes?.length ?? 0} />
                {loginUserId === createdBy && (
                    <div className="question-item__my-item">
                        <Button
                            variant="delete"
                            onClick={() => {
                                if (onDelete) {
                                    onDelete(id);
                                }
                            }}
                        >
                            削除
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Question;
