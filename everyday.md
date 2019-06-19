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
#####2019-06-18
1.我们访问对象的某个属性通常不确定某个属性是否存在，尤其是深层嵌套的时候，要一级一级的去判断，让代码变得不好维护
现在有一款插件可以帮我们实现这个多级访问的问题不存在的话会直接返回undefind而不会报错，插件安装地址https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining
npm安装之后，在.babelrc（老版本）或者babel.config.js（新版本）中添加plugin

#####2019-06-19
1.nuxt动态路由 即动态相加的路由应该写成这样:to="'/goods/detail/' + item.id"
