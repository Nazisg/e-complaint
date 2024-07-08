import Complaint from '@/pages/Complaint';
import Detail from "@/pages/Complaint/Detail";
import CreateComplaint from '@/pages/CreateComplaint';
import Headerr from '@/shared/layout/Header';
import SideMenu from '@/shared/layout/SideMenu';
import { Layout } from 'antd';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const { Content } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <SideMenu />
        <Layout>
          <Headerr />
          <Content >
            <Routes>
              <Route path="/" element={<Complaint />} />
              <Route path="/create-complaint" element={<CreateComplaint />} />
              <Route path="/detail" element={<Detail />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;