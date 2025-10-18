import useMovieTrailer from "../../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailerData = useMovieTrailer(movieId);

    return (
        <div className="w-screen">
            <iframe 
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + trailerData?.key + "?autoplay=1&mute=1&controls=0&modestbranding=1&showinfo=0&loop=1&fs=0&rel=0"}
                title="YouTube video player" 
                allow="autoplay; encrypted-media" referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
        </div>
    )
}

export default VideoBackground;