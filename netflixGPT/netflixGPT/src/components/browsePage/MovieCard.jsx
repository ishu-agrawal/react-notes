import { IMG_CDN_URL } from "../../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-35">
        <img 
            className="rounded-lg"
            alt = 'Movie'
            src = {IMG_CDN_URL + posterPath}
        />
    </div>
  )
}

export default MovieCard