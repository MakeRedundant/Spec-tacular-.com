// import React from "react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../styles/banner/index.js";

import Bannerimg from "../../assets/images/generic.jpeg";

export default function Banner() {
  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src={Bannerimg} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">
          New Glasses
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton color="primary">Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}
