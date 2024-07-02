import {
  UserOutlined
} from '@ant-design/icons';
import { Avatar, Flex, Layout } from 'antd';
import React from 'react';
import styles from './Header.module.scss'
const { Header } = Layout;

export default function Headerr() {
  return (
    <Header className={styles.header}>
      <Flex justify='end' size={16}>
        <Avatar size={64} icon={<UserOutlined />} />
      </Flex>
    </Header>)
}
