import { useState } from 'react'
import AllPlayers from './components/AllPlayers'
import NewPlayerForm from './components/NewPlayersForm'
import SinglePlayer from './components/SinglePlayer'
import './App.css'
import { Routes,Route,Link } from 'react-router-dom'

const App = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  return (
    <>
    <header>
      <h1 className="pageTitle"><Link to="/">Puppy Bowl 2024</Link></h1>
    </header>
    <h2><Link to="/newPlayer">Create a New Player!</Link></h2>
    <div>
    <Routes>
        <Route path="/" element={<AllPlayers setSinglePlayerDetails={setSelectedPlayer} />} />
        <Route path="/player" element={<SinglePlayer player={selectedPlayer} />} />
        <Route path="/newPlayer" element={<NewPlayerForm />} />
      </Routes>
    </div>
    </>
  );
};

export default App;