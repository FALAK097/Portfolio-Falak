import { createRoot } from 'react-dom/client';
import App from './App';
import { registerServiceWorker } from './serviceWorkerRegistration';
import './index.css';

registerServiceWorker();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);
