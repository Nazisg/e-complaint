import logo from '@/shared/media/imgs/logo-title.png';
import {
  LeftOutlined,
  PlusOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Button, Flex, Image, Layout, Menu, Typography } from 'antd';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CustomModal from '../../components/Modal';
import styles from './SideMenu.module.scss';
const { Sider } = Layout;

export default function SideMenu() {
  const { Title } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSc-1AMXNpayyZXs-iGtaHXnyiLsbTc9hwFpBwbrXVxvqwx8AA/viewform', '_blank');
  };

  return (
    <Sider trigger={null} theme="light" collapsible collapsed={collapsed} className={styles.sidemenu}>
      <Flex justify='center' gap={"small"} align='center' className={styles.logoContainer}>
        {/* {!collapsed && <Image preview={false} width={140} src={logo} alt="logo" />} */}
        {!collapsed && <Title className={styles.title} level={4}>E-ŞİKAYƏT</Title>}
        <Button
          type="text"
          icon={collapsed ? <RightOutlined /> : <LeftOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '14px',
            width: 35,
            height: 35,
            margin: '12px 0',
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
            className: styles.link,
            onClick: showModal
          },
        ]}
      />

      <CustomModal handleOk={handleOk} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} title={"Sorğu"} >
        <p>İnternet xidmətləri üzrə istehlakçı təcrübəsi sorğusu</p>
      </CustomModal>
    </Sider>
  );
}
