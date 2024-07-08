import { Flex, Typography } from 'antd';
import React from 'react';
import styles from './Title.module.scss';


export default function CustomTitle({ header }) {
    const { Title } = Typography;

    return (
        <Flex justify='center' className={styles.header}>
            <Title level={3}>{header}</Title>
        </Flex>
    )
}
