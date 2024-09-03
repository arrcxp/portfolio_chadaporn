import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/About',
    element: <About />
  },
  {
    path: '/Project',
    element: <Project />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
])

function App(){
  return(
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
