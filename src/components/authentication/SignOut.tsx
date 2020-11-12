import React from 'react';
import Button from '../common/Button';

import './SignOut.css';

interface SignOutProps {
    userName: string;
    onSignOut: VoidFunction;
}

const SignOut: React.FC<SignOutProps> = ({ userName, onSignOut }) => {
    return (
        <div className="sign-out__form">
            <span className="sign-out__username">{userName}</span>
            <Button className="sign-out__button" variant="delete" onClick={onSignOut}>
                ログアウト
            </Button>
        </div>
    );
};

export default SignOut;
