###把每天遇到的问题以及解决方法都写到这个里面
##### 2019-06-12
- 在a方法（promise）里面回调成功后再调用b方法，但是浏览器请求的顺序b在a前面，所以说这个有的时候做不得准，
先后顺序以断点或者打印的结果为准
- 在promise的then回调里面写逻辑因为未申明一个数组arr，但是却直接使用它push元素，程序这个时候回自动跳到promised的失败回调catch里面

##### 2019-06-13
- 使用了concat方法合并两个数组,合并后返回一个新的数组并不会对合并的数组arr1,arr2造成影响
如果都是一维数组的话就可以达到深拷贝的效果，如果是多维数组，比如下面这样
所以总结一下一维拷贝的是值（深拷贝），如果是多维的拷贝的是内存地址，所以不管是修改arr里面的多维部分，还是修改arr3
的多维部分，都会互相影响
```
    const arr1 = [3,5,5]
    const arr2 = [6,7,8]
    const arr3 = [[9,10,11],12]
    const arr = arr1.concat(arr2,arr3) 
    arr[6][0] = 10
    console.log(arr) // [3,5,5,6,7,8,[10,10,11],12]
    console.log(arr1) //[3,5,5]
    console.log(arr2) //[6,7,8]
    console.log(arr3) //[[10,10,11],12] //多维数组会被改变
```
- 理解了vue-cli3.0的proxy代理接口的意义及用法,下面代码是使用了nginx来达到跨域的目的
就是用/api来代替https://bot-test.dingtax.cn，如果target对应的value不是以'/'
结尾，那么pathRewrite里面的配置'^/api'对应的value就要是'/' ,如果target对应的value是以'/'结尾,
pathRewrite里面的配置'^/api'对应的value就要是''
```
    proxy: { //配置自动启动浏览器
                "/api": {
                    target: "https://bot-test.dingtax.cn",
                    changeOrigin: true,
                    // ws: true,//websocket支持
                    secure: false,
                    pathRewrite: {
                        '^/api': '/'    //代理的路径
                    }
                },
            }
```
- 测试Object.assign(obj1,obj2,...)
返回新对象也会污染原先的对象可以试用Object.assign({},obj1)来达到浅拷贝,
注意两个参数的位置不能颠倒，以为第一个参数是目标对象，第二个参数是源对象，
返回的是目标对象，即返回值和第一参数指向同一个内存空间
拷贝的只是内存地址，所以修改一个另一个也会改变
```
    const obj1 = {
          name: 'sj'
    }
    const obj2 = {
          age: 25
    }
    const newobj = Object.assign(obj1,obj2)
    console.log(newobj) //{name:'sj',age: 25}
    console.log(obj1) //{name:'sj',age: 25}

```
##### 2019-06-18
1.我们访问对象的某个属性通常不确定某个属性是否存在，尤其是深层嵌套的时候，要一级一级的去判断，让代码变得不好维护
现在有一款插件可以帮我们实现这个多级访问的问题不存在的话会直接返回undefind而不会报错，插件安装地址https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
npm安装之后，在.babelrc（老版本）或者babel.config.js（新版本）中添加plugin

##### 2019-06-19
1.nuxt动态路由 即动态相加的路由应该写成这样:to="'/goods/detail/' + item.id"
##### 2019-06-20
1.css选择器之 +
```
     div + p {
        lineheight: 30px
     }   
    .inner + .inner {
        background: red
    }
```
- div后面的所有p元素
- 第一个.inner之后的所有.inner
##### 2019-06-21
1.::after用法
```
::after {
    content: url()
    content: '\260E'
    content： ''
}
```
- 伪元素添加了一个页面中没有的元素（只是从视觉效果上添加了，不是在文档树中添加），伪类是给页面中已经存在的元素添加一个类。
- 不占用Dom节点
- content可以是一个路径也可以是图标字体或者字符串
##### 2019-06/24
1.作用域在函数定义时就已经确定了。而不是在函数调用时确定
2.this是在调用时确定
```
 var x = 10
    function f() {
        console.log(x)
    }
    function show(fn) {
        var x = 20
        fn()
    }
    show(f)
```
##### 2019-06-25
1.str.match(reg) 返回匹配的值
2.str.replace(reg,value) 把str的reg替换成value

