import { useEffect } from 'react'

import axios from 'axios'

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

const timestampToMinutes = (timestamp) => {
  const milliseconds = timestamp * 1000;
  const now = Date.now();
  const difference = now - milliseconds;
  const minutes = difference / (1000 * 60);
  return minutes;
};

const getToken = async () => {
  const body = {
    companyName: "Shivam Central Hub",
    clientID: "0e426c54-00e5-4c56-809e-d41e8172d9cf",
    clientSecret: "eXSWmRncQZpTAzce",
    ownerName: "Shivam Taneja",
    ownerEmail: "shivamtaneja.me@gmail.com",
    rollNo: "15",
  };

  const { data } = await axios.post("http://20.244.56.144/train/auth", body);

  const expirationTime = Date.now() + data.expires_in * 1000;

  localStorage.setItem("token", data.access_token);
  localStorage.setItem("expiry", expirationTime);
};

const checkAndFetchTokenIfNeeded = () => {
  const token = localStorage.getItem("token");
  const expiry = localStorage.getItem("expiry");
  const minutesSinceExpiry = expiry ? timestampToMinutes(expiry) : null;

  if (!token || minutesSinceExpiry === null || minutesSinceExpiry <= 5) {
    getToken();
  }
};

function App() {

  useEffect(() => {
    checkAndFetchTokenIfNeeded();
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default App
