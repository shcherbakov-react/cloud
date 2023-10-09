import Head from "next/head";
import React from "react";
import { Layout, Space } from 'antd';

const { Header, Footer, Content } = Layout;


interface LayoutProps {
    title: string;
}

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#888',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#333',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#888',
    backgroundColor: '#333',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#888',
    backgroundColor: '#333',
};

export const LayoutComponent: React.FC<React.PropsWithChildren<LayoutProps>> = ({ title, children, }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header style={headerStyle}>Header</Header>
                <Content style={contentStyle}>{children}</Content>
                <Footer style={footerStyle}>Footer</Footer>
            </main>
        </>
    );
};