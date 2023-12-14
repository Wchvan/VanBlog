import * as I from '@/interface/index.d';
import { get } from '@/utils/request';

const getFriends = async () => {
    const res = (await get('/v1/getFriends')) as I.Friend.GetFriends.Res;
    return res;
};

export default class FriendService {
    static getFriends = getFriends;
}
