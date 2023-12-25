import { Button } from "@mui/joy";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

const SignIn = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      minHeight={"82vh"}
      maxWidth={850}
    >
      {/* Form */}
      <Paper elevation={4}>
        <Box px={2} py={5} minWidth={315} minHeight={400}>
          <Typography textAlign={"center"} variant="h3" fontWeight={600}>
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
        </Box>
      </Paper>
      {/* Text */}
      <Paper elevation={3}>
        <Box
          minWidth={315}
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
            <Button sx={{bgcolor:"#95d5b2",borderRadius:20}} variant="soft">No account yet? SignUp.</Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignIn;
