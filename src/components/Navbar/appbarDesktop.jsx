import {
  Box,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {
  // AppbarActionIcons,
  AppbarContainer,
  AppbarHeader,
  MyList,
} from "../../styles/navbar";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Menu, MenuItem } from '@mui/material';

import Actions from "./actions";
import { useUIContext } from "../Context/ui";

import { Link } from "react-router-dom";

import React from "react";

export default function AppbarDesktop({ matches }) {
  const { setShowSearchBox } = useUIContext();

  return (
    <AppbarContainer>
      <AppbarHeader variant="h4">Spec-tacular</AppbarHeader>
      <MyList type="row">
        <Link to="/welcome" style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}>
          <ListItemText primary="Home" />
        </Link>
        <Link
          to="/categories"
          style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}
        >
          <ListItemText primary="Categories" />
        </Link>
        <Link
          to="/products"
          style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}
        >
          <ListItemText primary="Products" />
        </Link>
        <Link to="/about" style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}>
          <ListItemText primary="About us" />
        </Link>
        <Link
          to="/prescription"
          style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}
        >
          <ListItemText primary="Prescription" />
        </Link>
        <Link
          to="/contact"
          style={{ textDecoration: "none", color: "inherit", paddingRight: "40px" }}
        >
          <ListItemText primary="Contact us" />
        </Link>
        <ListItemButton onClick={() => setShowSearchBox(true)}>
        </ListItemButton>
      </MyList>
      <Actions matches={matches} />
    </AppbarContainer>
  );
}
