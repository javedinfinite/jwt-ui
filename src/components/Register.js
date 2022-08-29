import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from '../hooks/useAuth'
import { useAuthContext } from '../context/AuthContext';

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
    const [registerButtonDisabled, setRegisterButtonDisabled] = useState(false)

    const clearTextFields = () => {
      setName('');
      setUserName('')
      setPassord('')
    }

    const navigate = useNavigate();
    const {setAuthState} = useAuthContext()

    const {
      data: registerApiResponse,
      loading: registerApiLoading,
      error: registerApiError,
      trigger: registerApiTrigger,
    } = useRegister();

    useEffect(()=>{
      if(registerApiResponse?.data.duplicate===false){
        setAuthState((prevData) => ({
          ...prevData,
          isNewlyRegistered: true
        }));
        navigate('/login');
        console.log('testing registration success...', registerApiResponse)
      }
        
    }, [registerApiResponse])

    useEffect(()=>{
      if(registerApiLoading){
        setRegisterButtonDisabled(true)
      }
      else if(registerApiLoading===false)
        setRegisterButtonDisabled(false)

    }, [registerApiLoading])

    useEffect(() => {
      if (registerApiError) {
        console.log('registerApiError', registerApiError)
        setUserNameError('Registration failed with error')
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }}, [registerApiError])



    const handleSubmit = (e) => {
      setNameError(false)
      setUserNameError(false)
      setPasswordError(false)
      if(name==='' || null)
        setNameError('invalid user')
      if(userName==='' || null)
        setUserNameError('invalid user name')
      if(password==='' || null)
        setPasswordError('password does not match')
      else if(!(nameError || userNameError || passwordError))
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
            helperText={nameError}
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
        <Button onClick={handleSubmit} variant="contained" disabled={registerButtonDisabled}>Register</Button>
        <p>Already Registered? <Link to="/login">Login Here</Link> </p>
      </div>
    );
}

export default Register;