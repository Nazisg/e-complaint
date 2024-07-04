import { PlusOutlined } from '@ant-design/icons';
import { Col, Flex, Form, Input, Row, Select, Typography, Upload } from 'antd';
import React from 'react';
import styles from './CreateComplaint.module.scss';

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function CreateComplaint() {
    const handleChange = (value) => {
        console.log(value);
    }
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
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}
            >
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    return (
        <>
            <div className={styles.createComplaint}>
                <Flex justify='center' className={styles.header}>
                    <Title level={2}>Şikayət məlumatları</Title>
                </Flex>
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
                                    },
                                ]}
                            >
                                <Input
                                    size='large'
                                    placeholder="Abunəçi kodunu daxil edin" />
                            </Form.Item>
                            <Form.Item
                                label="Şikayət mətni (Qalan simvol sayı: 1000)"
                                name="text"
                                rules={[
                                    {
                                        required: true,
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
                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                >
                                    <Input
                                        addonBefore={prefixSelector}
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                </Form.Item></Col>
                            <Col span={6}>
                                <Form.Item
                                    label="Stasionar telefon"
                                    name="phone"
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
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input
                                    size='large'
                                    placeholder="example@gmail.com" />
                            </Form.Item>
                            </Col>
                        </Row>

                    </div>
                </Form>
            </div>
        </>
    )
}
