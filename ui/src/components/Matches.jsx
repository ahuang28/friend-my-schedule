import NavBar from "./NavBar"
import './Matches.css'
import { Card, CardHeader, Avatar, Button } from "@nextui-org/react"
import {ChevronRightIcon} from "@radix-ui/react-icons"

function Matches() {

    const data = [
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
        {
            "name": "John Doe",
            "year": "U4",
            "program": "Software Engineering"
        },
    ]

    return (
        <>
            <div className="w-screen h-screen gradient">
                <div className="w-full h-full">
                    <div className="px-4">
                        <div>Matches</div>
                        <div className="grid grid-cols-1 gap-2 overflow-y-auto">
                            {
                                data && data.map((item, index) => (
                                        <Card key={index} className="rounded-2xl px-2 py-3 shadow-[0px_4px_24px_-1px_#00000033] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] [background:linear-gradient(180deg,rgba(255,255,255,0.6)_0%,rgba(217,217,217,0.1)_100%)]">
                                            <CardHeader className="flex flex-row justify-between">
                                                <div className="flex flex-row">
                                                    <Avatar></Avatar>
                                                    <div className="pl-4">
                                                        <div className="font-bold">{item.name}</div>
                                                        <div className="text-[12px]">{item.year} {item.program}</div>
                                                    </div>
                                                </div>
                                                <Button isIconOnly variant="light">
                                                    <ChevronRightIcon />
                                                </Button>
                                            </CardHeader>
                                        </Card>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
                <NavBar />
            </div>            
        </>
    )
}

export default Matches