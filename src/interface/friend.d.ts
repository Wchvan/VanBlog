import { apiRes } from './api';

export type FriendItem = {
    name: string;
    avatar: string;
    desc: string;
    link: string;
};

export namespace GetFriends {
    export type Res = apiRes<{
        total: number;
        list: FriendItem[];
    }>;
}
