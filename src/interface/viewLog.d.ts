import { apiRes } from './api';

export namespace CreateViewLog {
    export type Req = {
        ip: string;
    };
    export type Res = apiRes<null>;
}

export namespace GetViewNum {
    export type Res = apiRes<{
        num: number;
    }>;
}
