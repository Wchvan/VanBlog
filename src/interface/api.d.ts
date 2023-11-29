export interface apiRes<T> {
    code: number;
    msg: string;
    data: T;
}
