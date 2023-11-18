import { Route, Routes, Link } from "react-router-dom"
import Login from "./components/Login"
import Chat from "./components/Chat"
import ChatDetails from "./components/ChatDetails"
import Profile from "./components/Profile"
import Matches from "./components/Matches"
import MatchDetails from "./components/MatchDetails"
import Error from "./components/Error"

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/matches">Matches</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/matches/:id" element={<MatchDetails />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </>
  )
}

export default App
