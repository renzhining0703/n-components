// 把驼峰转换成横杠连接 方式一
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}

// 把驼峰转换成横杠连接 方式二
export const camelCaseToHyphen = (key: string | string[]) => {
  const c = (key as string).split('')
  key = c.map((item: string) => (item.toUpperCase() === item ? '-' + item.toLowerCase() : item))
  return key.join('')
}
