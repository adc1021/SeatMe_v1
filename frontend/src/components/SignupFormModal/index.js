import React, { useState } from 'react';
import { Modal } from '../../context/Modal'
import SignupForm from './SignupForm';
// import './LoginFormModal.css'
// import './Modal.css'

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className="navbar-button" id="sign-up">Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm />
        </Modal>
      )}
    </>
  )
}

export default SignupFormModal;
