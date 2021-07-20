import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
// import { stores, StoresContext } from './stores/index_copy'
// import { Provider } from 'mobx-react'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  // <Provider {...stores}>
  //     <StoresContext.Provider value={stores}>
  <App />,
  // </StoresContext.Provider>
  // </Provider>,
  // </React.StrictMode>
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
