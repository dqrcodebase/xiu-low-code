import React from 'react';
import { Layout } from 'antd';
import './BasicLayout.less';
const { Header, Sider, Content } = Layout;

const App: React.FC = (props) => (
  <>
    <Layout className="vh-100">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  </>
);
export default App;
