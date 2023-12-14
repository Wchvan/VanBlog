import { apiRes } from './api';

export type PassageItem = {
    id: string;
    time: string;
    name: string;
    link: string;
    viewNum: number;
};

export namespace GetPassages {
    export type Req = {
        page: number;
        pageSize: number;
    };
    export type Res = apiRes<
        {
            date: string;
            data: PassageItem[];
        }[]
    >;
}

export namespace GetPassage {
    export type Req = {
        id: number;
    };
    export type Res = apiRes<PassageItem>;
}
