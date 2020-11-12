import React, { InputHTMLAttributes, ChangeEvent } from 'react';
import classnames from 'classnames';
import TextField from '../common/TextField';
import Button from '../common/Button';

import './ChoiceItem.css';

interface ChoiceItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    index: number;
    isLastItem?: boolean;
    onDelete?: (index: number) => void;
    onChange?: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

const ChoiceItem: React.FC<ChoiceItemProps> = ({
    className,
    value,
    index,
    isLastItem = false,
    onChange,
    onDelete,
    ...props
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event, index);
        }
    };

    const handleDelete = () => {
        if (onDelete) {
            onDelete(index);
        }
    };

    return (
        <div className={classnames('choice-item', className)}>
            <TextField
                type="text"
                className="choice-item__text-field"
                placeholder={`選択肢 ${index + 1}`}
                value={value}
                onChange={handleChange}
                {...props}
            />
            {isLastItem && (
                <Button
                    type="button"
                    variant="delete"
                    className="choice-item__delete-button"
                    onClick={handleDelete}
                >
                    削除
                </Button>
            )}
        </div>
    );
};

export default ChoiceItem;
