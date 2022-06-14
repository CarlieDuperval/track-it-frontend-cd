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

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000">
        TrackIt
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

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
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 62 }} />
      </Container>
    </ThemeProvider>
  );
}
// Need to call handleSubmit

////////////////////////////////////////

// import { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// import { app } from '../ConnectAuth'

// export default function Signup({ setUser }) {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth(app);
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         setUser(result.user)
//         navigate('/')
//       })
//       .catch(alert)
//   }
//   const handleGoogleLogin = () => {
//     signInWithPopup(auth, provider)
//       .then(result => {
//         setUser(result.user)
//         navigate('/')
//       })
//       .catch(alert)
//   }
//   return (
//     <>
//       <h1>Signup</h1>
//       <hr />
//       <form onSubmit={handleFormSubmit}>
//         <label>Email:
//           <input type="email" value={email}
//             onChange={e => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>Password:
//           <input type="password" value={password}
//             onChange={e => setPassword(e.target.value)} />
//         </label>
//         <br />
//         <input type="submit" value="Sign up" />
//       </form>
//       <button
//         onClick={handleGoogleLogin}
//         style={{
//           backgroundColor: 'black',
//           color: 'white',
//           border: 'none' }}>
//         Sign in with Google</button>
//       <p>Already a user? <Link to="/login">Login</Link></p>
//     </>
//   )
// }
