import { Button, Col, Flex, Form, Modal, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import './ComplaintModal.scss';
import CustomModal from '../Modal';
export default function ComplaintModal({ isModalOpen, setIsModalOpen, handleOk }) {
    const { Title } = Typography;
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <><Modal
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            okButtonProps={{ style: { display: "none" } }}
            cancelButtonProps={{ style: { display: "none" } }}
            closeIcon={false}
            className='complaintmodal'

        >
            <Title className='modal-title' level={4}>ŞİKAYƏTİN LƏĞV EDİLMƏSİ</Title>
            <Form className='modal-form'>
                <Title level={5}>Şikayəti ləğv etmək səbəbiniz nədir?</Title>
                <TextArea className="textarea" rows={4} />
                <Flex gap={"middle"} >
                    <Button onClick={handleCancel} className="cancel" type='primary' ghost>İMTİNA ET</Button>
                    <Button onClick={ showModal} className="ok" type='primary'>ŞİKAYƏTİ LƏĞV ET</Button>
                </Flex>
            </Form>
        </Modal>

        </>)
}
