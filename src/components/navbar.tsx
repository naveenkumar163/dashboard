import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DashboardOutlined,
  QuestionCircleOutlined,
  SearchOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Row, Col, Input } from 'antd';
import EarningIcon from '../images/earning.png';
import OrderIcon from '../images/order.png';
import BalanceIcon from '../images/balance.png';
import SalesIcon from '../images/sales.png';
import Chart from './chart';
import Graph from './graph';

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  getItem('Product', 'sub1', <FileOutlined />, [
    getItem('Product 1', '2'),
    getItem('Product 2', '3'),
    getItem('Product 3', '4'),
  ]),
  getItem('Customers', 'sub2', <TeamOutlined />, [
    getItem('Customers 1', '5'),
    getItem('Customers 2', '6'),
  ]),
  getItem('Income', 'sub3', <UserOutlined />, [
    getItem('Income 1', '7'),
  ]),
  getItem('Promote', 'sub4', <DesktopOutlined />, [
    getItem('Customers 1', '8'),
  ]),
  getItem('Help', 'sub5', <QuestionCircleOutlined />, [
    getItem('Help 1', '9'),
    getItem('Help 2', '10'),
    getItem('Help 3', '11'),
  ]),
];

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <h3 style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', color: 'white' }}><DashboardOutlined />&nbsp; Dashboard</h3>
          <div className="demo-logo-vertical" />

          <Menu theme="dark" defaultSelectedKeys={['1']} mode="vertical" items={items} />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 40px', marginTop: '-15px' }}>
              <Col style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}><h2>Hello Saharukh</h2></Col>
              <Col style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
                <Input size="small" placeholder="Search" prefix={<SearchOutlined />} />
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0', }}>
              <Row>
                <Col style={{ padding: '0 10px' }}>
                  <div className='card' style={{ background: 'white', margin: '20px 0', padding: "10px", borderRadius: '10px' }}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col><img src={EarningIcon} alt="..alt" /></Col>
                      <Col style={{ paddingLeft: '5px' }}>
                        <p style={{ padding: '0', margin: '0', lineHeight: '14px' }}>Earning</p>
                        <h3 style={{ padding: '0', margin: '0', lineHeight: '35px', fontSize: '25px', color: 'black' }}>$198K</h3>
                        <p style={{ padding: '0', margin: '0', fontSize: '13px', lineHeight: '14px', color: 'black' }}><span style={{ color: 'green', fontWeight: 'bold' }}><ArrowUpOutlined />37.8% </span>this month</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col style={{ padding: '0 10px' }}>
                  <div className='card' style={{ background: 'white', margin: '20px 0', padding: "10px", borderRadius: '10px' }}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col><img src={OrderIcon} alt="..alt" /></Col>
                      <Col style={{ paddingLeft: '5px' }}>
                        <p style={{ padding: '0', margin: '0', lineHeight: '14px' }}>Orders</p>
                        <h3 style={{ padding: '0', margin: '0', lineHeight: '35px', fontSize: '25px', color: 'black' }}>$2.4K</h3>
                        <p style={{ padding: '0', margin: '0', fontSize: '13px', lineHeight: '14px', color: 'black' }}><span style={{ color: 'red', fontWeight: 'bold' }}><ArrowDownOutlined />2% </span>this month</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col style={{ padding: '0 10px' }}>
                  <div className='card' style={{ background: 'white', margin: '20px 0', padding: "10px", borderRadius: '10px' }}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col><img src={BalanceIcon} alt="..alt" /></Col>
                      <Col style={{ paddingLeft: '5px' }}>
                        <p style={{ padding: '0', margin: '0', lineHeight: '14px' }}>Balance</p>
                        <h3 style={{ padding: '0', margin: '0', lineHeight: '35px', fontSize: '25px', color: 'black' }}>$2.4K</h3>
                        <p style={{ padding: '0', margin: '0', fontSize: '13px', lineHeight: '14px', color: 'black' }}><span style={{ color: 'red', fontWeight: 'bold' }}><ArrowDownOutlined />2% </span>this month</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col style={{ padding: '0 10px' }}>
                  <div className='card' style={{ background: 'white', margin: '20px 0', padding: "10px", borderRadius: '10px' }}>
                    <Row style={{ display: 'flex', alignItems: 'center' }}>
                      <Col><img src={SalesIcon} alt="..alt" /></Col>
                      <Col style={{ paddingLeft: '5px' }}>
                        <p style={{ padding: '0', margin: '0', lineHeight: '14px' }}>Total Sales</p>
                        <h3 style={{ padding: '0', margin: '0', lineHeight: '35px', fontSize: '25px', color: 'black' }}>$89K</h3>
                        <p style={{ padding: '0', margin: '0', fontSize: '13px', lineHeight: '14px', color: 'black' }}><span style={{ color: 'green', fontWeight: 'bold' }}><ArrowUpOutlined />11% </span>this month</p>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Breadcrumb>
            <div style={{ minHeight: 360, paddingBottom: '40px' }}>
              <Row style={{}}>
                <Col span={19} style={{ padding: '0 10px' }}>
                  <Graph />
                </Col>
                <Col span={5} style={{ padding: '0 10px' }}>
                  <Chart />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
export default Navbar;