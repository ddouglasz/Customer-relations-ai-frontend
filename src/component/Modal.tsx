import React, { FC, useRef } from 'react';
import '../styles/modal.css'

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
        <div data-testid="modal-container" className="" id="modal-id" onClick={(e: ModalMouseEvent) => handleOutsideClick(e)}>
            <div className="">
                <header className="">
                    <h2 className="">{title}</h2>
                    <button data-testid="close-modal-button" onClick={() => onClose()}>✖️</button>
                </header>
                <div className="">{children}</div>
            </div>
        </div>
    );
};
