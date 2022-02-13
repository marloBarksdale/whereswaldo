import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import GameData from './components/GameData';
import { useGame } from './hooks/useGameContext';
import Game from './pages/Game/Game';
import Startup from './pages/Startup/Startup';
import Leaderboard from './pages/Leaderboard/Leaderboard';

function App() {
  const { user } = useGame();

  return (
    <div className='App'>
      <Router>
        <GameData />

        <Routes>
          <Route
            path='/'
            element={!user ? <Startup /> : <Navigate to='/game' />}
          />
          <Route path='game' element={user ? <Game /> : <Navigate to='/' />} />

          <Route path='leaderboard' element={<Leaderboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
