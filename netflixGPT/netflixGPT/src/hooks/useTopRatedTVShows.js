import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addTopRatedShows } from "../utils/tvShowSlice";

const useTopRatedTVShows = () => {
    const dispatch = useDispatch();

    const fetchTopRatedTVShows = async() => {
        try {
            const res = await fetch("https://api.themoviedb.org/3/tv/top_rated", API_CONFIG);
            const data = await res.json();

            dispatch(addTopRatedShows(data.results));
        } catch (err) {
            console.error("Error fetching tv shows:", err);
        }
    }

    useEffect(() => {
        fetchTopRatedTVShows();
    }, []);
}

export default useTopRatedTVShows;