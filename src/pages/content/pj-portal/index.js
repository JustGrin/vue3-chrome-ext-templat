import { queryURL } from '@/utils'

const userInfos = {
  admin: 'Lzdn88552016',
  admin1: 'admin@123456'
}

// 获取username输入框
const getUserNameInput = (value) => {
  // const nodeList = document.querySelectorAll('.smc-login-form .form_input')
  const input = document.querySelector('.smc-login-form #username')
  return new Promise((resolve, reject) => {
    // const input = nodeList && nodeList[0]
    if (input) {
      input.value = value
      console.log(input, value)
      const event = new Event('input', { bubbles: true })
      input.dispatchEvent(event)
    }

    resolve(input || null)
  })
}
// 获取password输入框
const getPasswordInput = (value) => {
  // const nodeList = document.querySelectorAll('.smc-login-form .form_input')
  const input = document.querySelector('.smc-login-form #password')
  return new Promise((resolve, reject) => {
    // const input = nodeList && nodeList[1]
    if (input) {
      input.value = value
      console.log(input, value)
      const event = new Event('input', { bubbles: true })
      input.dispatchEvent(event)
    }

    resolve(input || null)
  })
}

// 获取按钮
const getBtnNode = () => {
  const loginBtn = document.querySelector('.smc-login-submit button.ant-btn')
  return new Promise((resolve, reject) => {
    resolve(loginBtn)
  })
}

//  进入页面立即触发
const onLoginClick = async () => {
  const username = queryURL('username') || 'admin1'

  const userPwd = userInfos[username]

  // 用户
  await getUserNameInput(username)

  // 密码
  await getPasswordInput(userPwd)

  // 监听 登录按钮
  const loginBtn = await getBtnNode()

  if (loginBtn?.click) {
    loginBtn.click()
  }
}

export { onLoginClick }
