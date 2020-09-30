### 描述
> 监听window的滚动事件，当被监听的DOM出现在屏幕的相应位置时，触发回调函数，回调函数的参数由{offsetTop, offsetTopHeight, index}
> offsetTop是此DOM元素距离文档顶部的距离
> offsetTopHeight是此DOM元素距离文档顶部的距离加上偏移量
> index是当前被监听DOM元素的索引

### 安装
`npm i wj-scroll-block -S`

### 类DomBlockWatcher
> 构造器参数 classname 是css类名，如.tilte
> 构造器参数 offsetTopNum 是指顶部的偏移量，比如顶部有导航栏高度为50px，则偏移量为-50

### 使用方式
```javascript
import DomBlockWatcher from 'wj-scroll-block';
new DomBlockWatcher('.title', -100).watch((domInfo) => {
    console.log(domInfo);
});
```

### 源码地址
<https://github.com/WJjack/wj-scroll-block.git>

