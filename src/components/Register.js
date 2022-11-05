import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useAuth";
import { useAuthContext } from "../context/AuthContext";

const registerConstants = {
  NAME: "name",
  PASSWORD: "password",
  USER_NAME: "user name",
};

const Register = (props) => {
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [regError, setRegError] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassord] = useState("");
  const [registerButtonDisabled, setRegisterButtonDisabled] = useState(false);

  const navigate = useNavigate();
  const { setAuthState } = useAuthContext();

  const {
    data: registerApiResponse,
    loading: registerApiLoading,
    error: registerApiError,
    trigger: registerApiTrigger,
  } = useRegister();

  useEffect(() => {
    setAuthState((prevData) => ({
      ...prevData,
      isNewlyRegistered: false,
    }));
  }, []);

  useEffect(() => {
    if (registerApiResponse?.data.duplicate === false) {
      setRegError("");
      setAuthState((prevData) => ({
        ...prevData,
        isNewlyRegistered: true,
      }));
      navigate("/login");
    }
  }, [registerApiResponse]);

  useEffect(() => {
    if (registerApiLoading) {
      setRegisterButtonDisabled(true);
    } else if (registerApiLoading === false) setRegisterButtonDisabled(false);
  }, [registerApiLoading]);

  useEffect(() => {
    if (registerApiError) {
      setRegError(registerApiError.errMessage);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [registerApiError]);

  const isRegFormValid = () => {
    setNameError("");
    setUserNameError("");
    setPasswordError("");
    setRegError("");
    if (name === "") setNameError("invalid user");
    if (userName === "") setUserNameError("invalid user_name");
    if (password === "") setPasswordError("invalid password");
    if (name === "" || userName === "" || password === "") return false;
    else return true;
  };

  const handleSubmit = (e) => {
    if (isRegFormValid()) registerApiTrigger(true, name, userName, password);
    // clearTextFields();
  };

  const handleOnchange = (e) => {
    if (e.target.name === registerConstants.NAME) setName(e.target.value);
    if (e.target.name === registerConstants.PASSWORD)
      setPassord(e.target.value);
    if (e.target.name === registerConstants.USER_NAME)
      setUserName(e.target.value);
  };

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
          {regError !== "" && <p style={{ color: "red" }}>{regError}</p>}
          <TextField
            error={nameError.length > 0}
            name={registerConstants.NAME}
            id="first-name"
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
            error={userNameError.length > 0}
            name={registerConstants.USER_NAME}
            id="user-name"
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
            error={passwordError.length > 0}
            id="password"
            onChange={handleOnchange}
            label="Password"
            type="password"
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
      <Button
        onClick={handleSubmit}
        variant="contained"
        disabled={registerButtonDisabled}
      >
        Register
      </Button>
      <p>
        Already Registered? <Link to="/login">Login Here</Link>{" "}
      </p>
    </div>
  );
};

export default Register;
