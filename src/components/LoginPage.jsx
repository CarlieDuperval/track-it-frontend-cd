// import React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import  app  from '../../secret'

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="http://localhost:3000">
//         TrackIt
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Login() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Typography component="h1" variant="h5">
//             Sign In
//           </Typography>
//           <Box component="form" noValidate sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}></Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="/signup" variant="body2">
//                   {"Don't have an account yet? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 70 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }
// Need to call handleSubmit

// This Work
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import app from "../Secret/secret";

// const Login = ({ setUser, user }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth(app);

//   useEffect(() => {
//     const localUser = localStorage.getItem("displayName");
//     const avatar = localStorage.getItem("avatar");

//     console.log("localUser from LS ", localUser);

//     if (localUser) setUser({ ...user, displayName: localUser, photo: avatar });
//   }, []);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((result) => {
//         setUser(result.user);
//         navigate("/");
//       })
//       .catch(alert);
//   };

//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then((result) => {
//         setUser(result.user);

//         localStorage.setItem("displayName", result.user.displayName);
//         localStorage.setItem("avatar", result.user.photo);
//         localStorage.setItem("uid", result.user.uid);

//         console.log("this is my result", result.user.displayName);
//         navigate("/");
//       })
//       .catch(alert);
//   };

//   return (
//     <>
//       <h1>Login</h1>
//       <hr />
//       <form onSubmit={handleFormSubmit}>
//         <label>
//           Email:
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Password:
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <input type="submit" value="Login" />
//       </form>
//       <button
//         onClick={handleGoogleLogin}
//         style={{
//           backgroundColor: "black",
//           color: "white",
//           border: "none",
//         }}
//       >
//         Sign in with Google
//       </button>
//     </>
//   );
// };

// export default Login;

import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import app from "../Secret/secret";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { AuthContext } from "../../App";

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"TrackIT © "}
      {/* <Link color="inherit" href="http://localhost:3000"></Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  const handleGoogleLogin = () => {};

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box
            component="form"
            onSubmit={(e) => handleSubmit(e.target.value)}
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <button
              onClick={(e) => handleGoogleLogin(e.target.value)}
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
              }}
            >
              Sign in with Google Account
            </button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account yet? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 70 }} />
      </Container>
    </ThemeProvider>
  );
};

export default Login;
//Need to call handleSubmit
