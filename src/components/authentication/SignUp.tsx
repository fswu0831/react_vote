import React, { FormEvent } from 'react';
import TextField from '../common/TextField';
import Button from '../common/Button';
import { UserEntryAttributes } from '../../models/interfaces';

import './SignUp.css';
import { userEntry } from '../../models/data';

interface SignUpProps {
    onSignUp: (params: UserEntryAttributes) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSignUp }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (event.currentTarget.checkValidity()) {
            // ユーザー登録処理
            onSignUp(userEntry);
        }
    };

    return (
        <form className="sign-up__form" onSubmit={handleSubmit}>
            <h2 className="sign-up__title">ユーザー登録</h2>
            <TextField
                type="email"
                name="email"
                className="sign-up__email"
                required
                maxLength={255}
                placeholder="メールアドレス"
            />
            <TextField
                type="text"
                name="name"
                className="sign-up__name"
                required
                maxLength={255}
                placeholder="名前"
            />
            <TextField
                type="password"
                name="password"
                className="sign-up__password"
                required
                minLength={4}
                placeholder="パスワード"
            />
            <Button type="submit" variant="entry" className="sign-up__button">
                登録
            </Button>
        </form>
    );
};

export default SignUp;
