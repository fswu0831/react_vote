import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignOut from '../authentication/SignOut';

test('SignOut Component', () => {
    const handleSignOut = jest.fn();
    const { getByText } = render(<SignOut userName="kimura" onSignOut={handleSignOut} />);

    // ログアウトボタンのクリック
    const button = getByText('ログアウト');
    fireEvent.click(button);

    // onSignOut が呼ばれた？
    expect(handleSignOut).toHaveBeenCalled();
});
