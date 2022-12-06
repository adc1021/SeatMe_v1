import React, { useContext, useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef() // = creates a mutable ref objects. Will persist for lifetime of component
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current)
  }, [])

  return (
    <>
     <ModalContext.Provider value={value}>
      {children}
      </ ModalContext.Provider>
      <div ref={modalRef} />
    </>
    )

};


export function Modal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <button><i class="fa-regular fa-x"></i></button>
      <div id="modal-background" onClick={onClose} />
      <div id="modal-content">
        {children}
      </div>
    </div>,
    modalNode
  )
}
