import React from 'react';
import QuestionEntry from './components/question/QuestionEntry';

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

            <QuestionEntry />
        </div>
    );
};

export default App;
