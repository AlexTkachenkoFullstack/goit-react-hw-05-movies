import { getMovieCast } from "services/services"
import CastItem from "./CastItem"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
const Cast = () => {
    const [cast, setCast] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading]=useState(false)
    
    const { id } = useParams()
 
    useEffect(() => {
        setIsLoading(true)
        const getCast = async () => {
            try {
                const data = await getMovieCast(id);
                setCast(data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false);
            };
        }
        getCast()
    },[id])
    
    
    return (
        <ul>
            {cast?.map(item => 
                (<CastItem key={item.id}
                    name={item.name}
                    character={item.character}
                    photo={item.profile_path}
                />)
            )}
        </ul>
    )
}

export default Cast