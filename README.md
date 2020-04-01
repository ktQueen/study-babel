# babel

## babel编译
npx babel src/index.js 这样就可以用babel编译index.js

## plugins和presets的区别
babel就把es6的代码编译成es5的代码了

babel是一个空壳，它是一个流程的一个工具，它怎么把ES6的语法转成ES5的语法呢？

Es6有很多：解构，箭头函数，promise

babel是通过plugins转起来的成我们可以用的代码，但是太多了，

我们就通过presets(预设)把这些常用的打个包叫preset-env(这是一堆plugin的集合)

plugins里去扩展我们需要的插件

这就是plugins和presets的区别


## polyfill补丁
polyfill补丁

