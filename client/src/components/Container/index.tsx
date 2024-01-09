import React, { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
    children: ReactNode;
    flex?: boolean;
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    direction?: string;
    alignItems?: string;
    justifyContent?: string;
    backgroundColor?: string;
    border?: string;
    borderBottom?: string;
}

function Container({
    children,
    flex,
    direction,
    alignItems,
    justifyContent,
    margin = "",
    padding = "",
    width = "",
    height = "",
    backgroundColor,
    border,
    borderBottom
}: IProps) {
    return (
        <React.Fragment>
        <S.Container
            flex={flex}
            margin={margin}
            padding={padding}
            width={width}
            height={height}
            direction={direction}
            alignItems={alignItems}
            justifyContent={justifyContent}
            backgroundColor={backgroundColor}
            border={border}
            borderBottom={borderBottom}
        >
            {children}
        </S.Container>
        </React.Fragment>
    );
}

export default Container;
