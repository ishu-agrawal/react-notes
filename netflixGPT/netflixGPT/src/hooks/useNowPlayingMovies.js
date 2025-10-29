import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const fetchNowPlayingMovies = async() => {
        try {
            const res = await fetch("https://api.imdbapi.dev/titles?types=MOVIE&sortBy=SORT_BY_POPULARITY");
            const data = await res.json();

            dispatch(addNowPlayingMovies(data.titles));
        } catch (err) {
            console.error("Error fetching movies:", err);
        }
    }

    useEffect(() => {
        fetchNowPlayingMovies();
    }, []);
}

export default useNowPlayingMovies;