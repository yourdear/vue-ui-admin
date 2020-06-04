const createNode = (classes, text)=> {
    let template = `
        <div class="bg"></div>
        <div><p>${text}</p></div>
    `
    let temWrapper = document.createElement('div')
    temWrapper.innerHTML = template
    temWrapper.className = classes
    return temWrapper
}
const elemHandler = (el,binding)=> {
    let className = ''
    let text = ''
    let status = binding.value
    switch (status) {
        case 'init':
            className = 'init_bg'
            text = '请查询数据'
            break
        case 'noData':
            className = 'noData_bg'
            text = '暂无数据'
            break
        case 'error':
            className = 'error_bg'
            text = '查询出错'
            break
        default:
            className = ''
            break
    }
    console.log(el)
    console.log(binding)
    let curElem = el.querySelector('.init_bg')
    if (curElem) {el.removeChild(curElem)}
    curElem = el.querySelector('.noData_bg')
    if (curElem) {el.removeChild(curElem)}
    curElem = el.querySelector('.error_bg')
    if (curElem) {el.removeChild(curElem)}
    if (className!=='') {
        el.appendChild(createNode(className, text))
    }
}
// 自定义指令
const bgType = {
    bind(el, binding) {
        console.log('bind',el.parentNode)
        elemHandler(el,binding)
    },
    inserted(el,binding) {
        console.log('inserted',el.parentNode)
    },
    update(el, binding) {
        elemHandler(el,binding)
    },
}

export default bgType
