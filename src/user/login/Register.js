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
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    contactNumber: "",
    skills: "",
    fieldOfInterest: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(data);
    setData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      gender: "",
      contactNumber: "",
      skills: "",
      fieldOfInterest: "",
    });
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#14B8A6", // Change border color on focus
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#14B8A6", // Change label color on focus
    },
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
                  sx={textFieldStyles}
                  value={data.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="lastName"
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  required
                  sx={textFieldStyles}
                  value={data.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  required
                  sx={textFieldStyles}
                  value={data.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  fullWidth
                  sx={textFieldStyles}
                  value={data.password}
                  onChange={handleChange}
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
                  sx={textFieldStyles}
                  value={data.dateOfBirth}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="gender"
                  label="Gender"
                  name="gender"
                  required
                  sx={textFieldStyles}
                  value={data.gender}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="contactNumber"
                  label="Contact Number"
                  name="contactNumber"
                  required
                  sx={textFieldStyles}
                  value={data.contactNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  id="skills"
                  label="Skills"
                  name="skills"
                  required
                  sx={textFieldStyles}
                  value={data.skills}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="fieldOfInterest"
                  label="Field of Interest"
                  name="fieldOfInterest"
                  required
                  sx={textFieldStyles}
                  value={data.fieldOfInterest}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
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
              Register
            </Button>
            <div
              style={{
                marginTop: "0.3rem",
                fontSize: "0.9rem",
                color: "#003d3d",
              }}
            >
              Already a member?{" "}
              <a
                href="/login"
                style={{
                  color: "#14B8A6",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                Login
              </a>
            </div>
          </Box>
        </Paper>
      </div>
    </div>
  );
}
