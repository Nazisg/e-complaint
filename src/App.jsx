import { Layout, theme } from 'antd';
import React from 'react';
import Headerr from './shared/layout/Header';
import SideMenu from './shared/layout/SideMenu';
const { Sider, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Headerr />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;