
      import React from 'react';
      import { Menu, Layout } from 'antd';
      import { UnorderedListOutlined, FormOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom';
      const { Sider } = Layout;

      const SideMenu = ({section = '1'}) => {
          return (
            <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              selectedKeys={[section.id]}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item icon={<UnorderedListOutlined />} key="1"><Link to="/">Star Wars Films List</Link></Menu.Item>
                <Menu.Item icon={<UnorderedListOutlined />} key="2">Starships List </Menu.Item>
                <Menu.Item icon={<FormOutlined />} key="3">Startship Edit Form</Menu.Item>
            </Menu>
          </Sider>
          );
      }
       
      export default SideMenu;

      