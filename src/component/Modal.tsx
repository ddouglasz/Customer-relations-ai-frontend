import React, { FC, useRef } from 'react';
import styled from 'styled-components';

const StyledModalCover = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
`;

interface ModalProps {
    title: string;
    onClose: () => void;
    open: boolean;
}

interface ModalTextEvent extends EventTarget {
    id: string
}

interface ModalMouseEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {
    target: ModalTextEvent
}

export const Modal: FC<ModalProps> = ({ children, title, onClose, open }) => {
    if (!open) {
        return null;
    }

    const handleOutsideClick = (e: ModalMouseEvent) => {
        if (e.target.id === "modal-id") {
            onClose()
        }
    };
    

    return (
        <StyledModalCover data-testid="modal-container" className="" id="modal-id" onClick={(e: ModalMouseEvent) => handleOutsideClick(e)}>
            <div className="">
                <header className="">
                    <h2 className="">{title}</h2>
                    <button data-testid="close-modal-button" onClick={() => onClose()}>✖️</button>
                </header>
                <div className="">{children}</div>
            </div>
        </StyledModalCover>
    );
};
