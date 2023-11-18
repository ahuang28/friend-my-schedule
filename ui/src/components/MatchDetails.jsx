import { useParams } from "react-router-dom"

export function MatchDetails() {
    const { id } = useParams()
    return (
        <>
            <div>Match {id}</div>
        </>
    )
}

export default MatchDetails