import React from "react";
import {
    Button,
    Modal,
} from "react-bootstrap";

export default function SuccessModal({
    open,
    toggle,
    children,
    onConfirm,
}) {
    const handleClick = () => {
        toggle();
        if (onConfirm) {
            onConfirm();
        }
    };

    return (
        <Modal
            show={open}
            onHide={toggle}
        >
            <Modal.Header closeButton>
                <Modal.Title>Notification</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="success"
                    onClick={handleClick}
                >
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
