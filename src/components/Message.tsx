import React from 'react';

interface MessageProps {
    name: string;
}

const Message: React.FC<MessageProps> = ({ name }) => {
    return <p>Hello, {name}!</p>;
};

export default Message;
