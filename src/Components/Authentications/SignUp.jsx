import { Button } from "@mui/joy";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import useAuth from "../../HOOKS/useAuth";
const SignUp = () => {
  const { signUp } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.pass;

    signUp(email, pass)
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
        flexDirection: { xs: "column-reverse", sm: "row-reverse" },
        mx: { xs: 0, sm: 7, md: 25, xl: 50 },
        my: 2,
      }}
      justifyContent={"space-evenly"}
      minHeight={"82vh"}
      maxWidth={600}
    >
      {/* Form */}
      <Paper elevation={4}>
        <Box px={2} py={5} minWidth={310} minHeight={400}>
          <Typography mb={2} textAlign={"center"} variant="h3" fontWeight={600}>
            Signup
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
              Sign up
            </Button>
          </Form>

          <Typography py={2} textAlign={"center"}>
            or SignUp with
          </Typography>
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
          <Typography variant="h6">Hi There!</Typography>
          <Typography py={2} maxWidth={300}>
            Enter Your personal details to open an account with us
          </Typography>
          <Link to="/signIn">
            <Button
              sx={{ bgcolor: "#95d5b2", borderRadius: 20 }}
              variant="soft"
            >
              Already Signed Up? SignIn.
            </Button>
          </Link>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;
