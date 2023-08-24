import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import styles from '../../styles/modal.module.css'

export default function CustomModal({children, openModal, toggle, title }) {
    return (
        <Modal className={styles.main} isOpen={openModal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
        </Modal>
    )
}
