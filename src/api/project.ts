import * as I from '@/interface/index.d';
import { get } from '@/utils/request';

const getProjects = async () => {
    const res = (await get('/v1/getProjects')) as I.Project.GetProjects.Res;
    return res;
};

export default class ProjectService {
    static getProjects = getProjects;
}
