import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChoiceItem from '../question/ChoiceItem';

test('ChoiceItem Component', () => {
    const handleChange = jest.fn();
    const handleDelete = jest.fn();
    const { getByPlaceholderText, getByText } = render(
        <ChoiceItem index={0} isLastItem onChange={handleChange} onDelete={handleDelete} />
    );

    // 変更
    const input = getByPlaceholderText('選択肢 1');
    fireEvent.change(input, { target: { value: 'ほげ' } });

    expect(handleChange).toHaveBeenCalled();

    // 削除ボタン
    const button = getByText('削除');
    fireEvent.click(button);

    expect(handleDelete).toHaveBeenCalled();
});
