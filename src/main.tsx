import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as StoreProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import '@fontsource-variable/inter'

import { router } from './router'
import { store } from './store'

import './styles/global.scss'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Failed to find the root element')
}

const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
)
