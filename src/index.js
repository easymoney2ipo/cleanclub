import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ContextProvider } from './contexts/ContextProvider';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
<ContextProvider>    
    <App />
</ContextProvider>
);
