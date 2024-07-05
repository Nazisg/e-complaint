import {
    FilterOutlined,
    InfoCircleOutlined,
    PlusOutlined,
    SearchOutlined
} from '@ant-design/icons'
import { Flex, Input, Space } from 'antd'
import React from 'react'
import CustomButton from '@/shared/components/Button'
import styles from './UpTable.module.scss'
import { saveAs } from 'file-saver';
import fileUrl from '../../media/file/E-Şikayət - Abunəçi Təlimatı.pdf';
import { Link } from 'react-router-dom'

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
