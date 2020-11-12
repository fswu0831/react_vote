import React, { TextareaHTMLAttributes } from 'react';
import classnames from 'classnames';

import './QuestionSentenceEditor.css';

type QuestionSentenceEditorProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const QuestionSentenceEditor: React.FC<QuestionSentenceEditorProps> = ({
    className,
    value,
    onChange,
    ...props
}) => {
    return (
        <textarea
            className={classnames(className, 'question-sentence-editor__textarea')}
            onChange={onChange}
            {...props}
        >
            {value}
        </textarea>
    );
};

export default QuestionSentenceEditor;
