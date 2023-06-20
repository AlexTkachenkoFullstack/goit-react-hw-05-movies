

const CastItem = ({ name, character, photo }) => {
    if (!photo) {
        return
    }
    
    const photoUrl=`https://image.tmdb.org/t/p/w200/${photo}`
    return (
        <li>
            <img src={photoUrl} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
}

export default CastItem