import { Link, useLocation } from "react-router-dom"

function NavBar() {
    let path = useLocation()
    path = path.pathname

    console.log()
    
    return (
        <div className="z-100 bottom-0 fixed w-full bg-[#e2ceb599] bg-opacity-60">
            <nav className="flex flex-row justify-around px-2 py-4">
                <Link to="/chat"><img src={ path === "/chat" ? "/src/assets/chat.svg" : "/src/assets/chat_un.svg" } /></Link>
                <Link to="/matches"><img src={ path === "/matches" ? "/src/assets/match.svg" : "/src/assets/match_un.svg" }/></Link>
                <Link to="/profile"><img src={ path === "/profile" ? "/src/assets/profile.svg" : "/src/assets/profile_un.svg" }/></Link>
            </nav>
        </div>
    )
}

export default NavBar