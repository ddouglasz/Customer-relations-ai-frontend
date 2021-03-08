import React, { FC } from 'react';
import styled from 'styled-components';

interface ChatCardProps {
    text: string
    isBotResponse: boolean
}

type ContainerType = {
    isBotResponse: boolean
}

const StyledChatCard = styled.div<ContainerType>`
    background-color: ${(props: ContainerType) => props.isBotResponse === true ? '#20639B' : '#00308F'};
    border-radius: ${(props: ContainerType) => props.isBotResponse === true ? '15px 15px 15px 0' : '15px 15px 0px 15px'};
    margin: ${(props: ContainerType) => props.isBotResponse === true ? '20px 30px 20px 0' : '20px 0 20px 30px'};
    padding: 10px 10px;
    font-size: 16px;
    opacity: 0.5;
`;

export const ChatCard: FC<ChatCardProps> = ({ text, isBotResponse }) => {
    return (
     <StyledChatCard isBotResponse={isBotResponse}>{text}</StyledChatCard>
 );
};
