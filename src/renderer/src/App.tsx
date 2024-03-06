import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/templates'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="home"
          element={<>home screen</>}
        />
      </Route>
      <Route path="/login" element={<>Login screen</>}/>
    </Routes>
  )
}

export default App
