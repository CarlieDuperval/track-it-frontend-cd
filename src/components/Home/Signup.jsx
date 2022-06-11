// import { useState } from "react";
// import bcrypt from "bcryptjs";

// const salt = " sameSalt as login";

// const SignUp = ({ setToken, setIsUser, setUserId }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const hashedPassword = bcrypt.hashSync(password, salt);

//     fetch("https:               .com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, username, password: hashedPassword }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data.id);
//         setUserId(data.id);
//         localStorage.setItem("id", data.id);
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//       })
//       .catch((error) => alert(error));
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleSubmit} className="form">
//         <h1 className="header">TRACK IT</h1>
//         <h2 className="subheader">Sign Up</h2>

//           <input
//             placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="input"
//           />
//           <input
//             placeholder="Username"
//             type="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="input"
//           />
//           <input
//             placeholder="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="input"
//           />

//         <Button className="btn" type="submit">
//           Sign Up
//         </Button>
//         <div style={{ fontFamily: "Raleway", fontSize: "2vh" }}>
//           Already a user?
//         </div>
//         <Button className="btnLogin" onClick={() => setIsUser(true)}>
//           Login Now
//         </Button>
//       </form>
//     </div>
//   );
// }
// export default SignUp;
