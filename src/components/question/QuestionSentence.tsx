import React from 'react';
import classnames from 'classnames';

import './QuestionSentence.css';

interface QuestionSentenceProps {
    className?: string;
    sentence: string;
}

const QuestionSentence: React.FC<QuestionSentenceProps> = ({ className, sentence }) => {
    return (
        <div className={classnames('question-sentence', className)}>
            {sentence.split('\n').map((line, index) => {
                const key = `sentence-${line}-${index}`;
                return (
                    <p key={key} className="question-sentence__paragraph">
                        {line}
                    </p>
                );
            })}
        </div>
    );
};

export default QuestionSentence;
