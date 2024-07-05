import {
  PlusOutlined,
  QuestionCircleOutlined,
  UnorderedListOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, Image, Flex } from 'antd';
import React, { useState } from 'react';
import logo from '@/shared/media/imgs/logo-title.png';
import styles from './SideMenu.module.scss';
import { Link, useLocation } from 'react-router-dom';
const { Sider } = Layout;
import CustomModal from '../../components/Modal';

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Sider trigger={null} theme="light" collapsible collapsed={collapsed} className={styles.sidemenu}>
      <Flex justify='center' align='center' className={styles.logoContainer}>
        {!collapsed && <Image preview={false} width={140} src={logo} alt="logo" />}
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '14px',
            width: 50,
            height: 50,
            margin: '14px 0',
          }}
        />
      </Flex>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UnorderedListOutlined />,
            label: <Link to="/">Şikayətlər</Link>,
            className: location.pathname === '/' ? styles.activeLink : styles.link,
          },
          {
            key: '2',
            icon: <PlusOutlined />,
            label: <Link to="/create-complaint">Yeni şikayət yarat</Link>,
            className: location.pathname === '/create-complaint' ? styles.activeLink : styles.link,
          },
          {
            key: '3',
            icon: <QuestionCircleOutlined />,
            label: 'İstehlakçı təcrübəsi sorğusu',
            className:styles.link,
            onClick:showModal
          },
        ]}
      />

      <CustomModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </Sider>
  );
}
