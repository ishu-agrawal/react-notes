import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const fetchTrendingMovies = async() => {
        try {
            const res = await fetch("https://api.imdbapi.dev/titles?types=MOVIE&countryCodes=IN&sortBy=SORT_BY_USER_RATING");
            const data = await res.json();

            dispatch(addTrendingMovies(data.titles));
        } catch (err) {
            console.error("Error fetching movies:", err);
        }
    }

    useEffect(() => {
        fetchTrendingMovies();
    }, []);
}

export default useTrendingMovies;