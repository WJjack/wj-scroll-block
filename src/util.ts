/**
 * @description 节流
 * @param fn 
 * @param wait 
 */
export function throttle(fn: Function, wait: number) {
    let timer: number | null = null;
    return function() {
        let context = this;
        let args = arguments;
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args);
                timer = null;
            }, wait);
        }
    }
}