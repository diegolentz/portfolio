import { ToastProvider } from './Context/toast/useToast'
import { AppRouter } from './routes'

function App() {
  return (
    <>
      <ToastProvider>
        <AppRouter />
      </ToastProvider>
    </>
  )
}

export default App
