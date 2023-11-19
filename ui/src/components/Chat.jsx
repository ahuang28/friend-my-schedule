import NavBar from "./NavBar"

function Chat() {
    return (
        <>
            <div className="w-screen h-screen">
                <div className="w-full h-full flex flex-col items-center">
                    <img className="top-0 left-0" alt="chat bg" src="/src/assets/chat-bg.svg" />

                    <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#00284c] text-[24px] tracking-[0] leading-[normal]">
                        Chats
                    </div>
                
                </div>


                <div className="w-full h-full mt-12 flex flex-col items-center">
                </div>
                <NavBar />
            </div>
        </>
    )
}

export default Chat