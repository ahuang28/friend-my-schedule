import NavBar from "./NavBar"
import './Matches.css'
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react"
import {ChevronRightIcon} from "@radix-ui/react-icons"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Matches() {
    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        const api = axios.create({
            baseURL: "http://localhost:3000",
        });

        api.patch("/users/655945feacec3f11232373be/match/fetch").then((data) => {
            // navigate("/matches", { replace: true })
            console.log(data.data)
            setUsers(data.data)
            return
        }).catch(() => {
            console.log("Error")
        })
    }, [])

    const onClick = (value) => {
        // e.preventDefault()
        navigate(`/matches/${value._id}`, { state: value })
    }

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
            <img className="z-0 absolute bottom-0 left-0" alt="chat bg" src="/src/assets/ellipse-13.svg" />
            <div className="w-screen h-screen gradient">

                <div className="w-full h-full">
                    <div className="relative z-[100] pt-11 mb-4 text-center text-[24px]">Matches</div>
                    <div className="z-10 grid grid-cols-1 gap-2 max-h-[680px] overflow-y-scroll overflow-x-hidden px-4">
                        {
                            users && users.map((item, index) => (
                                    <Card key={index} className="relative z-[100] shadow-sm rounded-2xl px-2 py-3 [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                                        <CardHeader className="flex flex-row justify-between">
                                            <div className="flex flex-row">
                                                <Avatar></Avatar>
                                                <div className="pl-4">
                                                    <div className="font-bold">{item.user.name}</div>
                                                    <div className="text-[12px]">U{item.user.year} {camelCase(item.user.major)}</div>
                                                </div>
                                            </div>
                                            <Button isIconOnly variant="light"onClick={() => onClick(item.user)}>
                                                <ChevronRightIcon />
                                            </Button>
                                        </CardHeader>
                                    </Card>
                                )
                            )
                        }
                    </div>
                </div>
                {/* <img className="absolute top-0 left-0 z-0" alt="chat bg" src="/src/assets/chat-bg.svg" /> */}
                <NavBar />
            </div>            
        </>
    )
}

export default Matches