import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalProvider } from "./context/GlobalContext";
import './index.css'
import Footer from './components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <App/>
      <Footer id="contact"/>
    </GlobalProvider>
  </React.StrictMode>,
)
