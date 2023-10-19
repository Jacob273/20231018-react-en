import './App.css'
import { Header } from './components/Header.jsx'
import { MainMenu } from './components/MainMenu.jsx'


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <MainMenu />
      </main>
    </>
  )
}

export default App
