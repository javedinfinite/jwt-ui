import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home(props) {
  //check if already loggedIN, if yes redirect to dashboard
  return (
    <div>
      <Button variant="contained" component={Link} to="login">
        Sign In
      </Button>{" "}
      {" - "}
      <Button variant="contained" component={Link} to="register">
        Sign Up
      </Button>
    </div>
  );
}

export default Home;
