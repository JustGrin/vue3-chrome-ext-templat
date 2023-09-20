import { onLoginClick } from './pj-portal'

console.log('content is open')

// 只在视频会商SMC登录页触发
if (window.location.origin === 'https://10.44.246.2') {
  console.log(window.location.href, '-hhh')
  window.addEventListener('load', () => {
    onLoginClick()
  })
}
