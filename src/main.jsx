import { ApolloProvider } from '@apollo/client'
import client from './services/apollo.js'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
