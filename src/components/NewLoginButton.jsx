import app from '../Secret/secret.js'
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { UserContext } from "../ContextProvider";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Button } from "@mui/material";



const connectAuth = () => {
    // const app = initializeApp(firebaseConfig);
    return getAuth(app);
}

const NewLoginButton = () => {
    const navigate = useNavigate();

    const {setUser} = useContext(UserContext)


    function handleGoogleLogin() {

        const auth = connectAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
        .then((res) => {
            setUser(res.user);
            navigate("/dashboard");
        })
        .catch(console.error)
    }

    return(

        <Button 
        className="login-button"
        variant="contained" 
        onClick={handleGoogleLogin}>Google Login</Button>
    )
}

export default NewLoginButton;