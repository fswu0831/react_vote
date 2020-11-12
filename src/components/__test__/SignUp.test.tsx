import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SignUp from '../authentication/SignUp';
import { userEntry } from '../../models/data';

test('SignIn Component', () => {
    const handleSignUp = jest.fn();
    const { getByPlaceholderText, getByText } = render(<SignUp onSignUp={handleSignUp} />);

    // メールアドレス入力
    const inputEmail = getByPlaceholderText('メールアドレス');
    fireEvent.change(inputEmail, { target: { value: userEntry.email } });
    // 名前入力
    const inputName = getByPlaceholderText('名前');
    fireEvent.change(inputName, { target: { value: userEntry.name } });
    // パスワード入力
    const inputPassword = getByPlaceholderText('パスワード');
    fireEvent.change(inputPassword, { target: { value: userEntry.password } });

    // 登録ボタンのクリック
    const button = getByText('登録');
    fireEvent.click(button);

    // onSignUp が呼ばれた？
    expect(handleSignUp).toHaveBeenCalled();
});
