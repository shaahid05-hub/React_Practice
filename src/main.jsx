import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux'
import Store from './Store'


createRoot(document.getElementById('root')).render(
<Provider store={Store}>
   <BrowserRouter>
    <App/>
   </BrowserRouter>
</Provider>
)
