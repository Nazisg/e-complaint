import {
    EyeOutlined,
    SyncOutlined
} from '@ant-design/icons';
import { Button, Flex, Table, Tag, Tooltip } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Table.module.scss';

export default function CustomTable() {
    const navigate = useNavigate();

    const getDetail = (() => {
        navigate('/detail');
    })

    const columns = [
        {
            title: 'Şikayət nömrəsi',
            dataIndex: 'number',
            ellipsis: true,
            sorter: (a, b) => a.branch.localeCompare(b.number),

        },
        {
            title: 'Fəaliyyət sahəsi',
            dataIndex: 'branch',
            ellipsis: true,
            sorter: (a, b) => a.branch.localeCompare(b.branch),

        },
        {
            title: 'Şirkət',
            dataIndex: 'company',
            ellipsis: true,
            sorter: (a, b) => a.company.localeCompare(b.company),

        },
        {
            title: 'Mövzu',
            dataIndex: 'subject',
            ellipsis: true,
            sorter: (a, b) => a.subject.localeCompare(b.subject),

        },
        {
            title: 'Abunəçi kodu',
            dataIndex: 'code',
            dataIndex: 'code',
            ellipsis: true,
            sorter: (a, b) => a.code.localeCompare(b.code),
        },
        {
            title: 'Tarix',
            dataIndex: 'date',
            ellipsis: true,
            sorter: (a, b) => a.code.localeCompare(b.date),

        },
        {
            title: 'Status',
            ellipsis: true,
            dataIndex: 'status',
            render: (text) => (
                <Tag color={
                    text === "Baxılır" ? "geekblue" :
                        text === "Cavablandırıldı" ? "green" :
                            text === "Ləğv edildi" ? "red" : "default"
                }>
                    {text}
                </Tag>
            )
        },
        {
            title: 'Əməliyyatlar',
            ellipsis: true,
            dataIndex: 'action',
            render: (text) => (
                <Flex justify='center' >
                    {text === "Cavablandırıldı" && (
                        <Tooltip title="yenidən şikayət et">
                            <Button ghost type="danger" icon={<SyncOutlined />} />
                        </Tooltip>
                    )}
                    <Tooltip title="ətraflı">
                        <Button ghost type="primary" onClick={getDetail} icon={<EyeOutlined />} />
                    </Tooltip>
                </Flex>
            )
        },
    ];
    const data = [
        {
            key: '1',
            number: '10037',
            branch: "İnternet (GPON, ADSL və s.)",
            company: "“ADANET” MMC",
            subject: "Xidmətə qoşulma",
            code: "115664",
            date: "08.09.2023",
            status: "Baxılır"
        },
        {
            key: '2',
            number: '10037',
            branch: "Telefon rabitəsi",
            company: "“ADANET” MMC",
            subject: "Xidmətə qoşulma",
            code: "115664",
            date: "08.09.2023",
            status: "Cavablandırıldı"
        },
        {
            key: '3',
            number: '10037',
            branch: "Telefon rabitəsi",
            company: "“ADANET” MMC",
            subject: "Xidmətə qoşulma",
            code: "115664",
            date: "08.09.2023",
            status: "Ləğv edildi"
        }
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <>
            <Table
                bordered
                className={styles.table}
                columns={columns}
                dataSource={data}
                onChange={onChange} />
        </>
    )
}
