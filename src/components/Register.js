import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useRegister } from '../hooks/useAuth'

const registerConstants =  {
  NAME: 'name',
  PASSWORD: 'password',
  USER_NAME: 'user name'

}

const Register = (props) => {

    const [nameError, setNameError] = useState(false)
    const [userNameError, setUserNameError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassord] = useState('')

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


    const handleSubmit = (e) => {
      const nameError = false;
      const userError = false;
      const passError = false;
      if(nameError)
        setNameError('invalid user')
      if(userError)
        setUserNameError('invalid user')
      else if(passError)
        setPasswordError('password does not match')
      else
        registerApiTrigger(true, name, userName, password);
        // console.log('name, userName, password', name, userName, password)
      clearTextFields();

    }


    const handleOnchange = (e) => {
      if(e.target.name===registerConstants.NAME)
        setName(e.target.value);
      if(e.target.name===registerConstants.PASSWORD)
        setPassord(e.target.value);
      if(e.target.name===registerConstants.USER_NAME)
        setUserName(e.target.value);
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
            name={registerConstants.NAME}
            id="outlined-error"
            label="Name"
            onChange={handleOnchange}
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
            name={registerConstants.USER_NAME}
            id="outlined-error"
            onChange={handleOnchange}
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
            onChange={handleOnchange}
            label="Password"
            name={registerConstants.PASSWORD}
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
        <Button onClick={handleSubmit} variant="contained">Register</Button>
        <p>Already Registered? <Link to="/login">Login Here</Link> </p>
      </div>
    );
}

export default Register;