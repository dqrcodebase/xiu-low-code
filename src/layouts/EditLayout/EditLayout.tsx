import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  ClusterOutlined,
  AppstoreOutlined,
  SettingOutlined,
  DesktopOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import './EditLayout.less'
const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('大纲树', '1', <ClusterOutlined />),
  getItem('组件库', '2', <AppstoreOutlined />),
  getItem('数据源', '3', <SettingOutlined />),
  getItem('动作面板', '4', <DesktopOutlined />),
  getItem('多语言文案管理', '5', <GlobalOutlined />),
];
const App: React.FC = (props) => (
  <>
    <Layout className="vh-100">
      <Header>Head</Header>
      <Layout>
        <Menu
          defaultSelectedKeys={['2']}
          mode="inline"
          inlineCollapsed={true}
          items={items}
        />
        <Sider>Sider</Sider>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  </>
);
export default App;
