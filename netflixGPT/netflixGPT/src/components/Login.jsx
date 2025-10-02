import { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/validateData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [isSignInFrom, setIsSignInFrom] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const navigate = useNavigate();

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
                    navigate('/browse');
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
                    navigate('/browse');
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
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_medium.jpg"
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