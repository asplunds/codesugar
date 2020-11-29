import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import CreatePageMain from "./CreatePageMain";
import CreatePageAside from "./CreatePageAside";

import { RecoilRoot } from "recoil";

import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";

import "../../styles/global.scss";

interface Props {
    children: React.ReactNode;
}

function CreatePage(props:Props) {

    const { children } = props;

    return <>
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <Header />
                { children }
                <Footer />
            </ThemeProvider>
        </RecoilRoot>
    </>;

}

export default CreatePage;

export const Aside = CreatePageAside;
export const Main = CreatePageMain;