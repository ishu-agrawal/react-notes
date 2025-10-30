const fetchMovieData = async (movie) => {
    try {
        const res = await fetch(`https://api.imdbapi.dev/search/titles?query=${movie}`);
        const data = await res.json();
        return data.titles;
    } catch (err) {
        console.error("Error while fetching movie data:", err);
        return null;
    }
};

export default fetchMovieData;