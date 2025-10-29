import { useEffect, useState } from "react";

const useMovieTrailer = (movieTitle) => {
    const [trailerData, setTrailerData] = useState(null);

    const fetchTrailer = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/trailer?title=${encodeURIComponent(movieTitle)}`);
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