###### 2019-06-26
1.关于axios的使用问题 excel post导出
问题描述：原先用的是h5的a标签特性使用get请求（需要全路径），但是由于参数过多，和后端商量用post,下载excel
表格
遇到的问题，正常请求通过a标签的href属性也看到了后台返回的二进制数据，但是打开表格缺显示undefind
最后发现是需要在请求的时候配置responseType: 'blob'，不然返回的二进制文档流不会被解析
```
//在常规的post请求后面加上一个config对象配置
export const exportd = (url, params, config, callback, errorback, falseback) => {
  return axios.post(`${base}` + url, params, config)
    .then((res) => {
      if (res && callback) { callback(res.data, res) }
      if (!res) {
        falseback()
      }
    })
    .catch((error) => {
      if (errorback) { errorback(error) } else { console.log(error); console.log(error.response + qs.stringify(params)) }
    })
}
// config = {responseType: 'blob'}
 exportd('/bot-admin/api/leaveMessage/down', Object.assign(params), {responseType: 'blob'}, (res) => {
         
          let url = window.URL.createObjectURL(new Blob([res], {type: 'application/vnd.ms-excel'})); // 处理文档流
          let link = document.createElement('a');
          link.style.display = 'none';
          link.href = url;
          link.download = '留言列表.xls';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
```
2.关于422报错问题
证明接口已经通了，但是可能请求的方式不对
- 比如后台是post接口，前端发送请求的时候是get
- 或者是请求的参数有问题，这个需要联合后台去查，比如传参的格式（是否序列化）
- 比如需要你传的某个字段是数组传成了字符串
- 或者空值情况的传递问题
##### 2019-06-27
1.js array
- arr.indexof(value)的用法  返回value元素在arr中的下标，不存在返回-1

2.vue computed watch
- computed的作用是根据别的东西来计算一个值,是被别的值触发；
  - watch的作用是监听自身的变化来触发别的
  - computed是根据别的值改变自己
```
    computed () {
        return this.num1 + this.num2
    }
```
3.工具篇
- 购买了一个webstrom的永久破解码
- debugger失效的问题
    - 需要在浏览器安装JetBrains IDE Support，在扩展程序选项里调整接口
    - 看webstrom里plugins的installed选项里是否有javascript debugger,正常都是会自动安装的，除非你取消了，那就需要重新下载
    - 查看settings -> debugger port端口是否与JetBrains IDE Support设置的端口一致
    - 启动程序比如vue，左上角切换到dev或者是server
    - 在要使用断点的地方敲debugger命令
    - 在浏览器上触发事件就可以正常使用了
##### 2019-06-28
1.思路问题一个简单二十分钟能搞定的问题，花了一个半小时，思考的方向错误
- 遍历的东西同一个元素即使背景图片不同也不能使用两个元素，应该是通过遍历数组的下标能判定，添加不同的class
- 不同元素添加出来的id一定不能一样，因为好多人都会以id区分同一个数组的不同元素
2.v-viewer插件，可以放大图片支持鼠标缩放，支持图片切换
##### 2019-07-01
1.解构：等号两边的模式相同，左边的变量就会被赋予对应的值 
- 模式相同可以粗狂的理解为类型相同，但是这句话肯定是不完全对的，后面再说
- 数组解构
```
1.成功解构 普通解构，嵌套解构，不完全解构，默认结构
//普通解构
let [a, b, c] = [1, 2, 3];    a // 1, b // 2,  c // 3
let [head, ...tail] = [1, 2, 3, 4]; head // 1,tail // [2, 3, 4]
//嵌套解构
let [a,[[b],c]] = [1,[[2],3]] a // 1, b // 2,  c // 3
// 不完全解构 类似于不成功解构，没被解构的值为undefind
let [a,[[],c]] = [1,[[2],3]] a // 1, c // 3, b // undefind
// 默认结构  只有严格等于undefind才会被默认机构（为null不会被默认解构）
let [a, b=4] = [1] a = 1, b = 4
let [a = 1,b] = [undefind, 4] a = 1, b = 4
2.错误解构
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};
```
2.vue相关--watch与computed那个先执行
computed执行完之后，watch才会执行

