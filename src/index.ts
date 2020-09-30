import { throttle } from './util';

interface DomInfo {
    offsetTop: number;
    offsetTopHeight: number;
    index: number;
}

// watch的回调函数
type Fn = (domInfo: DomInfo) => any;

export default class DomBlockWatcher {

    private classname: string;
    private offsetTopNum: number;
    private fn: Fn;
    private domArr: DomInfo[] = [];

    constructor(classname: string, offsetTopNum?: number) {
        this.classname = classname;
        this.offsetTopNum = offsetTopNum ?? 0;
    }

    public watch(fn: Fn): void {
        this.fn = fn;
        this.addDom();
        window.onscroll = throttle(this.watchByScroll, 300);
    }

    private addDom(): void {
        const doms = document.querySelectorAll(this.classname);
        doms.forEach((dom, index) => {
            const clientHeight = dom.clientHeight;
            const offsetTop = dom.offsetTop + this.offsetTopNum;
            const offsetTopHeight = offsetTop + clientHeight;
  
            this.domArr.push({
                offsetTop,
                offsetTopHeight,
                index
            });
        });
    }

    private watchByScroll(): void {
        const bodyDocEl = document.documentElement || document.body;
        const scrollTop = bodyDocEl.scrollTop;
        for(let i = 0; i < this.domArr.length; i++) {
            const { offsetTop, offsetTopHeight, index } = this.domArr[i];
            if(offsetTop <= scrollTop && offsetTopHeight > scrollTop) {
                this.fn(this.domArr[i]);
            }
        }
    }
};