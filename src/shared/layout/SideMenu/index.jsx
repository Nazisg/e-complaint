import {
  PlusOutlined,
  QuestionCircleOutlined,
  UnorderedListOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import { Button, Image, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import logo from '../../../shared/media/imgs/logo-title.png';
import styles from './SideMenu.module.scss';
const { Sider } = Layout;

export default function SideMenu() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider trigger={null} theme="light" collapsible collapsed={collapsed} className={styles.sidemenu}>
      <div className="demo-logo-vertical" />
      {/* <Image preview={false} src={logo} alt="logo" className={styles.logo} /> */}
      <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <PlusOutlined />,
            label: 'Yeni şikayət yarat',
          },
          {
            key: '2',
            icon: <UnorderedListOutlined />,
            label: 'Şikayətlər',
          },
          {
            key: '3',
            icon: <QuestionCircleOutlined />,
            label: 'İstehlakçı təcrübəsi sorğusu',
          },
        ]}
      />
    </Sider>)
}
