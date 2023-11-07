import React from 'react';
import './styles.css'
import { createRoot } from "react-dom/client";
import App from './App'

const container = document.getElementById("app")!;
const root = createRoot(container);
root.render(<App />);

