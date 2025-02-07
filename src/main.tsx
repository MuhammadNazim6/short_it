import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div><Toaster /></div>
    <App />
  </React.StrictMode>,
)
