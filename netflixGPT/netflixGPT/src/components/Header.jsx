import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGS } from "../utils/constants";
import { toggleGPTSearch } from "../utils/gptSlice";
import { changeLang } from "../utils/langSlice";
import { Search } from "lucide-react";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user);
    const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
    const selectedLang = useSelector(store => store.lang.selectedLang);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate('/'); // handled in useEffect
        }).catch((error) => {
            console.log('error occured while signing out: ', error);
        });

    }

    const handleToggleGPT = () => {
        dispatch(toggleGPTSearch());
    }

    const handleLangChange = (e) => {
        dispatch(changeLang(e.target.value))
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL
                }))
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, []);
    
    return (
        <div className="flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
            <img 
                className="w-44"
                src = {LOGO_URL}
                alt = 'Logo'
            />
            { user && 
                <div className="flex p-2">
                    {showGPTSearch && <select 
                        onChange={handleLangChange}
                        value={selectedLang}
                        className="p-2 bg-gray-500 text-white m-2">
                        {SUPPORTED_LANGS.map(
                            (lang) => <option 
                                key={lang.identifier} 
                                value={lang.identifier}
                            >
                                {lang.name}
                            </option>
                        )}
                    </select>}
                    <button 
                        onClick={handleToggleGPT}
                        className="py-2 px-4 mx-4 my-2 text-white cursor-pointer hover:bg-purple-800 rounded-lg">
                            {showGPTSearch ? 'HomePage' : (
                                <div className="flex gap-2 ">
                                    GPT Search 
                                    <Search />
                                </div>
                            )}
                        </button>
                    <img className="w-12 h-12"
                        alt = 'userIcon'
                        src = {user.photoURL}
                    />
                    <button 
                        onClick={handleSignOut}
                        className="font-bold text-white cursor-pointer"
                    >
                        Sign Out
                    </button>
                </div>
            }
        </div>
    )
}

export default Header;