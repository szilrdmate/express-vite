import ReactDOM from 'react-dom/client';
import App from '@/App';
import { AuthProvider } from '@/contexts/AuthProvider';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import '@/src/assets/global.css'


if(import.meta.env.MODE === 'production') {
    disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
        <App />
    </AuthProvider>
);