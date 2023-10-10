import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import cls from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from 'next/link';

// import * as api from "@/api";

export const Header: React.FC = () => {
    const router = useRouter();
    const selectedMenu = router.pathname;

    // const onClickLogout = () => {
    //     if (window.confirm("Вы действительно хотите выйти?")) {
    //         api.auth.logout();
    //         location.href = "/";
    //     }
    // };

    return (
        <Layout.Header className={cls.root}>
            <div className={cls.headerInner}>
                <div className={cls.headerLeft}>
                    <h2>
                        <CloudOutlined />
                        Cloud Storage
                    </h2>
                    <div className={cls.list}>
                        <Link href={'/dashboard'}>Главная</Link>
                        <Link href={'/profile'}>Профиль</Link>
                    </div>
                </div>

                <div className={cls.headerRight}>
                    <Popover
                        trigger="click"
                        content={
                            <Button type="primary" danger>
                                Выйти
                            </Button>
                        }
                    >
                        <Avatar className={cls.avatar}>A</Avatar>
                    </Popover>
                </div>
            </div>
        </Layout.Header>
    );
};