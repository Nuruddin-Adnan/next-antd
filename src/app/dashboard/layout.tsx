'use client'

import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import Header8 from '@/components/ui/header/Header8';

const { Content, Sider } = Layout;

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
    getItem(<Link href='/dashboard'>Option 1</Link>, '1', <PieChartOutlined />),
    getItem(<Link href='#'>Option 1</Link>, '2', <DesktopOutlined />),
    getItem('User is a large text', 'sub1', <UserOutlined />, [
        getItem(<Link href='#'>Tom</Link>, '3'),
        getItem(<Link href='#'>Bill</Link>, '4'),
        getItem(<Link href='#'>Alex</Link>, '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [
        getItem(<Link href='#'>Team1</Link>, '6'),
        getItem(<Link href='#'>Team 2</Link>, '8')
    ]),
    getItem(<Link href='#'>File</Link>, '9', <FileOutlined />),
];

export default function DashboardLaout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
                className='!bg-white overflow-auto h-screen !sticky left-0 top-0'
            >
                <div className="text-center text-2xl font-bold text-indigo-500 py-3 whitespace-nowrap sticky top-0 bg-white z-50" >{collapsed ? 'Logo' : 'Logo here'}</div>
                <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} />
            </Sider>
            <Layout>
                <div className='sticky top-0 z-50'>
                    <Header8 />
                </div>
                <Content style={{ margin: '16px' }}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};