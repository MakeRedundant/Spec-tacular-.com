import React from "react";
import * as S from "./styles";
import BackgroundPaper from "../../components/BackgroundPaper";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import colors from "../../styles/colors";
import IconContainer from "../../components/IconContainer";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import PrescriptionTable from "../../components/PrescriptionTable";

import { Link } from "react-router-dom";

function Prescription() {
  return (
    <BackgroundPaper>
      <Header />
      <Container
        flex
        direction="column"
        alignItems="center"
        margin="50px auto 100px auto"
        width="50%"
        height="calc(100% - 51px)"
        border={`1px solid ${colors.primary}`}
      >
        <Container
          flex
          alignItems="center"
          margin="50px 0 auto 50px"
          width="calc(100% - 100px)"
        >
          <IconContainer
            externalIcon="settings_account_box"
            size={50}
            margin="0 15px 0 0"
            color={colors.primary}
            isHoverable={false}
          />
          <Text
            text="Prescription"
            size="40px"
            weight={600}
            align="center"
            color={colors.primary}
          />
        </Container>

        <Container
          flex
          margin="25px auto"
          width="calc(100% - 100px)"
          direction="column"
        >
          <Container flex>
            <S.CheckboxControl width="50%">
              <Text
                text="Material:"
                size="15px"
                color={colors.primary}
              />
              <Select
                margin="0 0 0 10px"
                width="50%"
                height="25px"
                border={`1px solid ${colors.primary}`}
              >
                <option value="polycarbonate">Polycarbonate</option>
                <option value="resin">Resin</option>
                <option value="acrylic">Acrylic</option>
                <option value="glass">Glass</option>
                <option value="trivex">Trivex</option>
              </Select>
            </S.CheckboxControl>

            <S.CheckboxControl width="50%">
              <Text
                text="Type of Lenses:"
                size="15px"
                color={colors.primary}
              />
              <Select
                margin="0 0 0 10px"
                width="50%"
                height="25px"
                border={`1px solid ${colors.primary}`}
              >
                <option>Single</option>
                <option>Bifocal</option>
                <option>Multifocal</option>
                <option>Progressive</option>
                <option>Prism</option>
              </Select>
            </S.CheckboxControl>
          </Container>

          <Container flex margin="20px 0">
            <S.CheckboxControl width="25%">
              <Input
                id="anti_reflection"
                type="checkbox"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                outlined="none"
              />
              <Text text="Anti-reflective:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
            <S.CheckboxControl width="25%">
              <Input
                id="anti_risk"
                type="checkbox"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                outlined="none"
              />
              <Text text="Anti-scratch:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
            <S.CheckboxControl width="25%">
              <Input
                id="UV_filter"
                type="checkbox"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                outlined="none"
              />
              <Text text="UV Filter:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
            <S.CheckboxControl width="25%">
              <Input
                id="blue_light"
                outlined="none"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                type="checkbox"
              />
              <Text text="Blue Light:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
          </Container>
          <Container flex>
            <S.CheckboxControl width="25%">
              <Input
                id="anti_fog"
                type="checkbox"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                outlined="none"
              />
              <Text text="Anti-fog:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
            <S.CheckboxControl width="25%">
              <Input
                id="photossensitive"
                type="checkbox"
                margin="0 10px"
                width="20px"
                height="25px"
                border="none"
                borderBottom={`1px solid ${colors.primary}`}
                outlined="none"
              />
              <Text text="Photochromic/Transition:" size="15px" color={colors.primary} />
            </S.CheckboxControl>
          </Container>

          <PrescriptionTable />
          <Link to="/main">
          <Button
            text="Check glasses"
            width="100%"
            height="50px"
            margin="50px auto 16px auto"
            borderRadius="20px"
            fontSize="20px"
            color="#FFF"
            backgroundColor={colors.success}
          />
          </Link>
        </Container>
      </Container>
      <Footer />
    </BackgroundPaper>
  );
}

export default Prescription;
