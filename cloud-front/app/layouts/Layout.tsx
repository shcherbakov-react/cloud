import Head from "next/head";
import { Header } from "@/app/Components/Header/Header";
import React from "react";

import cls from "./Layout.module.scss";

interface LayoutProps {
    title: string;
}

export const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({title, children, }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                <Header />
                <div className={cls.main}>
                    <div className={cls.layout}>{children}</div>
                </div>
            </main>
        </>
    );
};