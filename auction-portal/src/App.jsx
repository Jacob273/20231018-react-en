import './App.css'
import { Header } from './components/Header.jsx'
import { MainMenu } from './components/MainMenu.jsx'


function App() {
  return (
    <>
      <Header title="Auction" />
      <Header />
      <main>
        <MainMenu />
      </main>
    </>
  )
}

export default App
