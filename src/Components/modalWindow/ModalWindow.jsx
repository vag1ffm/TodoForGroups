import React from 'react';
import {Modal} from "react-bootstrap";
import Login from "../login";
import Registration from "../registration";

const ModalWindow = ({showModal, closeModal, action, setAction}) => {

    return (
        <Modal show={showModal} onHide={closeModal} centered>
            {
                (action === 'login') ? <Login/> : <Registration/>
            }
            <Modal.Footer>
                {
                    (action === 'login') ?
                        <button
                            className="btn btn-link"
                            onClick={() => setAction('registration')}
                        >
                            Registration
                        </button> :
                        <button
                            className="btn btn-link"
                            onClick={() => setAction('login')}
                        >
                            Log in
                        </button>
                }
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;