import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useAuth';

const loginConstants =  {
  PASSWORD: 'password',
  USER_NAME: 'user name'

}

const Login = (props) => {

    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')


    const {
      data: loginApiResponse,
      loading: loginApiLoading,
      error: loginApiError,
      trigger: loginApiTrigger,
    } = useLogin();

    const clearTextFields = () => {
      setUserName('')
      setPassword('')
    }

    const handleOnchange = (e) => {
          if(e.target.name===loginConstants.PASSWORD)
            setPassword(e.target.value);
          if(e.target.name===loginConstants.USER_NAME)
            setUserName(e.target.value);
    }
    const handleSubmit = () => {
      const userError = false;
      const passError = false;
      if(userError)
        setUserNameError('invalid user')
      else if(passError)
        setPasswordError('password does not match')
      else
      loginApiTrigger(true, userName, password)
      clearTextFields()

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
            error={false}
            id="outlined-error"
            label="UserName"
            placeholder="Enter User Name"
            helperText={userNameError}
            onChange={(e)=>handleOnchange(e)}
            name={loginConstants.USER_NAME}
            value={userName}
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
            value={password}
            helperText={passwordError}
            name={loginConstants.PASSWORD}
            onChange={(e)=>handleOnchange(e)}
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
        <Button onClick={handleSubmit} variant="contained">Login</Button>
        <p>New User? <Link to="/register">Register Here</Link> </p>
        
      </div>
    );
}

export default Login;