import { apiRes } from './api';

export type ProjectItem = {
    name: string;
    desc: string;
    link: string;
};

export namespace GetProjects {
    export type Res = apiRes<{
        list: ProjectItem[];
        total: number;
    }>;
}
