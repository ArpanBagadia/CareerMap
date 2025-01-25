// // import React from 'react';


// // import LoginPage, { Email, Password, Submit, Title, Logo, Reset } from '@react-login-page/page2';
// // import defaultBannerImage from '@react-login-page/page2/banner-image';
// // import LoginLogo from 'react-login-page/logo';


// // const styles = { height: 650 };

// // const css = {
// //   '--login-bg': 'linear-gradient(-135deg,#c850c0,#4158d0)',
// //   '--login-color': '#6392F0',
// //   '--login-inner-bg': '#fff',
// //   '--login-input': '#57b846',
// //   '--login-input-bg': '#e6e6e6',
// //   '--login-input-placeholder': '#999999',
// //   '--login-btn': '#fff',
// //   '--login-btn-bg': '#6392F0',
// //   '--login-btn-bg-focus': '#6392F0',
// //   '--login-btn-bg-hover': '#6392F0',
// //   '--login-btn-bg-active': '#6392F0',
// // };


// // const CompanyLogin = () => (
// //   <div style={styles} >
// //     <LoginPage>
// //       <LoginPage.Banner>
// //         <img  src={CompanyLogo} style={{width:"350px",height:"350px"}}/>
// //       </LoginPage.Banner>
// //       <Email name="userUserName" />
// //       <Password placeholder="Password" name="userPassword" />
// //       <Submit>Submit</Submit>
// //       <Title visible={false} />
// //       <Logo style={{
// //         color: "#6392F0",
// //         fontSize: "30px",
// //         fontWeight: "bold"
// //       }}>
// //         Company Login
// //       </Logo>

// //     </LoginPage>
// //   </div>
// // );

// // export default CompanyLogin;

// import React from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
//   MDBInput
// }
// from 'mdb-react-ui-kit';

// function CompanyLogin() {
//   return (
//     <MDBContainer fluid>
//       <MDBRow>

//         <MDBCol sm='6'>

//           <div className='d-flex flex-row ps-5 pt-5'>
//             <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
//             <span className="h1 fw-bold mb-0">Logo</span>
//           </div>

//           <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

//             <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
//             <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>

//             <MDBBtn className="mb-4 px-5 mx-5 w-100" color='info' size='lg'>Login</MDBBtn>
//             <p className="small mb-5 pb-lg-3 ms-5"><a class="text-muted" href="#!">Forgot password?</a></p>
//             <p className='ms-5'>Don't have an account? <a href="#!" class="link-info">Register here</a></p>

//           </div>

//         </MDBCol>

//         <MDBCol sm='6' className='d-none d-sm-block px-0'>
//           <img src={CompanyLogo}
//             alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
//         </MDBCol>

//       </MDBRow>

//     </MDBContainer>
//   );
// }

// export default CompanyLogin;

import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import CompanyLogo from "../image/white_on_trans1.png";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
} from "@mui/material";
import "./CompanyCss.css";

export default function CompanyLogin() {
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
            <span className="navbar-title">Company Login</span>
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
              className="form-button1"
              style={{ backgroundColor: "#14B8A6" }}
              fullWidth
            >
              Login
            </Button>
          </Box>

          {/* Forgot Password */}
          <Typography
            className="forgot-password1"
            style={{ marginTop: "10px" }}
            onClick={() => alert("Forgot Password Clicked")}
          >
            Forgot your password?
          </Typography>
        </Paper>
      </div>
    </div>
  );
}
