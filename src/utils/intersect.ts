export function intersectEles(
    eles: NodeListOf<Element>,
    callback: (item: IntersectionObserverEntry) => void,
    once?: boolean,
    options?: IntersectionObserverInit | undefined,
) {
    console.log(eles);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                callback && callback(item);
                if (once) {
                    observer.unobserve(item.target); // 移除监听
                }
            }
        });
    }, options);

    if (eles && eles.length) {
        eles.forEach((item) => observer.observe(item));
    }
}

export function intersectEle(
    ele: Element,
    callback: (item: IntersectionObserverEntry) => void,
    once?: boolean,
    options?: IntersectionObserverInit | undefined,
) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((item) => {
            if (item.isIntersecting) {
                callback && callback(item);
                if (once) {
                    observer.unobserve(item.target); // 移除监听
                }
            }
        });
    }, options);

    if (ele) {
        observer.observe(ele);
    }
}
