import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignIn from '../authentication/SignIn';
import { signInParams } from '../../models/data';

test('SignIn Component', () => {
    const handleSignIn = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SignIn onSignIn={handleSignIn} />);

    // メールアドレス入力
    const inputEmail = getByPlaceholderText('メールアドレス');
    fireEvent.change(inputEmail, { target: { value: signInParams.email } });
    // パスワード入力
    const inputPassword = getByPlaceholderText('パスワード');
    fireEvent.change(inputPassword, { target: { value: signInParams.password } });

    // ログインボタンのクリック
    const button = getByText('ログイン');
    fireEvent.click(button);

    // onSignIn が呼ばれた？
    expect(handleSignIn).toHaveBeenCalled();
});
