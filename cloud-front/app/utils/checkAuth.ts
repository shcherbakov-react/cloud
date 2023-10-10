import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/app/core/axios";
import * as Api from "@/app/api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
    const { _token } = nookies.get(ctx);

    axios.defaults.headers.Authorization = "Bearer " + _token;

    try {
        await Api.auth.getMe();

        return {
            props: {},
        };
    } catch (err) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }
};