import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './browsePage/SecondaryContainer';
import MainContainer from "./browsePage/MainContainer";
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedTVShows from '../hooks/useTopRatedTVShows';
import useNextWatchTVShows from '../hooks/useNextWatchTVShows';

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();

  useTopRatedTVShows();
  useNextWatchTVShows();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse