import { Modal } from 'antd';
import React from 'react';

export default function CustomModal({className, isModalOpen, setIsModalOpen, children, title, handleOk }) {
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <Modal
            title={title}
            centered
            open={isModalOpen}
            // handleOk={handleOk}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
            className={className}
        >
            {children}
        </Modal>
    )
}
