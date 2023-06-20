import { getMovieReviews } from "services/services"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewItem from "./ReviewItem"
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isEmpty, setIsEmpty]= useState(false)
    
    const { id } = useParams()
    
    useEffect(() => {
        if (!id) {
            return
        }
        setIsLoading(true)
        setIsEmpty(false)
        const fetchReviews = async () => {
            try {
                const data = await getMovieReviews(id);
                if (data.length === 0) {
                    setIsEmpty(true)
                    return
                }
                setReviews(data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchReviews()
    }, [id])
    
    if (isEmpty) {
        return <p>We don't have any reviews for this movie</p>
    }
    
    return (
        <ul>
            {reviews?.map(item => <ReviewItem key={item.id}
                                             author={item.author}
                                             content={item.content}
                                             />)}
        </ul>
    )
}

export default Reviews