// 投票データ
export interface VoteAttributes {
    id: number;
    questionId: number;
    choiceId: number;
    votedBy: number;
}

// 選択肢登録データ
export interface ChoiceEntryAttributes {
    content: string;
}

// 選択肢データ
export interface ChoiceAttributes extends ChoiceEntryAttributes {
    id: number;
    createdAt: string;
    updatedAt: string;
}

// 質問登録データ
export interface QuestionEntryAttributes {
    sentence: string;
    limit: string;
    choices: ChoiceEntryAttributes[];
}

// 質問データ
export interface QuestionAttributes extends Omit<QuestionEntryAttributes, 'choices'> {
    id: number;
    createdBy: number;
    createdAt: string;
    updatedAt: string;
    choices: ChoiceAttributes[];
    votes?: VoteAttributes[];
}

// ユーザー登録データ
export interface UserEntryAttributes {
    email: string;
    name: string;
    password: string;
}

// ユーザーデータ
export interface UserAttributes extends Omit<UserEntryAttributes, 'password'> {
    id: number;
}

// ログインパラメータ
export interface SignInAttributes {
    email: string;
    password: string;
}

// ログイン成功
export interface SignInResponseAttributes extends UserAttributes {
    token: string;
}

// token更新
export interface RefreshTokenAttributes {
    token: string;
}
