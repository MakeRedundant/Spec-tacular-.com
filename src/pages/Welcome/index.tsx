import React from "react";
// import colors from "../../styles/colors";
// import * as S from "./styles";
// import Container from "../../components/Container";
// import bannerImage from "../../assets/images/image7.png";
// import Text from "../../components/Text";
// import Button from "../../components/Button";
import { Link as RouterLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/*MUI styles */
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Spec-tacular.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Welcome() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Additional text and buttons */}
            <Typography variant="h3" sx={{ mt: 4 }}>
              Spec-tacular.com
            </Typography>
            <Typography variant="h6" sx={{ mt: 4, alignItems: "center" }}>
              Welcome to Spec-tacular.com the home for the latest in glasses,
              sunglasses, contact lenses and ocular implants
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                mt: 2,
              }}
            >
              <RouterLink to="/prescription" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="primary" sx={{ mt: 1 }}>
                  I have a prescription
                </Button>
              </RouterLink>
              <RouterLink to="/main" style={{ textDecoration: "none" }}>
                <Button variant="outlined" color="secondary" sx={{ mt: 1 }}>
                  Buy Now
                </Button>
              </RouterLink>
            </Box>

            {/* Original Sign in section */}
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

// function Welcome() {
//     const text = `Welcome to Spec-tacular.com the home for the latest in glasses,sunglasses, contact lenses and ocular implants`;

//     return (
//         <Container
//             flex
//             margin="auto"
//             width="100%"
//             height="100vh"
//             backgroundColor={colors.primary}
//         >
//             <Container
//                 flex
//                 direction="column"
//                 alignItems="center"
//                 justifyContent="space-between"
//                 width="65%"
//             >
//                 <Container margin="auto" height="100px">
//                     <Text
//                         text="Glasses Store"
//                         size="100px"
//                         weight={600}
//                         color={colors.light}
//                         align="center"
//                     />
//                 </Container>

//                 <Container
//                     flex
//                     direction="column"
//                     margin="auto"
//                     width="80%"
//                     height="400px"
//                 >
//                     <Text text={text} color={colors.light} size="22px" align="justify" />

//                     <Container flex justifyContent="space-evenly" margin="72px auto" width="372px">
//                         <Button
//                             text="Especificar"
//                             color={colors.primary}
//                             fontSize="20px"
//                             fontWeight={500}
//                             width="150px"
//                             height="50px"
//                             backgroundColor={colors.light}
//                             borderRadius="7px"
//                             linkReference="/preferences"
//                         />
//                         <Button
//                             text="Prosseguir"
//                             color={colors.light}
//                             fontSize="20px"
//                             fontWeight={500}
//                             width="150px"
//                             height="50px"
//                             backgroundColor="transparent"
//                             border={`2px solid ${colors.light}`}
//                             borderRadius="7px"
//                             linkReference="/main"
//                         />
//                     </Container>
//                 </Container>
//             </Container>

//             <Container flex direction="column" width="35%">
//                 <S.Banner src={bannerImage} alt="home image" />
//             </Container>
//         </Container>
//     );
// }

// export default Welcome;
