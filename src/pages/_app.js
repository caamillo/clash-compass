// Tailwind
import '@/styles/globals.css'

// Context
import { GeneralProvider } from '@/lib/GeneralContext'

export default function App({ Component, pageProps }) {
  return <GeneralProvider>
    <Component { ...pageProps } />
  </GeneralProvider>
}
