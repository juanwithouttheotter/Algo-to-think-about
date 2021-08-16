import React from 'react';
import Btn from '../Button';
import EmployeeForm from '../EmployeeForm';

function Modal({ modalState, toggleModal }) {
        return (
                <div className={modalState ? 'modal is-active' : 'modal'}>
                        <div className="modal-background" />
                        <div className="modal-content has-background-white p-5">
                                <EmployeeForm operation="update" />
                        </div>
                        <Btn btn="modal-close is-medium" btnAction={toggleModal} aria-label="close" />
                </div>
        );
}

export default Modal;
