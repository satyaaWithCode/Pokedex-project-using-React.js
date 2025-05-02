import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
//in App react router anbles by binding of browserRouter
createRoot(document.getElementById('root')).render( 
<BrowserRouter>
    <App />  
 </BrowserRouter> //its a component enbles to react-router

)
