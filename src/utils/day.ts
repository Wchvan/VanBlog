export const getEndDay = () => {
    const time = new Date();
    const year = time.getFullYear(); //年
    const month = ('0' + (time.getMonth() + 1)).slice(-2); //月
    const day = ('0' + time.getDate()).slice(-2); //日
    return year + '-' + month + '-' + day;
};

export const getMonth = (date: Date) => {
    const time = new Date(date);
    const year = time.getFullYear(); //年
    const month = ('0' + (time.getMonth() + 1)).slice(-2); //月
    return year + '-' + month;
};

export const getTime = (time: Date) => {
    const date = new Date();
    const year = date.getFullYear(); //年
    const month = ('0' + (date.getMonth() + 1)).slice(-2); //月
    const day = ('0' + date.getDate()).slice(-2); //日
    const hour = ('0' + time.getHours()).slice(-2); //时
    const minute = ('0' + time.getMinutes()).slice(-2); //分
    const second = ('0' + time.getSeconds()).slice(-2); //秒
    return (
        year +
        '-' +
        month +
        '-' +
        day +
        ' ' +
        hour +
        ':' +
        minute +
        ':' +
        second
    );
};
