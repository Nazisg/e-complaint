import {
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Flex, Image, Layout, Typography } from 'antd';
import React from 'react';
import styles from './Header.module.scss'
import logo from '../../media/imgs/logo-title.png'
const { Header } = Layout;
const { Title } = Typography;

export default function Headerr() {
  return (
    <Header className={styles.header}>
      <Flex justify='space-between' align='center' size={16}>
        <Image width={200} preview={false} src={logo} />
        <Flex align='center' gap={10}>
          <Title level={5}>NƏZRİN İSGƏNDƏROVA CƏFƏR</Title>
          <Avatar size={40} icon={<UserOutlined />} />
        </Flex>
      </Flex>
    </Header>)
}
