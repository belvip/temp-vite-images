import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a new instance of QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(

  <AppProvider>

    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>

  </AppProvider>
)
