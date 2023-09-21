/**
 * 从链接取值
 * @param {String}
 * @return {String}
 */
const queryURL = name => {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substring(1).match(reg)
  if (r != null) return decodeURI(r[2])
  return null
}

export {
  queryURL
}
