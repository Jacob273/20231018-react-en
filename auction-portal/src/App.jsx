import './App.css'
import { Header } from './components/Header.jsx'
import { MainMenu } from './components/MainMenu.jsx'
import { AuctionsPage } from './pages/AuctionsPage.jsx'


function App() {
  return (
    <>
      <Header />
      <main className="container">
        <MainMenu />
        <AuctionsPage />
      </main>
    </>
  )
}

export default App
