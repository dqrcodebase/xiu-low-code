import React from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.less';
import OutlinePane from '@/components/OutlinePane';

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
  getItem(
    '大纲树',
    '1',
    <i className={`${styles.menuItemIcon} iconfont icon-fuhao-dagangshu`} />,
  ),
  getItem(
    '组件库',
    '2',
    <i className={`${styles.menuItemIcon} iconfont icon-yuanshuju-zujianku`} />,
  ),
  getItem(
    '数据源',
    '3',
    <i className={`${styles.menuItemIcon} iconfont icon-peizhishujuyuan`} />,
  ),
  getItem(
    '动作面板',
    '4',
    <i className={`${styles.menuItemIcon} iconfont icon-program-full`} />,
  ),
  getItem(
    '多语言文案管理',
    '5',
    <i className={`${styles.menuItemIcon} iconfont icon-duoyuyan`} />,
  ),
];
const App: React.FC = (props) => (
  <>
    <Layout className={`vh-100 ${styles.editLayout}`}>
      <Header>Head</Header>
      <Layout>
        <Menu
          defaultSelectedKeys={['2']}
          mode="inline"
          inlineCollapsed={true}
          items={items}
        />
        <Sider>
          <OutlinePane />
        </Sider>
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  </>
);
export default App;
