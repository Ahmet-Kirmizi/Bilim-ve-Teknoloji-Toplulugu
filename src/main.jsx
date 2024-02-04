import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AnimatedCursor from "react-animated-cursor";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'var(--cursor-color)'
            }}
            outerStyle={{
                border: '3px solid var(--cursor-color)'
            }}
        />
    </React.StrictMode>
);