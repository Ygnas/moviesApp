import React, { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const LoginPage = (props) => {
  const { authenticate } = useContext(AuthContext);

  const handleSubmit = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate('user1', password);
  };


  return (
    <>
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Typography component="h5" color={"red"}>
          Just press login button
        </Typography>
        <Box noValidate>
          <TextField
            disabled
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
          />
          <TextField
            disabled
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
      </Container>
    </>
  );
};
export default LoginPage;