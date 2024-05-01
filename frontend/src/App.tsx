import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Creators from './pages/creators';
import Admin from './pages/admin';
import Home from './pages/home';
import Auth from './pages/auth';
import CreateGame from './pages/create-game';
import CreatorAchievements from './pages/creator-achievements';
import CreatorProfile from './pages/creator-profile';
import Games from './pages/games';
import PlayerAchievements from './pages/player-achievements';
import PlayerProfile from './pages/player-profile';
import Progress from './pages/progress';
import Rewards from './pages/rewards';
import Game from './pages/game';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/creators' element={<Creators/>}></Route>
      <Route path='/auth' element={<Auth/>}></Route>
      <Route path='/create-game' element={<CreateGame/>}></Route>
      <Route path='/creator-achievements' element={<CreatorAchievements/>}></Route>
      <Route path='/creator-profile' element={<CreatorProfile/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
      <Route path='/games' element={<Games/>}></Route>
      <Route path='/player-achievements' element={<PlayerAchievements/>}></Route>
      <Route path='/player-profile' element={<PlayerProfile/>}></Route>
      <Route path='/progress' element={<Progress/>}></Route>
      <Route path='/rewards' element={<Rewards/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
