import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/app/utils/checkAuth";
import React from "react";
import { Layout } from "@/app/layouts/Layout";

import * as Api from "@/app/api";
import { FileItem } from "@/app/api/dto/files.dto";
import { DashboardLayout } from "@/app/layouts/DashboardLayout";
import { Files } from "@/app/modules/Files";

interface Props {
    items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
    return (
        <DashboardLayout>
            <Files items = { items }
    withActions / >
    </DashboardLayout>
)
    ;
};

DashboardPage.getLayout = (page: React.ReactNode) => {
    return <Layout title = "Dashboard / Главная" > { page } < /Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    const authProps = await checkAuth(ctx);

    if ("redirect" in authProps) {
        return authProps;
    }

    try {
        const items = await Api.files.getAll();

        return {
            props: {
                items,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            props: { items: [] },
        };
    }
};

export default DashboardPage;