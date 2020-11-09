import React, { ChangeEvent } from 'react';

interface NameInputProps {
    name: string;
    onChange: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, onChange }) => {
    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        onChange(value);
    };

    return (
        <input
            type="text"
            placeholder="名前を入力してください"
            value={name}
            onChange={handleChangeName}
        />
    );
};

export default NameInput;
