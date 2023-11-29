export const waitMillis = async (timeMillis: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, timeMillis);
    });
};
