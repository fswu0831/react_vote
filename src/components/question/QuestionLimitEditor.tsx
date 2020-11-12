import React, { InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { formatLocalDatetime } from '../../utils';

import './QuestionLimitEditor.css';

interface QuestionLimitEditorProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    value?: string;
    defaultValue?: string;
    min?: string;
}

const QuestionLimitEditor: React.FC<QuestionLimitEditorProps> = ({
    className,
    value,
    defaultValue,
    min,
    onChange,
    ...props
}) => {
    return (
        <div className={classnames('question-limit-editor', className)}>
            <label className="question-limit-editor__label" htmlFor="question-limit">
                期限
            </label>
            <input
                id="question-limit"
                data-testid="question-limit"
                className="question-limit-editor__textfield"
                type="datetime-local"
                name="limit"
                value={value && formatLocalDatetime(new Date(value))}
                defaultValue={defaultValue && formatLocalDatetime(new Date(defaultValue))}
                min={min && formatLocalDatetime(new Date(min))}
                onChange={onChange}
                {...props}
            />
        </div>
    );
};

export default QuestionLimitEditor;
