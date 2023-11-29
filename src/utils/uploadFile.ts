import { apiRes } from '@/interface/api.d';
import { post } from './request';

export type uploadFileResp = apiRes<{
    filename: string;
    suffix: string;
    url: string;
}>;

export const uploadFile = async (params: any) => {
    const fileFormData = new FormData();
    fileFormData.append('file', params);
    const res = (await post('/file/upload', fileFormData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })) as uploadFileResp;
    return res;
};
