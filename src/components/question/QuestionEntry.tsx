import React, { FormEvent } from 'react';
import QuestionSentenceEditor from './QuestionSentenceEditor';
import QuestionLimitEditor from './QuestionLimitEditor';
import ChoiceList from './ChoiceList';
import Button from '../common/Button';
import { QuestionEntryAttributes } from '../../models/interfaces';

import './QuestionEntry.css';
import { questionRequest } from '../../models/data';

interface QuestionEntryProps {
    onEntry?: (params: QuestionEntryAttributes) => void;
}

const QuestionEntry: React.FC<QuestionEntryProps> = ({ onEntry }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (event.currentTarget.checkValidity()) {
            if (onEntry) {
                onEntry(questionRequest);
            }
        }
    };

    return (
        <form className="question-entry__form" onSubmit={handleSubmit}>
            <h2 className="question-entry__title">質問を投稿する</h2>
            <QuestionSentenceEditor
                className="question-entry__sentence"
                name="sentence"
                placeholder="質問"
                required
                maxLength={255}
                defaultValue={questionRequest.sentence}
            />
            <ChoiceList className="question-entry__list" choices={questionRequest.choices} />
            <QuestionLimitEditor
                className="question-entry__limit"
                name="limit"
                required
                defaultValue={questionRequest.limit}
            />
            <Button type="submit" variant="entry" className="question-entry__entry-button">
                登録
            </Button>
        </form>
    );
};
export default QuestionEntry;
