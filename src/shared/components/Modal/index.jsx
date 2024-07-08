import { Modal } from 'antd';
import React from 'react';

export default function CustomModal({ isModalOpen, setIsModalOpen, children, title, cancelButtonProps, handleOk }) {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal handleOk={handleOk} cancelButtonProps={cancelButtonProps} centered title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            {children}
        </Modal>)
}
