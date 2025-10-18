import { useEffect, useState } from "react";
import { API_CONFIG } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const [trailerData, setTrailerData] = useState(null);
    const getMovieVideo = async() => {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
        const data = await fetch(url , API_CONFIG);
        const json = await data.json();

        const filterTrailers = json.results.filter(
            (video) => video.type == 'Trailer'
        );

        const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
        setTrailerData(trailer);
    }

    useEffect(() => {
        getMovieVideo()
    }, []);

    return trailerData;
}

export default useMovieTrailer;