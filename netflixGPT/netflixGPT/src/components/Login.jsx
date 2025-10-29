import { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, PROFILE_LOGO_URL } from "../utils/constants";

const Login = () => {
    const [isSignInFrom, setIsSignInFrom] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInFrom);
    }

    const username = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    // validate input entries
    const handleButtonClick = () => {
        const message = validateData(username.current != null && username.current.value, email.current.value, password.current.value);
        setErrorMsg(message);

        if(message != null) return;

        // sign-up logic
        if(!isSignInFrom){
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: username.current?.value, 
                        photoURL: PROFILE_LOGO_URL
                        }).then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }))
                            navigate('/browse');
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMsg(errorCode + '-' + errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage);
                });

        } 
        // sign-in logic
        else {
            signInWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                        updateProfile(user, {
                        displayName: username.current?.value, 
                        photoURL: "https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png"
                        }).then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(addUser({
                                uid: uid,
                                email: email,
                                displayName: displayName,
                                photoURL: photoURL
                            }))
                            navigate('/browse');
                        }).catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            setErrorMsg(errorCode + '-' + errorMessage);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMsg(errorCode + '-' + errorMessage);

                });

        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG}
                    alt="background-img"
                />
            </div>

            {/* Login from */}
            <form 
                onSubmit={(e) => e.preventDefault()}
                className="absolute p-12 bg-black/70 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFrom && 
                    <input 
                    ref = {username}
                    type="text"
                    placeholder="Username"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                }
                <input 
                    ref = {email}
                    type="text"
                    placeholder="Email address"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                <input 
                    ref = {password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                <p className="text-red-500 text-sm py-2">{errorMsg}</p>
                <button 
                    className="p-4 my-4 bg-red-700 w-full text-sm rounded-lg cursor-pointer"
                    onClick={handleButtonClick}
                >
                    {isSignInFrom ? "Sign In" : "Sign Up"}
                </button>

                {isSignInFrom ? 
                    <p className="py-6 text-sm">
                        New to Netflix? &nbsp;
                        <span className="cursor-pointer underline" 
                            onClick={toggleSignInForm}
                        >
                            Sign Up Now
                        </span>
                    </p> 
                    :
                    <p className="py-6 text-sm">
                        Already a member? &nbsp;
                        <span className="cursor-pointer underline" 
                            onClick={toggleSignInForm}
                        >
                            Sign In Now
                        </span>
                    </p> 
                }
            </form>
        </div>
    )
}

export default Login;