import { IMG_CDN_URL } from "../../utils/constants"

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-35">
        <img 
            className="rounded-lg"
            alt = 'Movie'
            src = {posterPath}
        />
    </div>
  )
}

export default MovieCard