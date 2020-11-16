import React from 'react';
import classnames from 'classnames';

interface VoteCountProps {
    className?: string;
    count: number;
}

const VoteCount: React.FC<VoteCountProps> = ({ className, count }) => {
    return <div className={classnames('vote-count', className)}>{count} 票</div>;
};

export default VoteCount;
