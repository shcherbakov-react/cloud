import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "@/app/api/dto/auth.dto";
import { Button } from "antd";

// import styles from "@/styles/Profile.module.scss";
import { checkAuth } from "@/app/utils/checkAuth";
import * as Api from "@/app/api";
import React from "react";
import { Layout } from "@/app/layouts/Layout";
import DashboardPage from "/app/pages/dashboard/index";

interface Props {
    userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            Api.auth.logout();
            location.href = "/";
        }
    };

    return (
        <main>
            <div>
                <h1>Мой профиль</h1>
                <br />
                <p>
                    ID: <b>{userData.id}</b>
                </p>
                <p>
                    Полное имя: <b>{userData.fullName}</b>
                </p>
                <p>
                    E-Mail: <b>{userData.email}</b>
                </p>
                <br />
                <Button onClick={onClickLogout} type="primary" danger>
                    Выйти
                </Button>
            </div>
        </main>
    );
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
    return <Layout title="Dashboard / Профиль">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
        return authProps;
    }

    const userData = await Api.auth.getMe();

    return {
        props: {
            userData,
        },
    };
};

export default DashboardProfilePage;