import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const MainContainer = () => {

  const nowPlayingMoviesData = useSelector(store => store.movie?.nowPlayingMovies);
  if(!nowPlayingMoviesData) return;

  const recentMovie = nowPlayingMoviesData[0];

    const {id, title, overview} = recentMovie;
    return (
        <div>
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;