import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PageProvider } from './context/PageProvider';
import { LocationProvider } from './context/LocationProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <PageProvider>
        <LocationProvider>
            <App />
        </LocationProvider>
    </PageProvider>
);


