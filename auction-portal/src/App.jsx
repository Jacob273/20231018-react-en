import { Outlet } from 'react-router-dom'
import './App.css'
import { Header } from './components/Header.jsx'
import { MainMenu } from './components/MainMenu.jsx'


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <MainMenu />
        <Outlet />
      </main>
    </>
  )
}

export default App
