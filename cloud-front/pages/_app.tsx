import "@/app/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { Layout } from 'antd';
import { LayoutComponent } from '@/app/Layouts/Layout';

interface Props extends AppProps {
    Component: AppProps["Component"] & {
        getLayout: (page: React.ReactElement) => React.ReactNode;
    };
}

export default function App({ Component, pageProps }: Props) {

    return (
        <LayoutComponent title={'qwe'}>
            <Component {...pageProps} />
        </LayoutComponent>
    )
    // const getLayout = Component.getLayout || ((page: React.ReactNode) => page);
    //
    // return getLayout();
}