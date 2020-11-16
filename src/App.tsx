import React from 'react';
import SignIn from './components/authentication/SignIn';
import SignUp from './components/authentication/SignUp';
import SignOut from './components/authentication/SignOut';
import QuestionEntry from './components/question/QuestionEntry';
import QuestionList from './components/question/QuestionList';
import { SignInAttributes, UserEntryAttributes } from './models/interfaces';

import './App.css';
import { questions } from './models/data';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="App__header">
                {false && (
                    <SignIn
                        onSignIn={(params: SignInAttributes) => {
                            // eslint-disable-next-line no-console
                            console.log(params);
                        }}
                    />
                )}
                <SignOut
                    userName="kimura"
                    onSignOut={() => {
                        // eslint-disable-next-line no-console
                        console.log('Sign out');
                    }}
                />
            </div>
            <div className="App__main">
                {false && (
                    <SignUp
                        onSignUp={(params: UserEntryAttributes) => {
                            // eslint-disable-next-line no-console
                            console.log(params);
                        }}
                    />
                )}
                <QuestionEntry />
                <QuestionList questions={questions} />
            </div>
        </div>
    );
};

export default App;
