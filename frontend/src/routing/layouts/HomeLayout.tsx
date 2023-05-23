import { Layout, Menu, Row, Space } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { Content } from 'antd/es/layout/layout';
import { siderNavConfig } from '../configs/siderNavConfig';

export const HomeLayout: React.FC = () => {

    const location = useLocation();

    const isSelected = (toPath: string) => {
        return location.pathname.includes(toPath);
    }

    return (
        <Layout style={{ height: '100%' }}>
            <Sider theme='light'>
                <Space style={{ width: '100%' }} size={20} direction='vertical'>
                    {siderNavConfig.map(item => (
                        <NavLink to={item.to}>
                            <Row style={{ width: '100%' }} gutter={[0, 20]}>
                                {item.icon}
                                <div>
                                    {item.label}
                                </div>
                            </Row>
                        </NavLink>
                    ))}
                </Space>
            </Sider>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    )
}