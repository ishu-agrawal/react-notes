import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import SecondaryContainer from './browsePage/SecondaryContainer';
import MainContainer from "./browsePage/MainContainer";
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse