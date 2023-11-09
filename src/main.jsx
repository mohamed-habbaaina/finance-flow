import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BudgetsProvider} from './Context/BudgetsContext.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>,
)