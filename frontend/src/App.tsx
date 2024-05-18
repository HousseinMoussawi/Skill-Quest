import "./styles/App.css";
import "./styles/utilities.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creators from "./pages/creators";
import Admin from "./pages/admin";
import Home from "./pages/home";
import Auth from "./pages/auth";
import Games from "./pages/games";
import Achievements from "./pages/achievements";
import Profile from "./pages/profile";
import Progress from "./pages/progress";
import Rewards from "./pages/rewards";
import Game from "./pages/game";
import CreatorLogin from "./pages/auth/creator-login";
import CreatorSignup from "./pages/auth/creator-signup";
import PlayerLogin from "./pages/auth/player-login";
import PlayerSignup from "./pages/auth/player-signup";
import Layout from "./pages/layout";
import CreateLevel from "./pages/create-level";

import TypingGame from "./pages/typing-game";
import NewGame from "./pages/new-game";

function App() {

  const isAuthorized:boolean =!!localStorage.getItem('token')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route
              path="/auth/creator-login"
              element={<CreatorLogin />}
            ></Route>
            <Route
              path="/auth/creator-signup"
              element={<CreatorSignup />}
            ></Route>
            <Route path="/auth/" element={<PlayerLogin />}></Route>
            <Route
              path="/auth/player-signup"
              element={<PlayerSignup />}
            ></Route>
          </Route>

          <Route path="/" element={<Home />}></Route>

          <Route path="" element={<Layout isAuthorized={isAuthorized}/>}>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/creators" element={<Creators />}></Route>
            <Route path="/games/:id" element={<Game />}></Route>
            <Route path="/games" element={<Games />}>
              
            </Route>
            <Route
              path="/achievements"
              element={<Achievements />}
            ></Route>
            <Route path="/TypingInvaders" element={<TypingGame/>}></Route>
            <Route path="/NewGame" element={<NewGame/>}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/progress" element={<Progress />}></Route>
            <Route path="/rewards" element={<Rewards />}></Route>
            <Route path="/create" element={<CreateLevel />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
