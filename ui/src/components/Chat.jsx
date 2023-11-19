import NavBar from "./NavBar"

function Chat() {
    return (
        <>
            <div className="w-screen h-screen overflow-hidden">
                <img className="top-0 left-0" alt="Ellipse" src="/src/assets/ellipse-14.svg" />
                <img className="absolute w-[390px] h-[692px] right-0 bottom-0" alt="Ellipse" src="/src/assets/ellipse-13.svg" />
                <div className="w-full h-full">
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Chat