// 图片预加载
export function preLoadImgs(imgArr: string[]) {
    const promises = imgArr.map((url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                img.onload = null;
                resolve(img);
            };
            img.src = url;
        });
    });
    return Promise.all(promises);
}
