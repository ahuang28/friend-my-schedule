import NavBar from "./NavBar"
import { useState, useEffect } from "react"
import axios from "axios"
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react"


function Chat() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const api = axios.create({
            baseURL: "http://localhost:3000",
        });

        api.patch("/users/655945feacec3f11232373be/match/fetch").then((data) => {
            setUsers(data.data)
            return
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    const camelCase = (value) => {
        let words = value.split(' ');

        let capitalizedWords = words.map(function(word) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        });

        let result = capitalizedWords.join(' ');

        return result;
    }

    return (
        <>
                {/* <img className="absolute top-0 left-0" alt="chat bg" src="/src/assets/chat-bg.svg" /> */}
            <div className="absolute top-0 right-0 bg-white [background:linear-gradient(180deg,rgb(64,139,252)_10.95%,rgb(248,243,237)_35.73%,rgb(252.2,182.9,79.3)_67.33%,rgb(254,205,249)_100%)] w-screen h-screen overflow-hidden">
                <div className="w-full h-full flex flex-col items-center">
                    <div className="z-10 mt-12 mb-4 [font-family:'Inter'] font-normal text-[#00284c] text-[24px] tracking-wide leading-[normal]">
                        Chats
                    </div>

                    <div className=" w-full max-h-[680px] overflow-y-scroll overflow-x-hidden">
                        {
                            users && users.map((item, index) => (
                                <Card key={index} shadow="none" radius="none" className="px-2 py-1 w-full bg-opacity-0 border-none grid grid-cols-1 gap-1">
                                    <CardHeader className="flex flex-row justify-between">
                                        <div className="flex flex-row">
                                            <Avatar></Avatar>
                                            <div className="pl-6">
                                                <div className="text-[#00284c] [font-family:'Inter'] tracking-wide font-bold">{item.user.name}</div>
                                                <div className="text-[#00284c] [font-family:'Inter'] tracking-wide text-[12px]">U{item.user.year} {camelCase(item.user.major)}</div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <img className="w-[300px] ml-16 z-10" alt="line" src="/src/assets/line.svg" />
                                </Card>
                            ))
                        }
                    </div>
                
                </div>
                <img className="absolute top-0 left-0 z-0" alt="chat bg" src="/src/assets/chat-bg.svg" />
                <NavBar />
            </div>
        </>
    )
}

export default Chat