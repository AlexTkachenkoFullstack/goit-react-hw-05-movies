import PropTypes from 'prop-types';
import { ReviewItemH3, ReviewItemText } from './ReviewItem.styled';
const ReviewItem = ({ author, content }) => {
    return (
        <li>
            <ReviewItemH3> Author: {author}</ReviewItemH3>
            <ReviewItemText>{content}</ReviewItemText>
        </li>
    )
}

export default ReviewItem

ReviewItem.propTypes = {
    author: PropTypes.string,
    content:PropTypes.string
}