import React, { useRef, useState } from 'react'
import lang from '../../utils/langConstants'
import { useSelector } from 'react-redux'
import axios from 'axios';

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.lang.selectedLang);

    const [response, setResponse] = useState("")
    const searchText = useRef(null)

    const handleGPTSearch = async() => {
        console.log(searchText.current.value);
         try {     
            const userInput = searchText.current.value;
            const API_BASE = import.meta.env.VITE_API_BASE_URL || "";
            const query = `Act as a movie recommendation system. Suggest exactly 5 movie names (comma-separated) for the topic: ${userInput}.`;
            const res = await axios.post(`${API_BASE}/api/chat`, { query });
            console.log(res)
            setResponse(res.data.output);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className='pt-[7%] flex justify-center'>
            <form 
                onSubmit={(e) => e.preventDefault()}
                className='w-1/2 bg-black grid grid-cols-12 rounded-3xl'>
                <input
                    ref = {searchText}
                    type = "text"
                    placeholder = {lang[langKey].searchPlaceholder}
                    className = 'p-4 m-4 col-span-9 bg-white rounded-lg'
                />
                <button
                    onClick={handleGPTSearch}
                    className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg cursor-pointer'
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
  )
}

export default GPTSearchBar