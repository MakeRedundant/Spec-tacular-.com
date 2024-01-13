import React from "react"; 
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

import { UIProvider } from "../../components/Context/ui";


export default function Appbar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <UIProvider>
      <>{matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}</>
    </UIProvider>
  );
}