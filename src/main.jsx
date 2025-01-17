import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Select the root element from the DOM
const root = document.getElementById('root');

// Use ReactDOM.createRoot() to initialize the React app
ReactDOM.createRoot(root).render(<App />);