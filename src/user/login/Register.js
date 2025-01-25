// import React from 'react';
// import { Box, Button, TextField, Typography, Container, Grid } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const navigate = useNavigate();

//   const handleRegister = (event) => {
//     event.preventDefault();
//     navigate('/'); 
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5" color="rgb(22 163 74)">
//           <b>CareerMap Register</b>
//         </Typography>
//         <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 autoComplete="fname"
//                 name="firstName"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 color="black"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 required
//                 fullWidth
//                 id="lastName"
//                 label="Last Name"
//                 name="lastName"
//                 autoComplete="lname"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="new-password"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="dateOfBirth"
//                 label="Date of Birth"
//                 name="dateOfBirth"
//                 type="date"
//                 InputLabelProps={{ shrink: true }}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="gender"
//                 label="Gender"
//                 name="gender"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="contactNumber"
//                 label="Contact Number"
//                 name="contactNumber"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="educationalQualification"
//                 label="Educational Qualification"
//                 name="educationalQualification"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="fieldOfInterest"
//                 label="Field of Interest"
//                 name="fieldOfInterest"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 required
//                 fullWidth
//                 id="skills"
//                 label="Skills"
//                 name="skills"
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2, backgroundColor: 'rgb(22 163 74)', color: 'white' }}
//           >
//             Register
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Grid } from "@mui/material";
import CompanyLogo from "../../image/white_on_trans1.png";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import "./UserLogin.css";

export default function Register() {
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
            <span className="navbar-title">User Register</span>
          </div>
        </div>
      </Disclosure>

      {/* Registration Form */}
      <div className="form-section">
        <Paper elevation={6} className="form-container">
          <Typography
            variant="h5"
            className="form-header1"
            style={{ fontWeight: "bold" }}
          >
            Register
          </Typography>
          <Divider sx={{ marginY: 1 }} />
          <Box component="form" className="form-box" noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="firstName"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="dateOfBirth"
                  label="Date of Birth"
                  name="dateOfBirth"
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  required
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="skills"
                  label="Skills"
                  name="skills"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="fieldOfInterest"
                  label="Field of Interest"
                  name="fieldOfInterest"
                  required
                />
              </Grid>
            </Grid>
            <Button
              onClick={handleSubmit}
              variant="contained"
              className="form-button1"
              fullWidth
            >
              Register
            </Button>
            <Typography className="forgot-password1">
              Already a member?{" "}
              <a
                href="/login"
                style={{ color: "#14B8A6", textDecoration: "underline" }}
              >
                Login
              </a>
            </Typography>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
