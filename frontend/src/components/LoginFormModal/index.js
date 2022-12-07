import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import SigninForm from './SigninForm';
import './LoginFormModal.css'

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="navbar-button" id="sign-in">Sign In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <button onClick={() => setShowModal(false)} className="exit-button"><i class="fa-solid fa-xmark fa-xl"></i></button>
          <SigninForm />
        </Modal>
      )}
    </>
  )
}

export default LoginFormModal;
