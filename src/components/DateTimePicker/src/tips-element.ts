

export const createTipsElement = (tips: string) => {
  const wrapperEle = document.createElement('div')
  wrapperEle.className = 'footer-tips'

  wrapperEle.innerHTML = `<span>${tips}</ span>`

  return wrapperEle
}
