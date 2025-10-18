import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addNextWatchShows } from "../utils/tvShowSlice";

const useNextWatchTVShows = () => {
    const dispatch = useDispatch();

    const fetchNextWatchTVShows = async() => {
        try {
            const res = await fetch("https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc", API_CONFIG);
            console.log('action', res)
            const data = await res.json();
            dispatch(addNextWatchShows(data.results));
        } catch (err) {
            console.error("Error fetching tv shows:", err);
        }
    }

    useEffect(() => {
        fetchNextWatchTVShows();
    }, []);
}

export default useNextWatchTVShows;