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


## polyfill

什么是polyfill

它的意思就是补丁，根据浏览器的情况做一个补丁做一个兼容

## core-js
所有新语法函数的集合的polyfill（标准库）,就不用挨个找了

里面包含了promise weakmap symbol

## regenerator
core-js不支持ES6 generator函数（处理异步，被async/await代替），它得去支持一下

## babel-polyfill（现已被弃用）
babel-polyfill就是core-js和regenerator的集合

babel7.4之后弃用了babel-polyfill

推荐直接使用core-js和regenerator

#### babel特点
babel只关系语法，不关心API

babel不处理模块化，webpack处理模块化，所以webpack和babel结合

babel只解析语法

Promise.resolve(100).then(data=>data);

[10,20,30].includes(20)

本身的语法就是符合ES5语法规范的，但是这个语法有没有babel就不关心了，babel只解析语法，所以我们需要polyfill进行一个补丁一个兼容，因为有的浏览器不支持Promise、includes这两个API,所以我们需要引入babel-polyfill这个API

#### babel-polyfill如何按需引入

babel-polyfill文件较大，只用其中的一部分功能，无需全部引入，怎么配置按需引入？

    删除index.js 

    ```
    // import '@babel/polyfill'
    ```

    在.babelrc文件里配置

    usage就是按需引入的意思

    corejs版本是3

    ```
    {
        "presets": [
            [
                "@babel/preset-env",
                {
                    "useBuiltIns":"usage",
                    "corejs":3
                }
            ]
        ],
        "plugins": [
            
        ]
    }
    ```
#### babel-polyfill的问题

会污染全局环境，如果做一个独立的web系统，则无碍，但是如果做一个第三方库lib,则会有问题

## babel-runtime

babel-runtime会重新取个方法名就不会污染全局环境