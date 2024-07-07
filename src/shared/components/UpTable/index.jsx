import CustomButton from '@/shared/components/Button'
import fileUrl from '@/shared/media/docs/E-Şikayət - Abunəçi Təlimatı.pdf'
import {
    FilterOutlined,
    InfoCircleOutlined,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons'
import { Flex, Input, Space } from 'antd'
import { saveAs } from 'file-saver'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './UpTable.module.scss'

export default function UpTable() {
    const downloadPDF = async () => {
        const pdfName = 'E-Şikayət - Abunəçi Təlimatı.pdf';

        try {
            const response = await fetch(fileUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();
            saveAs(blob, pdfName);
        } catch (error) {
            console.error('Error downloading the PDF:', error);
        }
    };

    return (
        <Flex justify='space-between' align='center'>
            <Space size="middle" wrap>
                <CustomButton icon={<PlusOutlined />} text={<Link to='/create-complaint'>Yeni şikayət yarat</Link>} />
                <CustomButton icon={<FilterOutlined />} text="Ətraflı axtarış" />
                <CustomButton onClick={downloadPDF} icon={<InfoCircleOutlined />} text="Təlimat" />
            </Space>
            <Input className={styles.input} size="large" placeholder="Axtar..." prefix={<SearchOutlined />} />
        </Flex>)
}
