import React, { FormEvent } from 'react';
import TextField from '../common/TextField';
import Button from '../common/Button';
import { SignInAttributes } from '../../models/interfaces';

import './SignIn.css';
// ダミーデータ
import { signInParams } from '../../models/data';

interface SignInProps {
    onSignIn: (params: SignInAttributes) => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
    /**
     * submit時に実行されるイベントハンドラー
     */
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            // フォームの入力に誤りがなければ認証処理を実行する
            onSignIn(signInParams);
        }
    };

    return (
        <form className="sign-in__form" onSubmit={handleSubmit}>
            <TextField
                type="email"
                name="email"
                className="sign-in__email"
                placeholder="メールアドレス"
                required
            />
            <TextField
                type="password"
                name="password"
                className="sign-in__password"
                placeholder="パスワード"
                required
            />
            <Button type="submit" variant="entry" className="sign-in__button">
                ログイン
            </Button>
        </form>
    );
};

export default SignIn;
