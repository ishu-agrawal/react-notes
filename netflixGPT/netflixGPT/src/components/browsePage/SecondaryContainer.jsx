import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movie);
    const tvShows = useSelector(store => store.tvShow);
    return (
        <div className=" bg-black">
            <div className="pl-6 -mt-40 relative z-20">
                <MovieList title={'Now Playing'} moviesData={movies.nowPlayingMovies}/>
                <MovieList title={'Your Next Watch'} moviesData={tvShows.nextWatchShows}/>
                <MovieList title={'Trending'} moviesData={movies.trendingMovies}/>
                <MovieList title={'Top Rated Shows'} moviesData={tvShows.topRatedShows}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;