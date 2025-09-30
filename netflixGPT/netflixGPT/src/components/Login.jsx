import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInFrom, setIsSignInFrom] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInFrom(!isSignInFrom);
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
                className="absolute p-12 bg-black/70 w-3/12 my-36 mx-auto left-0 right-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-4">{isSignInFrom ? "Sign In" : "Sign Up"}</h1>
                {!isSignInFrom && 
                    <input 
                    type="text"
                    placeholder="Username"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                }
                <input 
                    type="text"
                    placeholder="Email or mobile number"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                <input 
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 bg-black/50 text-white text-sm w-full"
                />
                <button className="p-4 my-4 bg-red-700 w-full text-sm rounded-lg">{isSignInFrom ? "Sign In" : "Sign Up"}</button>

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