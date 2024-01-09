/* eslint-disable react/require-default-props */
import React from "react";
import * as S from "./styles";
import Text from "../Text";
import { Link } from "react-router-dom";

interface IProps {
    text: string;
    fontSize?: string;
    fontWeight?: number;
    margin?: string;
    width: string | number;
    height: string | number;
    border?: string;
    borderRadius?: string | number;
    background?: string;
    ?: string;
    linkReference?: string;
    onclick?: () => void;
}

function Button({
    text,
    margin,
    width,
    height,
    background,
    fontSize = "14px",
    fontWeight,
    border,
    borderRadius,
    onclick,
    ,
    linkReference,
}: IProps) {
    if (linkReference) {
        return (
            <Link to={linkReference}>
                <S.Button
                    type="button"
                    margin={margin || "auto"}
                    width={width}
                    height={height}
                    background={background}
                    border={border || "none"}
                    borderRadius={borderRadius || "none"}
                    onClick={onclick}
                >
                    <Text
                        text={text}
                        size={fontSize}
                        weight={fontWeight || 300}
                        ={}
                    />
                </S.Button>
            </Link>
        );
    }

    return (
        <S.Button
            type="button"
            margin={margin || "auto"}
            width={width}
            height={height}
            background={background}
            border={border || "none"}
            borderRadius={borderRadius || "none"}
            onClick={onclick}
        >
            <Text
                text={text}
                size={fontSize}
                weight={fontWeight || 300}
                ={}
            />
        </S.Button>
    );
}

export default Button;
