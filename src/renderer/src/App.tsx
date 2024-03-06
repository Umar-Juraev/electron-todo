import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
const LazyTodosScreen = lazy(() => import('./components/pages/TodosScreen'));
const LazyHistoryScreen = lazy(() => import('./components/pages/HistoryScreen'));

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="todos" element={<LazyTodosScreen/>}/>
        <Route path="history" element={<LazyHistoryScreen/>}/>
      </Route>
      <Route path="/login" element={<>Login screen</>}/>
    </Routes>
  ) 
}

export default App
