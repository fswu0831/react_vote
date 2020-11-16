import React, { useMemo } from 'react';
import classnames from 'classnames';
import { ChoiceAttributes, VoteAttributes } from '../../models/interfaces';

import './VoteResult.css';

interface VoteResultProps {
    className?: string;
    choice: ChoiceAttributes;
    votes?: VoteAttributes[];
    loginUserId?: number;
}

const VoteResult: React.FC<VoteResultProps> = ({ className, choice, votes = [], loginUserId }) => {
    // この選択肢に該当する投票
    const gainVotes = useMemo(() => votes.filter((vote) => vote.choiceId === choice.id), [
        choice.id,
        votes,
    ]);
    // この選択肢に投票済み？
    const voted = useMemo(() => gainVotes.some((vote) => vote.votedBy === loginUserId), [
        gainVotes,
        loginUserId,
    ]);
    // 得票率
    const rate = useMemo(
        () => (votes.length === 0 ? 0 : Math.round((gainVotes.length / votes.length) * 100)),
        [gainVotes.length, votes.length]
    );

    return (
        <div
            className={classnames('vote-result__item', className, {
                'vote-result__item--voted': voted,
            })}
        >
            <div
                className={classnames('vote-result__rate-bar', {
                    'vote-result__rate-bar--voted': voted,
                })}
                style={{ width: `calc(100% * ${rate / 100})` }}
            />
            <div className="vote-result__content">
                <div className="vote-result__choice">{choice.content}</div>
                {voted && <div className="vote-result__voted-mark">✔︎</div>}
                <div className="vote-result__rate">{`${rate} %`}</div>
            </div>
        </div>
    );
};

export default VoteResult;
