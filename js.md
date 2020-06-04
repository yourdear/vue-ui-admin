js快捷操作
1. of undefind
```
npm install --save-dev @babel/plugin-proposal-optional-chaining
yarn add @babel/plugin-proposal-optional-chaining --dev
```
配置.babelrc：
```angular2
{
  "plugins": ["@babel/plugin-proposal-optional-chaining"]
}
```
2. 转换数字
```
let n = '10'
n = +n
type of n  //number
```   
3.字符串去空格
```
String.prototype.trim = function(){return this.replace(/^\s+|\s+$/g, "");};
```
4. 两值互换 不新增变量
```
let a = 10;
let b = 50;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log(a, b); // 50 10
```
5.从一堆文本中获取手机号
  ```
([\s,，、]*)?((手机|联系方式|电话|联系人)号?)?(号码)?([、:：\s]*)?(?:[\s(（]*?\+?(86)?[\s)）]*)(1\d{2})(?:[-\s]*)(\d{4})(?:[-\s]*)(\d{4})(?=\D|$)
```
  