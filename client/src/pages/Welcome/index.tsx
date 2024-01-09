import React from "react";
import colors from "../../styles/colors";
import * as S from "./styles";
import Container from "../../components/Container";
import bannerImage from "../../assets/images/image7.png";
import Text from "../../components/Text";
import Button from "../../components/Button";

function Welcome() {
    const text = `Welcome to Spec(tacular) find the latest in glasses,sunglasses, contact lenses and ocular implants`;

    return (
        <Container
            flex
            margin="auto"
            width="100%"
            height="100vh"
            backgroundColor={colors.primary}
        >
            <Container
                flex
                direction="column"
                alignItems="center"
                justifyContent="space-between"
                width="65%"
            >
                <Container margin="auto" height="100px">
                    <Text
                        text="Glasses Store"
                        size="100px"
                        weight={600}
                        color={colors.light}
                        align="center"
                    />
                </Container>

                <Container
                    flex
                    direction="column"
                    margin="auto"
                    width="80%"
                    height="400px"
                >
                    <Text text={text} color={colors.light} size="22px" align="justify" />

                    <Container flex justifyContent="space-evenly" margin="72px auto" width="372px">
                        <Button
                            text="Especificar"
                            color={colors.primary}
                            fontSize="20px"
                            fontWeight={500}
                            width="150px"
                            height="50px"
                            backgroundColor={colors.light}
                            borderRadius="7px"
                            linkReference="/preferences"
                        />
                        <Button
                            text="Prosseguir"
                            color={colors.light}
                            fontSize="20px"
                            fontWeight={500}
                            width="150px"
                            height="50px"
                            backgroundColor="transparent"
                            border={`2px solid ${colors.light}`}
                            borderRadius="7px"
                            linkReference="/main"
                        />
                    </Container>
                </Container>
            </Container>

            <Container flex direction="column" width="35%">
                <S.Banner src={bannerImage} alt="home image" />
            </Container>
        </Container>
    );
}

export default Welcome;
