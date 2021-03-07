import React, { FC } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
    padding: 10px;
    border: none;
    cursor: pointer;
`;

interface ButtonProps {
    onclick: () => void
    classes: string
    title: string
}

export const Button: FC<ButtonProps> = ({ title, classes, onclick }) => {

    return (
        <StyledButton onClick={onclick} className={classes} >
            {title}
        </StyledButton>
    );
};
