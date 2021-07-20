import axios from 'axios'

export function request(url, method, data, token) {
  return new Promise((resolve, reject) => {
    let body = method === 'GET' ? 'params' : 'data'
    axios({
      url: url,
      method: method,
      [body]: data === null ? '' : data,
      headers: {
        'Content-Type': 'application/json',
        jwttoken: token === null ? '' : token
      }
    })
      .then((res) => {
        if (res.status === 200 && res.statusText === 'OK' && res.data.statusCode === 200) {
          resolve(res)
        } else {
          throw res.data
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}
