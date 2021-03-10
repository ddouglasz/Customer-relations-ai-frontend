import React, { FC } from 'react';
import styled from 'styled-components';

const StyledModalCover = styled.div`
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 0; 
    bottom: 0; 
    right: 0; 
    left: 0;
    height: 100vh;
    justify-content: center;
    width: 100%;
    z-index: 1;
    
    .modal-cover {
        position: relative;
        display: flex;
        justify-content: center;
        top: 10%;
        background: #13274F;
        height: 600px;
        width: 500px;
        margin: auto;
        border-radius: 4px;
    }

    .modal {
        margin: auto;
        position: absolute;
        width: 95%;
        height: 100%;
        padding: 10px;
    }

    .btn-close-cover {
        display: flex;
        flex-direction: row-reverse;
    }

    .modal-header {
        text-align: center;
    }

    .chat-cover {
        height: 370px;
        overflow-y: scroll;
    }
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
            <div className="modal-cover">
                <div className="modal">
                    <div className="btn-close-cover">
                        <button data-testid="close-modal-button" onClick={() => onClose()}>✖️</button>
                    </div>
                    <header className="modal-header">
                        <h2 className="">{title}</h2>
                    </header>
                    <div className="">
                    <div className="chat-cover">{children}
                    </div>
                    </div>
                </div>
            </div>

        </StyledModalCover>
    );
};
