import React, { ChangeEvent } from 'react';
import classnames from 'classnames';
import ChoiceItem from './ChoiceItem';
import Button from '../common/Button';
import { ChoiceEntryAttributes } from '../../models/interfaces';

import './ChoiceList.css';

interface ChoiceListProps {
    className?: string;
    choices: ChoiceEntryAttributes[];
    onAdd?: VoidFunction;
    onDelete?: (index: number) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const ChoiceList: React.FC<ChoiceListProps> = ({
    className,
    choices,
    onAdd,
    onDelete,
    onChange,
}) => {
    return (
        <div className={classnames('choice-list', className)}>
            {choices.map((choice, index) => (
                <ChoiceItem
                    key={`choice-item-${choice.content}`}
                    className="choice-list__item"
                    index={index}
                    isLastItem={choices.length === index + 1}
                    value={choice.content}
                    required
                    maxLength={255}
                    onDelete={onDelete}
                    onChange={onChange}
                />
            ))}
            <Button variant="normal" className="choice-list__add-button" onClick={onAdd}>
                追加
            </Button>
        </div>
    );
};

export default ChoiceList;
