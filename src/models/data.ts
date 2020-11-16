import {
    QuestionAttributes,
    QuestionEntryAttributes,
    UserEntryAttributes,
    UserAttributes,
    SignInAttributes,
    SignInResponseAttributes,
    RefreshTokenAttributes,
} from './interfaces';

// 質問データ
export const questions: QuestionAttributes[] = [
    {
        id: 2,
        sentence: 'あなたの年齢を教えてください',
        limit: '2099-09-01T00:00:00.000Z',
        createdBy: 1,
        createdAt: '2020-08-31T00:00:00Z',
        updatedAt: '2020-08-31T00:00:00Z',
        choices: [
            {
                id: 1,
                content: '10才未満',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
            {
                id: 2,
                content: '11 〜 20',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
            {
                id: 3,
                content: '21 〜 30',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
            {
                id: 4,
                content: '31 〜 40',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
            {
                id: 5,
                content: '41才以上',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
        ],
        votes: [
            { id: 1, questionId: 2, choiceId: 1, votedBy: 2 },
            { id: 2, questionId: 2, choiceId: 1, votedBy: 3 },
            { id: 3, questionId: 2, choiceId: 1, votedBy: 4 },
            { id: 4, questionId: 2, choiceId: 1, votedBy: 5 },
            { id: 5, questionId: 2, choiceId: 1, votedBy: 6 },
        ],
    },
    {
        id: 1,
        sentence: 'きのこ派？たけのこ派？',
        limit: '2020-09-01T00:00:00.000Z',
        createdBy: 2,
        createdAt: '2020-08-31T00:00:00Z',
        updatedAt: '2020-08-31T00:00:00Z',
        choices: [
            {
                id: 1,
                content: 'きのこ',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
            {
                id: 2,
                content: 'たけのこ',
                createdAt: '2020-08-31T00:00:00Z',
                updatedAt: '2020-08-31T00:00:00Z',
            },
        ],
        votes: [
            { id: 1, questionId: 1, choiceId: 2, votedBy: 1 },
            { id: 2, questionId: 1, choiceId: 2, votedBy: 2 },
            { id: 3, questionId: 1, choiceId: 2, votedBy: 3 },
            { id: 4, questionId: 1, choiceId: 2, votedBy: 4 },
            { id: 5, questionId: 1, choiceId: 2, votedBy: 5 },
            { id: 6, questionId: 1, choiceId: 2, votedBy: 6 },
            { id: 7, questionId: 1, choiceId: 2, votedBy: 7 },
            { id: 8, questionId: 1, choiceId: 2, votedBy: 8 },
            { id: 9, questionId: 1, choiceId: 2, votedBy: 9 },
            { id: 10, questionId: 1, choiceId: 2, votedBy: 10 },
            { id: 11, questionId: 1, choiceId: 2, votedBy: 11 },
            { id: 12, questionId: 1, choiceId: 1, votedBy: 12 },
            { id: 13, questionId: 1, choiceId: 1, votedBy: 13 },
            { id: 14, questionId: 1, choiceId: 1, votedBy: 14 },
            { id: 15, questionId: 1, choiceId: 1, votedBy: 15 },
        ],
    },
];

// 質問登録データ
export const questionRequest: QuestionEntryAttributes = {
    sentence: '朝食は何派？',
    limit: '2099-11-01T00:00:00.000Z',
    choices: [{ content: 'パン派' }, { content: '米派' }, { content: 'たべない' }],
};

// 質問登録成功
export const questionResponse: QuestionAttributes = {
    id: 3,
    sentence: '朝食は何派？',
    limit: '2099-11-01T00:00:00.000Z',
    createdBy: 1,
    createdAt: '2020-08-31T00:00:00Z',
    updatedAt: '2020-08-31T00:00:00Z',
    choices: [
        {
            id: 1,
            content: 'パン派',
            createdAt: '2020-08-31T00:00:00Z',
            updatedAt: '2020-08-31T00:00:00Z',
        },
        {
            id: 2,
            content: '米派',
            createdAt: '2020-08-31T00:00:00Z',
            updatedAt: '2020-08-31T00:00:00Z',
        },
        {
            id: 3,
            content: 'たべない',
            createdAt: '2020-08-31T00:00:00Z',
            updatedAt: '2020-08-31T00:00:00Z',
        },
    ],
};

// ユーザー登録データ
export const userEntry: UserEntryAttributes = {
    email: 'kimura-kazunori@example.com',
    name: '木村 憲規',
    password: 'secret',
};

// ユーザーデータ
export const user: UserAttributes = {
    id: 1,
    email: 'kimura-kazunori@example.com',
    name: '木村 憲規',
};

// ログインパラメータ
export const signInParams: SignInAttributes = {
    email: 'kimura-kazunori@example.com',
    password: 'secret',
};

// ログイン成功
export const signInResult: SignInResponseAttributes = {
    ...user,
    token: 'abc123',
};

// token更新
export const token: RefreshTokenAttributes = {
    token: 'abc123',
};
