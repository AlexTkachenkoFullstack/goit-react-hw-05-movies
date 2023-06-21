
import { TbPhotoOff } from "react-icons/tb";
import { CastText, CastName} from "./CastItem.styled";

const CastItem = ({ name, character, photo }) => {
   
    
   
    return (
        <li>
            {photo
                ? <img src={`https://image.tmdb.org/t/p/w200/${photo}`} alt={name} />
            : <TbPhotoOff style={{height:300, width: 200}}/>}
            <CastName>{name}</CastName>
            <CastText>Character: {character}</CastText>
        </li>
    )
}

export default CastItem