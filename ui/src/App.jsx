import { Route, Routes, Link } from "react-router-dom"

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
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="/chat" element={<div>Chat</div>} />
        <Route path="/profile" element={<div>Profile</div>} />
        <Route path="/matches">
          <Route index element={<div>Matches</div>} />
        </Route>
        <Route path="*" element={<div>404 Error Page</div>}/>
      </Routes>
    </>
  )
}

export default App
