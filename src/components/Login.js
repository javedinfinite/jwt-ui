import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Login = (props) => {

    const [userNameError, setUserNameError] = ['']
    const [passwordError, setPasswordError] = ['']
    return (
      <div>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
        <div>
            <TextField
            error={false}
            id="outlined-error"
            label="UserName"
            placeholder="Enter User Name"
            helperText={userNameError}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
            error={false}
            id="outlined-error-helper-text"
            label="Password"
            placeholder="Enter Password"
            helperText={passwordError}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
        </div>
        </Box>
        <Button variant="contained">Login</Button>
        <p>New User? <Link to="/register">Register Here</Link> </p>
        
      </div>
    );
}

export default Login;