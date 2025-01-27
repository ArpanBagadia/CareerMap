// // import React from 'react';
// // import { Box, Button, TextField, Typography, Container } from '@mui/material';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const handleLogin = (event) => {
// //     event.preventDefault();
// //     navigate('/');
// //   };

// //   return (
// //     <Container maxWidth="xs">
// //       <Box
// //         sx={{
// //           marginTop: 8,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center',
// //         }}
// //       >
// //         <Typography component="h1" variant="h5" color="rgb(22 163 74)">
// //           <b>CareerMap Login</b>
// //         </Typography>
// //         <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             id="email"
// //             label="Email Address"
// //             name="email"
// //             autoComplete="email"
// //             autoFocus
// //           />
// //           <TextField
// //             margin="normal"
// //             required
// //             fullWidth
// //             name="password"
// //             label="Password"
// //             type="password"
// //             id="password"
// //             autoComplete="current-password"
// //           />
// //           <Button
// //             type="submit"
// //             fullWidth
// //             variant="contained"
// //             sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(22 163 74)', color: 'white' }}
// //           >
// //             Login
// //           </Button>
// //         </Box>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default Login;

// import React, { useState } from "react";
// import { Disclosure } from "@headlessui/react";
// import CompanyLogo from "../../image/white_on_trans1.png";
// import {
//   Box,
//   TextField,
//   Button,
//   Paper,
//   Typography,
//   Divider,
// } from "@mui/material";
// import "./UserLogin.css";

// export default function Login() {
//   const [data, setData] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     console.log(data);
//     setData({ email: "", password: "" });
//   };

//   return (
//     <div className="container">
//       {/* Navigation Bar */}
//       <Disclosure as="nav" className="navbar">
//         <div className="navbar-content">
//           <div className="navbar-brand">
//             <img src={CompanyLogo} alt="Company Logo" className="navbar-logo" />
//             <span className="navbar-title">Welcome to CareerMap</span>
//           </div>
//         </div>
//       </Disclosure>

//       {/* Login Form */}
//       <div className="form-section">
//         <Paper elevation={6} className="form-container">
//           <Typography variant="h4" className="form-header" style={{ fontWeight: "bold" }}>
//             Login to Your Account
//           </Typography>
//           <Divider sx={{ marginY: 2 }} />
//           <Box
//             component="form"
//             className="form-box"
//             noValidate
//             autoComplete="off"
//           >
//             {/* Email Field */}
//             <TextField
//               label="Email Address"
//               type="email"
//               name="email"
//               value={data.email}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               className="form-input"
//             />

//             {/* Password Field */}
//             <TextField
//               label="Password"
//               type="password"
//               name="password"
//               value={data.password}
//               onChange={handleChange}
//               variant="outlined"
//               fullWidth
//               className="form-input"
//             />

//             {/* Login Button */}
//             <Button
//               onClick={handleSubmit}
//               variant="contained"
//               style={{ backgroundColor: "#060270" }}
//               fullWidth
//             >
//               Login
//             </Button>
//           </Box>

//           {/* Signup */}
//           <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#060270" }}>
//             Not a member?{' '}
//             <a
//               href="/register" // Adjust the path as per your app's route
//               style={{
//                 color: "#060270",
//                 textDecoration: "underline",
//                 fontWeight: "bold",
//               }}
//             >
//               register
//             </a>
//           </div>
//         </Paper>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import CompanyLogo from "../../image/white_on_trans1.png"
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import "./UserLogin.css";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data);
    setData({ email: "", password: "" });
  };

  return (
    <div className="container">
      {/* Navigation Bar */}
      <Disclosure as="nav" className="navbar1">
        <div className="navbar-content">
          <div className="navbar-brand">
            <img src={CompanyLogo} alt="Company Logo" className="navbar-logo" />
            <span className="navbar-title">CareerMap</span>
          </div>
        </div>
      </Disclosure>

      {/* Login Form */}
      <div className="form-section">
        <Paper elevation={6} className="form-container">
          <Typography variant="h4" className="form-header1" style={{ fontWeight: 'bold' }}>
            Login
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Box
            component="form"
            className="form-box"
            noValidate
            autoComplete="off"
          >
            {/* Email Field */}
            <TextField
              label="Email Address"
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              className="form-input"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#14B8A6",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#14B8A6",
                },
              }}
            />

            <TextField
              label="Password"
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              variant="outlined"
              fullWidth
              className="form-input"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "#14B8A6",
                  },
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "#14B8A6",
                },
              }}
            />

            {/* Login Button */}
            <Button
              onClick={handleSubmit}
              variant="contained"
              sx={{
                color: "white",
                fontWeight: "bold",
                padding: "0.75rem",
                marginTop: "1rem",
                borderRadius: "8px",
                backgroundColor: "#14b8a6",
                "&:hover": {
                  backgroundColor: "#003d3d", // Darker teal on hover
                },
              }}
              fullWidth
            >
              Login
            </Button>
          </Box>

          {/* Forgot Password */}
          <div style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#003d3d" }}>
            Not a member?{' '}
            <a
              href="/register" // Adjust the path as per your app's route
              style={{
                color: "#14B8A6",
                textDecoration: "underline",
                fontWeight: "bold",
              }}
            >
              Register
            </a>
          </div>
        </Paper>
      </div>
    </div>
  );
}
