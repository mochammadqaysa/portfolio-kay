import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PreLoader from './components/PreLoader.jsx'
import Header from './components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PreLoader /> */}
    <div className="container mx-auto px-6">
      <Header />
      <App />
    </div>
  </StrictMode>,
)
