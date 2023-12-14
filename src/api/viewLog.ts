import * as I from '@/interface/index.d';
import { get, post } from '@/utils/request';

const getViewNum = async () => {
    const res = (await get('/v1/getViewNum')) as I.viewLog.GetViewNum.Res;
    return res;
};

const createViewLog = async (params: I.viewLog.CreateViewLog.Req) => {
    const res = (await post(
        '/v1/createViewLog',
        params,
    )) as I.viewLog.CreateViewLog.Res;
    return res;
};

export default class ViewLogService {
    static getViewNum = getViewNum;
    static createViewLog = createViewLog;
}
