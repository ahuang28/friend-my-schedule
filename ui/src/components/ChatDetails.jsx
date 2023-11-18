import { useParams } from "react-router-dom"

function ChatDetails() {
    const { id } = useParams()

    return (
        <>
            <div>Chat Details {id}</div>
        </>
    )
}

export default ChatDetails