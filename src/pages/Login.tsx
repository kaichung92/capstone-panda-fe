import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Box,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface UserCredentialLogin {
  username: string;
  password: string;
}

interface Props {
  isLogin: boolean;
}

const Login: React.FC<Props> = ({ isLogin }) => {
  const navigate: (path: string) => void = useNavigate();

  useEffect(() => {
    if (isLogin === true) {
      navigate("/");
    }
  }, []);
  const initalUser: UserCredentialLogin = {
    username: "",
    password: "",
  };

  const [existingUser, setExistingUser] =
    useState<UserCredentialLogin>(initalUser);
  // if user does not exist in database
  const [errorMsg, setErrorMsg] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExistingUser({
      ...existingUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    // check user in database
    // if username does not exist, password is wrong, set errormsg
    // if successful, then set session cookie
  };
  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          welcome to foodpanda!
        </Typography>
        <Box component="form" noValidate sx={{ mt: 10, mr: 3, ml: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleLogin}
            sx={{
              ":hover": {
                backgroundColor: "#E21B70",
              },
              backgroundColor: "#FF2B85",
              mt: 3,
              mb: 2,
            }}
          >
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/register" variant="body2">
                No account yet? Register here
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
    </>
  );
};

export default Login;
