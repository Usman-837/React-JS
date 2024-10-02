import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import {createStore} from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './Services/Reducers/index.js'
const store = createStore(rootReducer)
console.warn("store data", store)


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
