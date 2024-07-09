import { Button, Typography } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons';
import styles from './InfoModalContent.module.scss'
import React from 'react'

export default function InfoModalContent({ onClick, title }) {
    const { Title } = Typography;

    return (
        <div className={styles.content}>
            <InfoCircleOutlined className={styles.infoIcon}/>
            <Title level={4}>{title}</Title>
            <Button type="primary" className={styles.btn} onClick={onClick}>
                BAĞLA
            </Button>
        </div>
    )
}
