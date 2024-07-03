import { Layout } from 'antd';
import React from 'react';
import Complaint from './pages/Complaint';
import Headerr from './shared/layout/Header';
import SideMenu from './shared/layout/SideMenu';
const { Content } = Layout;

const App = () => {
  return (
    <Layout>
      <SideMenu />
      <Layout>
        <Headerr />
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          <Complaint />
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;