3.js Array splice,像数组中添加和删除元素，然后返回被删除元素，会改变原数组
- 第一个参数是数组的下标，第二个参数是要删除的个数，后面的参数都是新增
- 如果只有一个参数，那么就从当前下标开始删到最后（包括当前下标元素）
- splice函数会返回一个数组，里面是被删除的元素
```
    const arr = ['admin', 'xiaoming', 'xiaohong', 'xiaomei']
    const newArr = arr.splice(3, 1, '小淘气')
    console.log(arr) //['admin', 'xiaoming', 'xiaohong', '小淘气']
    console.log(newArr) // ["xiaomei"]
```
##### 2019-07-02
1.跳出多重循环后继续执行下一次循环 使用标记语句
- continue是跳出当前循环，继续执行下一次循环，一般配合if使用
- 标记语句是跳出多重循环，继续执行下一次循环 使用一个变量标记一下，然后if的时候continue + 标记
```
firstLoop: 
for (let i = 0; i < 3; i++) { 
   for (let j = 0; j < 3; j++) {
      if (i === j) {
         continue firstLoop; // 继续 firstLoop 循环
         // break firstLoop; // 中止 firstLoop 循环
      }
      console.log(`i = ${i}, j = ${j}`);
   }
}
// 输出
i = 1, j = 0
i = 2, j = 0
i = 2, j = 1
```
2.利用a标签来解析一个url,可以快速的帮我们返回端口参数等一系列的东西，而不需要我们自己费劲的去截取
```
function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        hash: a.hash.replace('#','')
    };
}

```
##### 2019-07-02
1.遇到一个有意思的问题，我有一个值通过computed从store(vuex)获取的，然后再mounted调用方法
发送请求用到了这个值作为参数，结果debugger下来发现mounted会先执行然后再执行computed
的值，所以这个值恒为空，出现查的数据不对，因为这个是子组件，所以有三个方法解决这个问题
- 通过父组件传递--props
- 不使用computed直接在mounted/created里获取这个值
- 或者使用watch监听数据变化后发送请求，并设置immediate: true页面初始化执行一次
2.js Array reduce
- reduce可以接受两个参数
- 第一个参数是一个callback函数，接受四个值
- callback的第一个值（取名firstChild）取决于reduce的第二个参数(value)，如果存在第二个参数value，那么firstChild就等于value,否则firstChild
就等于数组的第一个元素
- callback函数的第二个值currentValue表示当前值，也取决于value,如果value有值就从下标0开始，value不传就从下标1开始
- callback函数的第三个第四个分别是index下标和arr原数组
```
const arr = [1,2,3,4,5]
            let result = arr.reduce((firstChild, currentValue, index, arr)=>{
                return firstChild + currentValue
            },6)
            console.log(result)
```
3.调试代码的心得
- 看借口，返回的东西，状态码
- 调试的时候发现错误如果有几种解决方案可以系统的想一遍，或者那笔画一画对比一下
- 不能仅凭臆想去猜测
4.防止浏览器跳转刷新后会清除掉network之前的接口
- preserve log勾上就可以了
##### 2019-07-03
1. JS array map
- 需要return关键字返回一个新数组
- 不会修改原数组，这句话应该理解为不会修改栈内存存储的东西
因为数组里面就是单个的数字或字符串什么的，就不会改变
如果是对象的话，对象指向的内存地址不会改变，内存地址对应的值是会被改变的
- 如果数组元素是引用类型，不需要return也不需要变量接受返回值，也会对原数组进行修改

```
    const arr = [{name: 'zs'},{name: 'ls'}]
    const newArr = arr.map((item) => {
       item.age = 23
       return item
    })
    console.log(newArr) // [{name: "zs", age: 23}, {name: "ls", age: 23}]
    console.log(arr) // [{name: "zs", age: 23}, {name: "ls", age: 23}]
    console.log(arr === newArr) //虽然值完全相等，但是他们指向不同的内存地址，所以是不相等的
```
2.vue keep-alive
- 缓存组件，缓存过得组件生命周期内的都行不会再次被执行，从新进入这个页面会缓存第一次进来的东西
- include，exclude表示那些组件需要缓存那些不需要缓存（可以通过组件的名字，在组件上加上is='组件名'），二者都可以用逗号分隔字符串、正则表达式或一个数组来表示：
- vue2.0支持通过路由来配置 meta: {keepAlive: true/false},然后直接v-if来判断
- activated,deactivated这两个生命周期函数需要搭配keep-alive组件生效，activated表示
再次进入被缓存组件时触发，另一表示离开时触发
一个表示
```
<keep-alive include="test-keep-alive">
  <component></component>
</keep-alive>

// vue2.0路由
 {
      path: '/',
      name: 'Home',
      component: Home ,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }
    
 <template>
   <div id="app">
     <keep-alive>
       <router-view v-if="$route.meta.keepAlive"></router-view>
     </keep-alive>
     <router-view v-if="!$route.meta.keepAlive"></router-view>
   </div>
 </template>  
```
##### 2019-07-04
1.微信小程序第一天
- 拉取了github上的最火的微信小程序
- 开了微信小程序文档
- 通过github上的方法搭建了域名 telphone 621901（个性域名zxw）
- 微信小程序搭建了域名开发-开发设置，服务器域名添加了域名	
https://api.it120.cc 
- 本地请求https://api.it120.cc/zxw/ + url
- 已调试通
2.本地配置了svgicon通过阿里的fonticon
- 下载到本地
![图片](./src/assets/mdImages/20190704/first.png)
- 拷贝到项目 可以在assets下新建一个文件夹放进去
 ![图片](./src/assets/mdImages/20190704/second.jpg)
 - main.js全局引用
 ```
 import Iconsvg from './components/common/IconSvg'
```
- 封装成组件 在components下新建common文件夹，在common新建IconSvg.vue
```
<template>
    <svg class="svg-icon" aria-hidden="true" @click="svgClick($event)">
        <use :xlink:href="iconName"></use>
        </svg>
        </template>

        <script>
    export default {
        name: 'icon-svg',
        props: {
            iconClass: {
                type: String,
                required: true
            }
        },
        computed: {
            iconName() {
                return `#${this.iconClass}`
            }
        },
        methods: {
            svgClick(e) {
                this.$emit('parengSvgClick', e)
            }
        }
    }
</script>

<style>
    .svg-icon {
        width: 1em;
        height: 1em;
        font-size: 18px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
```
- 在main.js注册成全局组件
```
Vue.component('icon-svg', Iconsvg) //注册为全局组件
```
- 使用 iconClass的名字可以在下载的文件iconfont.css找到
```
 <icon-svg iconClass="icon-bianji"></icon-svg>
```