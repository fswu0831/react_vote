import React from 'react';
import Button from './components/common/Button';
import TextField from './components/common/TextField';

import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <Button variant="delete">削除</Button>
            <Button variant="entry">登録</Button>
            <Button variant="normal">通常</Button>

            <TextField />
        </div>
    );
};

export default App;
