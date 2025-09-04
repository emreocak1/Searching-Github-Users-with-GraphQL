import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from "@/components/ui/sonner"
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster/>
    <App />
  </StrictMode>
);
