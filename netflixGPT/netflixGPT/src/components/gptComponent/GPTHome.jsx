import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_IMG } from '../../utils/constants'

const GPTHome = () => {
  return (
    <div>
        <div className="fixed -z-10">
            <img src={BG_IMG}
                alt="background-img"
            />
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GPTHome