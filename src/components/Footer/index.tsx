import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";

import { Box } from "@mui/system";
import { Colors } from "../../styles/theme/index";
import { SubscribeTf, FooterTitle } from "../../styles/footer/index";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' }
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}


// function Footer() {
//     return (
//       <S.Footer>
//         <Container
//           flex
//           margin="50px auto"
//           width="calc(100% - 500px)"
//           justifyContent="space-evenly"
//           alignItems="center"
//         >
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://github.com/MakeRedundant"
//           >
//             <IconContainer
//               className="fa fa-github"
//               size={35}
//               color={colors.primary}
//             />
//           </a>
  
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="www.linkedin.com/in/brian-trang-developer" // LinkedIn link
//           >
//             <IconContainer
//               className="fa fa-linkedin"
//               size={35}
//               color={colors.primary}
//             />
//           </a>
  
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://www.facebook.com/your-facebook-profile" // Facebook link
//           >
//             <IconContainer
//               className="fa fa-facebook"
//               size={35}
//               color={colors.primary}
//             />
//           </a>
  
//           <a
//             target="_blank"
//             rel="noreferrer"
//             href="https://drive.google.com/drive/folders/178aJT71OVJzvM4JJm0IqHat_YxyOVq7O"
//           >
//             <IconContainer
//               className="fa fa-file-pdf-o"
//               size={35}
//               color={colors.primary}
//             />
//           </a>
//         </Container>
//       </S.Footer>
//     );
//   }
  
//   export default Footer;
  