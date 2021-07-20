
// 返回失败体
function resFail(statusCode, message) {
  const resBody = {}
  resBody.success = false
  resBody.statusCode = statusCode
  resBody.message = message
  resBody.data = ''
  return resBody
}

// 返回成功体
function resSuccess(message, data) {
  const resBody = {}
  resBody.success = true
  resBody.statusCode = 200
  resBody.message = message
  resBody.data = data || ''
  return resBody
}

module.exports = {
  resFail,
  resSuccess,
}
