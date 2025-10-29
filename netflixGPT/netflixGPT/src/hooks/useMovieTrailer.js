import { useEffect, useState } from "react";

const useMovieTrailer = (movieTitle) => {
    const [trailerData, setTrailerData] = useState(null);

    const fetchTrailer = async () => {
        try {
            const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
            const response = await fetch(`${API_BASE}/api/trailer?title=${encodeURIComponent(movieTitle)}`);
            const json = await response.json();

            if (json.items[0]?.id?.videoId) {
                setTrailerData(json.items[0]);
            } else {
                console.error("No trailer found:", json);
            }
        } catch (error) {
            console.error("Error fetching trailer:", error);
        }
    };

    useEffect(() => {
        if (movieTitle) 
            fetchTrailer();
    }, [movieTitle]);

    return trailerData;
};

export default useMovieTrailer;
