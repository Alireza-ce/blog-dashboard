export type AuthForm ={
    email: string;
    password: string
}

export type RegisterForm = AuthForm & {
    username: string
}