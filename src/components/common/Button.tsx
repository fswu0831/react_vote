import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import './Button.css';

// ボタンのバリエーション
type ButtonVariant = 'delete' | 'entry' | 'normal';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
    variant = 'normal',
    type = 'button',
    className,
    children,
    onClick,
    ...props
}) => {
    return (
        <button
            // eslint-disable-next-line react/button-has-type
            type={type}
            className={classnames(className, 'common__button', `common__button--${variant}`)}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
