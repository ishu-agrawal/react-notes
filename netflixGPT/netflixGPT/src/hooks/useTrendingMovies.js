import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

    const fetchTrendingMovies = async() => {
        try {
            const res = await fetch("https://api.themoviedb.org/3/trending/movie/day", API_CONFIG);
            const data = await res.json();

            dispatch(addTrendingMovies(data.results));
        } catch (err) {
            console.error("Error fetching movies:", err);
        }
    }

    useEffect(() => {
        fetchTrendingMovies();
    }, []);
}

export default useTrendingMovies;