import './styles/App.css';
import './styles/utilities.css'
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
import CreatorLogin from './pages/auth/creator-login';
import CreatorSignup from './pages/auth/creator-signup';
import PlayerLogin from './pages/auth/player-login';
import PlayerSignup from './pages/auth/player-signup';
import Layout from './pages/layout';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/auth' element={<Auth/>}>
          <Route path='/auth/creator-login' element={<CreatorLogin/>}></Route>
          <Route path='/auth/creator-signup' element={<CreatorSignup/>}></Route>
          <Route path='/auth/' element={<PlayerLogin/>}></Route>
          <Route path='/auth/player-signup' element={<PlayerSignup/>}></Route>
      </Route>
      <Route path='/' element={<Home/>}></Route>
      <Route path='' element={<Layout/>}>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/creators' element={<Creators/>}></Route>
      <Route path='/create-game' element={<CreateGame/>}></Route>
      <Route path='/creator-achievements' element={<CreatorAchievements/>}></Route>
      <Route path='/creator-profile' element={<CreatorProfile/>}></Route>
      <Route path='/game' element={<Game/>}></Route>
      <Route path='/games' element={<Games/>}></Route>
      <Route path='/achievements' element={<PlayerAchievements/>}></Route>
      <Route path='/profile' element={<PlayerProfile/>}></Route>
      <Route path='/progress' element={<Progress/>}></Route>
      <Route path='/rewards' element={<Rewards/>}></Route>

      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
