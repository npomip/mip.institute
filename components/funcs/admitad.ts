import { setCookie } from "cookies-next"

function getParamFromUriAdmitad(param_name) {
  const pattern = param_name + '=([^&]+)'
  const re = new RegExp(pattern)

  return (re.exec(document.location.search) || [])[1] || ''
}

function setAdmitadCookie(param_name, cookie_name) {
  const param = getParamFromUriAdmitad(param_name)
  
  if (!param) return
  const period = 90 * 60 * 60 * 24 * 1000;   // в секундах
  const expiresDate = new Date(period + +new Date())
  const cookieString =
    cookie_name + '=' + param + '; path=/; expires=' + expiresDate.toUTCString()
  document.cookie = cookieString
  document.cookie = cookieString + '; domain=.' + location.host
  setCookie('admitad_uid', cookieString)
}

export default setAdmitadCookie
