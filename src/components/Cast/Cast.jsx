import { getMovieCast } from "services/services"
import CastItem from "components/CastItem/CastItem"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CastList } from "./Cast.styled"
const Cast = () => {
    const [cast, setCast] = useState([])
    const [error, setError] = useState(null)
    const [isEmpty, setIsEmpty]=useState(false)
    
    const { id } = useParams()
 
    useEffect(() => {
        setIsEmpty(false)
        const getCast = async () => {
            try {
                const data = await getMovieCast(id);
                if (data.length === 0) {
                    setIsEmpty(true)
                    return
                }
                setCast(data)
            } catch (error) {
                setError(error)
            } 
        }
        getCast()
    },[id])
    
    if (isEmpty) {
        return <p>There no any information about cast</p>
    }

    if (error) {
        return <p>Sorry, there are some problems. Try to come back a little later.</p>
    }

    return (
                <CastList>
                    {cast?.map(item => 
                        (<CastItem key={item.id}
                            name={item.name}
                            character={item.character}
                            photo={item.profile_path}
                        />)
                    )}
                </CastList>
            
        
    )
}

export default Cast