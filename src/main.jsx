import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BudgetsProvider} from './Context/BudgetsContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <BudgetsProvider>
        <App />
      </BudgetsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
