import { apiRes } from '@/interface/api.d';
import * as I from '@/interface/index.d';
import { get, post } from '@/utils/request';

const getPassages = async (params: I.Passage.GetPassages.Req) => {
    const res = (await post(
        '/v1/getPassages',
        params,
    )) as I.Passage.GetPassages.Res;
    return res;
};

const getPassage = async (params: I.Passage.GetPassage.Req) => {
    const res = (await get(
        '/v1/getPassage',
        params,
    )) as I.Passage.GetPassage.Res;
    return res;
};

export default class PassageService {
    static getPassages = getPassages;
    static getPassage = getPassage;
}
