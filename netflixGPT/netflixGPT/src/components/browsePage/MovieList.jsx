import MovieCard from './MovieCard'

const MovieList = ({title, moviesData}) => {
    if(!moviesData) return;
    console.log(moviesData)
    return (
        <div>
            <div className="flex overflow-x-scroll">
                <h1>{title}</h1>
                <div className="flex">
                    {moviesData.map(
                        (movie) => <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList