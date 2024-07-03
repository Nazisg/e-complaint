import {
    FilterOutlined,
    InfoCircleOutlined,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons'
import { Flex, Input, Space } from 'antd'
import React from 'react'
import CustomButton from '../Button'
import styles from './UpTable.module.scss'

export default function UpTable() {
    return (
        <Flex justify='space-between' align='center'>
            <Space size="middle" wrap>
                <CustomButton icon={<PlusOutlined />} text="Yeni şikayət yarat" />
                <CustomButton icon={<FilterOutlined />} text="Ətraflı axtarış" />
                <CustomButton icon={<InfoCircleOutlined />} text="Təlimat" />
            </Space>
            <Input className={styles.input} size="large" placeholder="Axtar..." prefix={<SearchOutlined />} />
        </Flex>)
}
