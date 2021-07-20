import config from '../config'

var domain

if (process.env.REACT_APP_MODE == 'test' || !process.env.REACT_APP_MODE) {
  console.log('Application deploy as mode Local')
  domain = 'http://' + config.dataServer.host + ':' + config.dataServer.port
} else if (process.env.REACT_APP_MODE === 'dev') {
  console.log('Application deploy as mode DEV')
  domain = 'http://' + config.dataServerDev.host + ':' + config.dataServerDev.port
} else if (process.env.REACT_APP_MODE === 'docker') {
  console.log('Application deploy as mode Docker')
  domain = 'http://' + config.dataServerDocker.host + ':' + config.dataServerDocker.port
}

export default domain
