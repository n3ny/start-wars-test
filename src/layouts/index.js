import React from 'react';
import { Layout, Menu, Breadcrumb, Divider } from 'antd';

import SideMenu from './SideMenu';

import logo from '../image/logo.svg';

const { Header, Content } = Layout;

const AppRoute = ({ children, section }) => {
  return (
    <Layout>
      <Header className="header">
        <div style={{ display: 'flex'}}>
          <div style={{flex:1, justifyContent: "start" }}>
            <img className="logo" src={logo} />
          </div>
          <div style={{ flex:1, justifyContent: "center" }}>
            <div>
              <h1 style={{color:"white"}}>Star Wars</h1>
            </div>
          </div>
        </div>
      </Header>
      <Layout>
        <SideMenu section={section}/>
        <Layout style={{ padding: '0 24px 24px' }}>
          <div style={{marginTop:'10px'}}>
            <b>{section.title}</b>
          </div>
        <Divider style={{ margin: '3px' }}/>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
};

export default AppRoute;