import React from "react";
import * as S from "./styles";
import products from "../../products/glasses";
import BestSellers from "../../components/BestSellers";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Footer from "../../components/Footer";
import BrandFilter from "../../components/Filter/BrandFilter";
import ColorFilter from "../../components/Filter/ColorFilter";
import { IGlasses } from "../../models/IGlasses";
import BackgroundPaper from "../../components/BackgroundPaper";

/*MUI styles */
import { Box, Button, Container, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function Eyeglasses() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BackgroundPaper>
      <Header />
      <Menu />
      <S.Main>
        <S.Aside>
          <BrandFilter />
          <ColorFilter />
          <BestSellers />
        </S.Aside>
        <S.Section>
          <S.ProductsList>
            <Container>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                justifyContent="center"
                sx={{ margin: `20px 4px 10px 4px` }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                {products.map((product: IGlasses) => (
                  <Grid
                    item
                    key={product.id}
                    xs={2}
                    sm={4}
                    md={4}
                    display="flex"
                    flexDirection={"column"}
                    alignItems="center"
                  >
                    <Card
                      id={product.id}
                      name={product.name}
                      brand={product.brand}
                      category={product.category}
                      image={product.image}
                      price={product.price}
                      size={product.size}
                      color={product.color}
                      description={product.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </S.ProductsList>
        </S.Section>
      </S.Main>
      <Footer />
    </BackgroundPaper>
  );
}

export default Eyeglasses;
