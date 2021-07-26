
// 递归深拷贝
/*
*  拷贝对象是数组、对象
*  1.判断数据源类型
*  2.选用for...in遍历，数组和对象都能遍历。数组是下标，对象是key
*  3.判断当前下标或者key是普通类型还是object类型  typeof xxx,如果是object类型递归拷贝，普通类型直接赋值
* */
const deepClone = (data) => {
  const result = data.constructor === Array ? [] : {}
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (data[key] && typeof data[key] === 'object') {
        result[key] = deepClone(data[key])
      } else {
        result[key] = data[key]
      }
    }
  }
  return result
}

export {
  deepClone
}
