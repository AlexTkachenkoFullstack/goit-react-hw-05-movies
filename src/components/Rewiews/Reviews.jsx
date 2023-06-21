import { getMovieReviews } from "services/services"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ReviewItem from "../ReviewItem/ReviewItem"
import { ReviewList, ReviewsEmpty, ErrorMessage } from "./Reviews.styled"

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [error, setError] = useState(null)
    const [isEmpty, setIsEmpty] = useState(false)
  
    
    const { id } = useParams()
    
    useEffect(() => {
        if (!id) {
            return
        }
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
            }
        }
        fetchReviews()
    }, [id])
   
    

    if (isEmpty) {
        return <ReviewsEmpty>We don't have any reviews for this movie</ReviewsEmpty>
    }

    if (error) {
        return <ErrorMessage>Sorry, there are some problems. Try to come back a little later.</ErrorMessage>
    }
    
    return (
        <ReviewList>
            {reviews?.map(item => <ReviewItem key={item.id}
                                             author={item.author}
                                             content={item.content}
                                             />)}
        </ReviewList>
    )
}

export default Reviews