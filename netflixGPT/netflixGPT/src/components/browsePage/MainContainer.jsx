import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

  const nowPlayingMoviesData = useSelector(store => store.movie?.nowPlayingMovies);
  if(!nowPlayingMoviesData) return;

  const recentMovie = nowPlayingMoviesData[0];

    const {id, primaryTitle, plot} = recentMovie;
    return (
        <div>
            <VideoTitle title={primaryTitle} overview={plot}/>
            <VideoBackground movieTitle={primaryTitle}/>
        </div>
    )
}

export default MainContainer;