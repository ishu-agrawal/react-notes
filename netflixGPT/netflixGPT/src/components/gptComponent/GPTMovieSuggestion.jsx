import MovieList from '../browsePage/MovieList'
import { useSelector } from 'react-redux'

const GPTMovieSuggestion = () => {
  const {movieResult} = useSelector((store) => store.gpt);
  if(!movieResult) return;
  return (
    <div className='p-4 m-4 bg-black opacity-90'>
      <div>
        {movieResult.map(
            (movie, index) => (
              <MovieList 
                key={index} 
                title={movie[0].primaryTitle} 
                moviesData={movie} 
              />
            )
          )
        }
        
      </div>
    </div>
  )
}

export default GPTMovieSuggestion