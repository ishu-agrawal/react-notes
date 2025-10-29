import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addNextWatchShows } from "../utils/tvShowSlice";

const useNextWatchTVShows = () => {
    const dispatch = useDispatch();

    const fetchNextWatchTVShows = async() => {
        try {
            const res = await fetch("https://api.imdbapi.dev/titles?types=TV_SERIES&countryCodes=IN&sortBy=SORT_BY_POPULARITY");
            const data = await res.json();
            dispatch(addNextWatchShows(data.titles));
        } catch (err) {
            console.error("Error fetching tv shows:", err);
        }
    }

    useEffect(() => {
        fetchNextWatchTVShows();
    }, []);
}

export default useNextWatchTVShows;