import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";

import CreatePageMain from "./CreatePageMain";
import CreatePageAside from "./CreatePageAside";

import "../../styles/global.scss";

interface Props {
    children: React.ReactNode;
}

function CreatePage(props:Props) {

    const { children } = props;

    return <>
        <Header />
        { children }
        <Footer />
    </>;

}

export default CreatePage;

export const Aside = CreatePageAside;
export const Main = CreatePageMain;