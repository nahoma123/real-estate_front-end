import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
export const ModalContext = createContext({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
});
export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };
    return (_jsx(ModalContext.Provider, { value: { isOpen, openModal, closeModal }, children: children }));
};
