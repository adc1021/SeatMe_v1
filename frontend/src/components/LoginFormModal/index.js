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
          <SigninForm />
        </Modal>
      )}
    </>
  )
}

export default LoginFormModal;
