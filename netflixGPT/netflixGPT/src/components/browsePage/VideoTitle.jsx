import { Play, Info } from 'lucide-react';

const VideoTitle = ({title, overview}) => {
    return (
        <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black bg-gradient-to-t from-black">
            <h1 className="text-5xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/3">{overview}</p>
            <div className='flex'>
                <button className="flex bg-white text-black p-4 px-10 text-xl rounded-lg hover:opacity-80 cursor-pointer">
                    <Play className='mt-0.5 mr-2' />
                    Play
                </button>
                <button className="flex mx-2 bg-gray-500 text-white p-4 px-10 text-xl opacity-70 rounded-lg hover:opacity-50 cursor-pointer">
                    <Info className='mt-0.5 mr-2'/>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;