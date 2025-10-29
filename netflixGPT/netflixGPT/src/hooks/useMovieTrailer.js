import { useEffect, useState } from "react";
import { API_CONFIG } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const [trailerData, setTrailerData] = useState(null);
    const getMovieVideo = async() => {
        const url = `https://api.imdbapi.dev/titles/${movieId}/videos`;
        const data = await fetch(url);
        const json = await data.json();

        const filterTrailers = json.videos.filter(
            (video) => video.type == 'trailer'
        );

        const trailer = filterTrailers.length ? filterTrailers[0] : json.videos[0];
        setTrailerData(trailer);
    }

    useEffect(() => {
        getMovieVideo()
    }, []);

    return trailerData;
}

export default useMovieTrailer;