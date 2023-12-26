import { Button } from "@mui/joy";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";
import SocialAuth from "./SocialAuth/SocialAuth";

const SignIn = () => {
  const { signIn } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.pass;

    signIn(email, pass)
      .then((res) => {
        console.log(res.user);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      sx={{
        flexDirection: { xs: "column-reverse", sm: "row" },
        mx: { xs: 0, sm: 7, md: 25, xl: 50 },
        my: 2,
        maxWidth:{xs:650,md:400}
      }}
      justifyContent={"space-evenly"}
      minHeight={"82vh"}
      gap={1}
    
    >
      {/* Form */}
      <Paper elevation={4}>
        <Box px={2} py={5} minWidth={310} minHeight={400}>
          <Typography mb={2} textAlign={"center"} variant="h3" fontWeight={600}>
            Signin
          </Typography>
          <Form
            style={{ display: "grid", gap: 15 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              type="email"
              {...register("email")}
              label="Email"
              variant="filled"
            />
            <TextField
              type="password"
              {...register("pass")}
              label="Password"
              variant="filled"
            />
            <Button sx={{ bgcolor: "#40916c" }} variant="solid" type="submit">
              Sign in
            </Button>
          </Form>

          <Typography py={2} textAlign={"center"}>
            or SignIn with
          </Typography>

         <Box mx={7}> <SocialAuth/></Box>
        </Box>
      </Paper>
      {/* Text */}
      <Paper elevation={3}>
        <Box
          minWidth={310}
          minHeight={400}
          bgcolor={"#74c69d"}
          px={2}
          py={14}
          textAlign={"center"}
        >
          {" "}
          <Typography variant="h6">Welcome back!</Typography>
          <Typography py={2} maxWidth={300}>
            We are so happy to have you here. It's great to see you again. We
            hope you had a safe time away
          </Typography>
          <Link to="/signUp">
            <Button
              sx={{ bgcolor: "#95d5b2", borderRadius: 20 }}
              variant="soft"
            >
              No account yet? SignUp.
            </Button>
          </Link>
        </Box>
      </Paper>
     
    </Box>
  );
};

export default SignIn;
