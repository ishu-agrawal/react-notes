import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './browsePage/SecondaryContainer';
import MainContainer from "./browsePage/MainContainer";
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTopRatedTVShows from '../hooks/useTopRatedTVShows';
import useNextWatchTVShows from '../hooks/useNextWatchTVShows';
import { useSelector } from 'react-redux';
import GPTHome from './gptComponent/GPTHome';

const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  useTrendingMovies();

  useTopRatedTVShows();
  useNextWatchTVShows();
  
  return (
    <div>
      <Header />
      {
        showGPTSearch ? <GPTHome /> : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
      
    </div>
  )
}

export default Browse