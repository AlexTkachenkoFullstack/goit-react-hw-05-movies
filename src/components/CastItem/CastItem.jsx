
import { TbPhotoOff } from "react-icons/tb";

const CastItem = ({ name, character, photo }) => {
   
    
   
    return (
        <li>
            {photo
                ? <img src={`https://image.tmdb.org/t/p/w200/${photo}`} alt={name} />
            : <TbPhotoOff style={{height:150, width: 150}}/>}
            <p>{name}</p>
            <p>Character: {character}</p>
        </li>
    )
}

export default CastItem