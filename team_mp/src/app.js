import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import loadable from './utils/loadable'
import React from 'react'
import 'animate.css'
import './style/base.scss'
import './style/App.scss'
import '@/style/base_antd.scss'

// 公共模块
const DefaultLayout = loadable(() => import(/* webpackChunkName: 'default' */ './containers/DefaultLayout'))
const Login = loadable(() => import(/* webpackChunkName: 'login' */ './pages/Login/index'))

const App = () => (
  <Router>
    <Switch>
      <Route path='/login' exact component={Login} />
      <Route component={DefaultLayout} />
    </Switch>
  </Router>
)

export default App
