import { Modal } from 'antd'
import React from 'react'
import styles from './Modal.module.scss'

export default function CustomModal({ isModalOpen, setIsModalOpen }) {
    const handleOk = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-1AMXNpayyZXs-iGtaHXnyiLsbTc9hwFpBwbrXVxvqwx8AA/viewform', '_blank');
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal title="Sorğu" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>İnternet xidmətləri üzrə istehlakçı təcrübəsi sorğusu</p>
        </Modal>)
}
