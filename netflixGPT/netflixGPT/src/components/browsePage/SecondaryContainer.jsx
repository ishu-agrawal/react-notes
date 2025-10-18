import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movie);
    return (
        <div>
            <MovieList title={'Now Playing'} moviesData={movies.nowPlayingMovies}/>
        </div>
    )
}

export default SecondaryContainer;