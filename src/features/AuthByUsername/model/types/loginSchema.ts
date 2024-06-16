export interface UserCredentials{
    username: string;
    password: string;
}
export interface LoginSchema extends UserCredentials{
    isLoading: boolean,
    error: string|null
}
