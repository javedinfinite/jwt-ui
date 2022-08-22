import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from '../hooks/useAuth';
import { useAuthContext } from '../context/AuthContext';

const loginConstants =  {
  PASSWORD: 'password',
  USER_NAME: 'user name'

}

const Login = (props) => {

    const [userNameError, setUserNameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();


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

    const {setAuthState} = useAuthContext()

    useEffect(() => {
      if (loginApiResponse?.data.user_exists) {
        console.log('loginApiResponse', loginApiResponse.data.user_exists)
        setAuthState((prevData) => ({
          ...prevData,
          isLogIn:  loginApiResponse.data.user_exists,
          jwtKey: loginApiResponse.data.token
        }));
        navigate('/');

      // eslint-disable-next-line react-hooks/exhaustive-deps
      }}, [loginApiResponse])


    useEffect(() => {
      if (loginApiError) {
        console.log('loginApiError', loginApiError)
        setAuthState((prevData) => ({
          ...prevData,
          isLogIn:  loginApiError.authResponse
        }));
        setUserNameError('invalid user')
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }}, [loginApiError])

    const handleOnchange = (e) => {
          if(e.target.name===loginConstants.PASSWORD)
            setPassword(e.target.value);
          if(e.target.name===loginConstants.USER_NAME)
            setUserName(e.target.value);
    }
    const handleSubmit = () => {
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