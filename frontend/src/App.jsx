import './App.css'

import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Home from './components/Home'
import Train from './components/Train'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path=":trainId" element={<Train />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
