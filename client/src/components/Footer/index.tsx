import React from "react";
import * as S from "./styles";
import colors from "../../styles/colors";
import Text from "../Text";
import IconContainer from "../IconContainer";
import Container from "../Container";

function Footer() {
    return (
      <S.Footer>
        <Container
          flex
          margin="50px auto"
          width="calc(100% - 500px)"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/MakeRedundant"
          >
            <IconContainer
              className="fa fa-github"
              size={35}
              color={colors.primary}
            />
          </a>
  
          <a
            target="_blank"
            rel="noreferrer"
            href="www.linkedin.com/in/brian-trang-developer" // LinkedIn link
          >
            <IconContainer
              className="fa fa-linkedin"
              size={35}
              color={colors.primary}
            />
          </a>
  
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/your-facebook-profile" // Facebook link
          >
            <IconContainer
              className="fa fa-facebook"
              size={35}
              color={colors.primary}
            />
          </a>
  
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/drive/folders/178aJT71OVJzvM4JJm0IqHat_YxyOVq7O"
          >
            <IconContainer
              className="fa fa-file-pdf-o"
              size={35}
              color={colors.primary}
            />
          </a>
        </Container>
      </S.Footer>
    );
  }
  
  export default Footer;
  