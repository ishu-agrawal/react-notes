import MovieCard from './MovieCard'

const MovieList = ({title, moviesData}) => {
    if(!moviesData) return;
    return (
        <div className='px-6 pb-4'>
            <h1 className='text-xl font-bold py-3 text-white'>{title}</h1>
            <div className="flex overflow-x-scroll scroll-smooth no-scrollbar">
                <div
                    className="flex gap-1">
                    {moviesData.map(movie =>
                        movie.primaryImage?.url && (
                            <MovieCard key={movie.id} posterPath={movie.primaryImage.url} />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList