import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home/Home'
import About from './components/About/About'
import Github, { GithubFetchedData } from './components/Github/Github'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        loader={GithubFetchedData}
        path='github' element={<Github />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <RouterProvider router={router} />
  </StrictMode>,
)
