import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { ThemeProvider } from "@mui/material/styles";
import dotenv from "dotenv";
import {
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  FormControl,
  TextField,
  Button,
} from "@mui/material/";

import { Error as ErrorIcon, Login as LoginIcon } from "@mui/icons-material/";
import Title from "@/components/title";
import { darkTheme } from "@/styles/darkTheme";

dotenv.config();

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const router = useRouter();

  const userCredentialsFilled = username.length > 0 && password.length > 0;

  useEffect(() => {
    // Getting the error details from URL
    if (router.query.error) {
      console.log(router.query.error); // Shown below the input field in my example
      setUsername(router.query.username); // To prefill the email after redirect
    }
  }, [router]);

  // För användare från ev backend
  const onHandleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      setUsernameError("Du måste fylla i användarnamn");
    } else {
      setUsernameError("");
    }

    if (!password) {
      setPasswordError("Du måste fylla i lösenord");
    } else {
      setPasswordError("");
    }

    try {
      const result = await signIn("credentials", {
        username,
        password,
        callbackUrl: `${window.location.origin}/admin/dashboard`,
      });

      if (result?.ok) {
        router.push(result.url);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Title />
      <Container
        fixed
        sx={{
          maxWidth: {
            xs: "100%",
            sm: "64%",
            md: "46%",
            lg: "38%",
            xl: "34%",
          },
          padding: 0,
        }}
      >
        <Card
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.90)",
            borderRadius: 5,
            paddingY: 1,
            width: "100%",
            borderRadius: {
              xs: 0,
            },
          }}
          elevation={6}
        >
          <CardHeader
            title="Logga in"
            titleTypographyProps={{
              textAlign: "center",
            }}
          />
          <CardContent>
            <Box
              acceptCharset="UTF-8"
              component="form"
              role="form"
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap={2}
              onSubmit={onHandleSubmit}
            >
              <FormControl>
                <TextField
                  error={usernameError ? true : false}
                  color={username.length > 0 ? "success" : undefined}
                  type="text"
                  label="Användarnamn*"
                  helperText={usernameError ? usernameError : ""}
                  variant="filled"
                  id="username__input"
                  maxLength={24}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <TextField
                  error={passwordError ? true : false}
                  color={password.length > 0 ? "success" : undefined}
                  type="password"
                  label="Lösenord*"
                  helperText={passwordError ? passwordError : ""}
                  variant="filled"
                  placeholder="****"
                  maxLength={32}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button
                className="primary__button"
                startIcon={
                  userCredentialsFilled ? (
                    <LoginIcon />
                  ) : usernameError || passwordError ? (
                    <ErrorIcon />
                  ) : null
                }
                type="submit"
                role="button"
                variant="contained"
                color={
                  userCredentialsFilled
                    ? "success"
                    : usernameError || passwordError
                    ? "error"
                    : "info"
                }
                sx={{
                  marginTop: 1,
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                  borderRadius: "8.5px",
                  width: "45%",
                }}
              >
                Logga in
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}
