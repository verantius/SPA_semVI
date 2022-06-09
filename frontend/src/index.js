import ReactDOM from 'react-dom';
//import './index.css';
import App from './components/App/App';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
    
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
    
    ,document.getElementById('root'));

