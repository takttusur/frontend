import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <HashRouter>
                    <App />
                </HashRouter>
            </QueryClientProvider>
        </ChakraProvider>
    </React.StrictMode>
)
