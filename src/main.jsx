import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Home from './components/Home.jsx'
import HireMe from './components/HireMe.jsx'
import Projects from './components/Projects.jsx'
const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/hire-me",
        element : <HireMe/>
      },
      {
        path : "/projects",
        element : <Projects/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
)
