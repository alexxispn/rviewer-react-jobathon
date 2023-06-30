import React from 'react';
import {createRoot} from "react-dom/client";
import App from './components/App/App';
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App/>
        <GlobalStyles/>
    </React.StrictMode>,
);
