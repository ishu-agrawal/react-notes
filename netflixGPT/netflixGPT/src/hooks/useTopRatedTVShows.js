import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { API_CONFIG } from "../utils/constants";
import { addTopRatedShows } from "../utils/tvShowSlice";

const useTopRatedTVShows = () => {
    const dispatch = useDispatch();

    const fetchTopRatedTVShows = async() => {
        try {
            const res = await fetch("https://api.imdbapi.dev/titles?types=TV_SERIES&sortBy=SORT_BY_POPULARITY");
            const data = await res.json();

            dispatch(addTopRatedShows(data.titles));
        } catch (err) {
            console.error("Error fetching tv shows:", err);
        }
    }

    useEffect(() => {
        fetchTopRatedTVShows();
    }, []);
}

export default useTopRatedTVShows;