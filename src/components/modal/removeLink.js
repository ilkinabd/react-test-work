import Modal from "react-modal";
import React from "react";

Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding:0,
    },
};

export default function RemoveLinkModal(props) {
    return (
        <Modal
            isOpen={props.isOpen}
            onRequestClose={props.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={`modal`}>
                <h2 className={`modal-title`}>Remove link</h2>
                <button className={`modal-close`} onClick={props.closeModal}>x</button>
                <div className={`modal-content`}>
                    <p style={{textAlign: 'center'}}>Do you want delete link ?</p>
                </div>
                <div className={`modal-buttons`}>
                    <button onClick={() => props.submitModal(props.current)}>OK</button>
                    <button onClick={props.closeModal} style={{marginLeft: '8px'}}>Cancel</button>
                </div>
            </div>
        </Modal>
    )
}