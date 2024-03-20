import { Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Favs = () => {
  const [isLike, setIsLiked] = useState(false);
  const handleButtonClik =() =>{
    setIsLiked(!isLike);
  }
return(
  <button className={`favs ${isLiked ? 'active' : ''}`}
  onClick={handleButtonClick} >

<FontAwesomeIcon icon={getIconByName("heart")}/>

  </button>
)
  };
export default Favs;

