##### 2019-10-14打卡
1.安装的时候报错，最后是通过安装了yarn
```
npm install -g create-react-app
npm install yarn
mkdir reactdemo
cd reactdemo
create-react-app
```
2.react是自己创造了jsx语法，理解起来就是可以在react的javascript里写html

- jsx语法解析会把<>解析成html,把{}解析成js
- jsx内的class需要写成className
- react自定义组件一定要首字母大写 
```
render(){
        return (
            <div>
                <ul className='my_list'>
                    <li>{true ? '朱新伟' : 'zhuxinwei'}</li>
                    <li>learning react</li>
                </ul>
            </div>
    )
    }
```
- 如果不用jsx语法
```$xslt
var child1 = React.createElement('li', null, 'JSPang.com');
var child2 = React.createElement('li', null, 'I love React');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
```