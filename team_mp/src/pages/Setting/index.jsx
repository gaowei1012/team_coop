import React from 'react'
import { Menu, Layout } from 'antd'
import { Switch, Route, Link } from 'react-router-dom'
import routes from './routes'
import menu from './menu'

const { Sider, Content } = Layout

const Setting = (props) => {
  return (
    <Layout>
      <Sider
        style={{
          background: '#fff',
          height: '100vh'
        }}>
        <Menu style={{ marginTop: 30 }} theme='light' mode='inline' defaultChecked={['1']}>
          {menu.map((m) => {
            return (
              <React.Fragment>
                {m.auth == 1 ? (
                  <React.Fragment>
                    <span style={{ display: 'inline-block', height: 20, paddingTop: 10, paddingLeft: 6, color: '#ccc' }}>{m.tip}</span>
                    <Menu.Item key={m.key}>
                      <Link to={m.key}>
                        <span>{m.title}</span>
                      </Link>
                    </Menu.Item>
                  </React.Fragment>
                ) : (
                  <Menu.Item key={m.key}>
                    <Link to={m.key}>
                      <span>{m.title}</span>
                    </Link>
                  </Menu.Item>
                )}
              </React.Fragment>
            )
          })}
        </Menu>
      </Sider>
      <Content>
        <Switch>
          {routes.map((r) => (
            <Route key={r.name} exact={r.exact} path={r.path} render={(p) => <r.component {...p} />} />
          ))}
        </Switch>
      </Content>
    </Layout>
  )
}

export default React.memo(Setting)
