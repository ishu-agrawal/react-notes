import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const navigate = useNavigate()
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // navigate('/'); // handled in useEffect
        }).catch((error) => {
            console.log('error occured while signing out: ', error);
        });

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