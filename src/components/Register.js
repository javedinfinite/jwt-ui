import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useRegister } from '../hooks/useAuth'

const Register = (props) => {

    const [nameError, setNameError] = React.useState(false)
    const [userNameError, setUserNameError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [name, setName] = React.useState('')
    const [userName, setUserName] = React.useState('')
    const [password, setPassord] = React.useState('')

    const clearTextFields = () => {
      setName('');
      setUserName('')
      setPassord('')
    }

    const {
      data: registerApiResponse,
      loading: registerApiLoading,
      error: registerApiError,
      trigger: registerApiTrigger,
    } = useRegister();


    const onSubmit = () => {
      console.log('name, userName, password', name, userName, password);
      registerApiTrigger(true);
      clearTextFields();
    }

    
    const updateName = (e) => {
      setName(e.target.value);
    }
    const updateUserName = (e) => {
      setUserName(e.target.value)
    }
    const updatePassword = (e) => {
      setPassord(e.target.value)
    }
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
            error={nameError}
            id="outlined-error"
            label="Name"
            onChange={updateName}
            placeholder="Enter First Name"
            helperText={userNameError}
            value={name}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
            error={userNameError}
            id="outlined-error"
            onChange={updateUserName}
            label="UserName"
            value={userName}
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
            error={passwordError}
            id="outlined-error-helper-text"
            onChange={updatePassword}
            label="Password"
            value={password}
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
        <Button onClick={onSubmit} variant="contained">Register</Button>
        <p>Already Registered? <Link to="/login">Login Here</Link> </p>
      </div>
    );
}

export default Register;