import { Layout, Menu, Row, Space } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React from 'react';
import { NavLink, Outlet, useLocation } from "react-router-dom";
import Logo from '../../assets/images/logo.svg'
import { Content } from 'antd/es/layout/layout';
import { siderNavConfig } from '../configs/siderNavConfig';
import styles from './css/HomeLayout.module.css';

export const HomeLayout: React.FC = () => {

    const location = useLocation();

    const isSelected = (toPath: string) => {
        return location.pathname.includes(toPath);
    }

    return (
        <Layout style={{ height: '100%' }}>
            <Sider theme='light'>
                <div className={styles.LogoDivWrap}>
                    <img className={styles.LogoImage} src={Logo}/>
                </div>
                <Space style={{ width: '100%' }} size={2} direction='vertical'>
                    {siderNavConfig.map(item => (
                        <NavLink to={item.to} className={styles.RowWrap}>
                            <Row className={isSelected(item.to)?styles.RowActive:styles.Row} style={{ width: '90%', marginBottom: '3%'}} gutter={[0, 2]}>
                                <img className={styles.IconImage} src={item.icon} alt='icon'></img>
                                <div className={styles.RowContentWrap}>
                                    <p className={isSelected(item.to)?styles.RowContentActive:styles.RowContent}>{item.label}</p>
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