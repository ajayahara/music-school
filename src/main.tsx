import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ContextProvider } from './context/ContextApi.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)
