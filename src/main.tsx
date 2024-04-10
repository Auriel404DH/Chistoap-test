import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider as StoreProvider } from 'react-redux';
import { store } from './redux/store.ts';
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>
)
