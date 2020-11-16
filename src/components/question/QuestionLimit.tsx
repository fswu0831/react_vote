import React from 'react';
import classnames from 'classnames';
import { formatLocalDatetime } from '../../utils';

interface QuestionLimitProps {
    className?: string;
    limit: string;
}

const QuestionLimit: React.FC<QuestionLimitProps> = ({ className, limit }) => {
    return (
        <div className={classnames('question-limit', className)}>
            {formatLocalDatetime(new Date(limit))} まで
        </div>
    );
};

export default QuestionLimit;
