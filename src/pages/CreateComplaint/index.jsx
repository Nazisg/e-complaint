import CustomModal from '@/shared/components/Modal';
import CustomTitle from '@/shared/components/Title';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Flex, Form, Input, InputNumber, Row, Select, Typography, Upload } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateComplaint.module.scss';

export default function CreateComplaint() {
    const { Title, Text } = Typography;
    const { TextArea } = Input;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleChange = (value) => {
        console.log(value);
    }

    const handleOk = () => {
        navigate('/');
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const options = [
        {
            value: 'jack',
            label: 'Jack',
        },
        {
            value: 'lucy',
            label: 'Lucy',
        }
    ]
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const prefixSelector = (
        <Form.Item size='large' name="prefix" noStyle>
            <Select defaultValue='50'
                style={{
                    width: 70,
                }}
            >
                <Option value="50">050</Option>
                <Option value="51">051</Option>
                <Option value="55">055</Option>
                <Option value="70">070</Option>
                <Option value="77">077</Option>
                <Option value="10">010</Option>
                <Option value="99">099</Option>
            </Select>
        </Form.Item>
    );
    return (
        <>
            <div className={styles.createComplaint}>
                <CustomTitle header={"ŞİKAYƏT MƏLUMATLARI"} />
                <Form
                    name="layout-multiple-vertical"
                    layout="vertical"
                    className={styles.form}
                >
                    <Flex gap="large" align='stretch' className={styles.personalBlank}>
                        <div>
                            <Form.Item
                                label="Şikayət etdiyiniz fəaliyyət sahəsi"
                                name="branch"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Fəaliyyət sahəsi"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Şikayətçi olduğunuz şirkət"
                                name="company"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Şikayətçi olduğunuz şirkəti seçin"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Şikayətin xarakteristikası"
                                name="characteristic"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Şikayətin xarakteristikası"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item>
                            <Form.Item
                                label="Şikayətin mövzusu"
                                name="subject"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Şikayətin mövzusunu seçin"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item>
                        </div>
                        <div>
                            <Form.Item
                                label="Abunəçi kodu"
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Input
                                    size='large'
                                    placeholder="Abunəçi kodunu daxil edin" />
                            </Form.Item>
                            <Form.Item
                                label="Şikayət mətni"
                                name="text"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}>
                                <TextArea className={styles.textarea} rows={4} onResize="false" placeholder='Maksimum 1000 simvol' />
                            </Form.Item>
                        </div>
                        <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                            <Upload className={styles.upload} action="/upload.do" listType="picture-card">
                                <button
                                    type="button"
                                >
                                    <PlusOutlined size={100} />
                                    <Flex>
                                        <Row>
                                            <Col>
                                                <Title level={3}>Fayl əlavə et</Title>
                                                <Text type="secondary">Faylları buraya əlavə edin. Faylın ölçüsü maksimum 10 MB həcmində, png, txt, jpeg, jpg, pdf formatında fayl əlavə edə bilərsiniz.</Text>
                                            </Col>
                                        </Row>
                                    </Flex>
                                </button>
                            </Upload>
                        </Form.Item>
                    </Flex>


                    <div gap="large" justify='stretch' className={styles.personalInfo}>
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <Form.Item
                                    label="Şəhər"
                                    name="city"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                >
                                    <Select
                                        size='large'
                                        placeholder="Şəhəri seçin"
                                        onChange={handleChange}
                                        options={options}
                                    />
                                </Form.Item></Col>
                            <Col span={6}>  <Form.Item
                                label="Rayon"
                                name="district"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Rayonu seçin"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item></Col>
                            <Col span={6}>    <Form.Item
                                label="Küçə / Kənd"
                                name="street&village"
                                rules={[
                                    {
                                        required: true,
                                        message: '',
                                    },
                                ]}
                            >
                                <Select
                                    size='large'
                                    placeholder="Küçəni / Kəndi seçin"
                                    onChange={handleChange}
                                    options={options}
                                />
                            </Form.Item></Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Yeni küçə / kənd">
                                    <Form.Item
                                        name="new-street&village"

                                    >
                                        <Input
                                            size='large'
                                            placeholder="Yeni küçə / kənd əlavə edin" />
                                    </Form.Item>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]}>
                            <Col span={6}>
                                <Flex gap="large" align='center'>
                                    <Form.Item
                                        label="Bina / Ev"
                                        name="house"
                                        rules={[
                                            {
                                                required: true,
                                                message: '',
                                            },
                                        ]}
                                    >
                                        <InputNumber size='large' min={1} max={100} />
                                    </Form.Item>
                                    <div className={styles.line}></div>
                                    <Form.Item
                                        label="Mənzil"
                                        name="apartment"
                                    >
                                        <InputNumber size='large' min={1} max={100} />
                                    </Form.Item>
                                </Flex>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]}
                                >
                                    <Input
                                        addonBefore={prefixSelector}
                                        size='large'

                                    />
                                </Form.Item></Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Stasionar telefon"
                                    name="stasionar-phone"
                                >
                                    <Input
                                        size='large'
                                        placeholder="Stasionar telefonu daxil edin" />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item
                                    label="E-poçt"
                                    name="email"
                                >
                                    <Input
                                        size='large'
                                        placeholder="example@gmail.com" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </div>
                    <Flex justify='end'>
                        <Button
                            size="large"
                            type="primary"
                            className={styles.btn}
                            onClick={showModal}
                        >
                            Şikayət yarat
                        </Button>
                    </Flex>
                </Form>
                <CustomModal handleOk={handleOk} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} cancelButtonProps={{ style: { display: "none" } }} onCancel={false} title={'YENİ ŞİKAYƏT YARADILDI'}>
                </CustomModal>
            </div>
        </>
    )
}
