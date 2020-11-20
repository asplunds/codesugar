import React from "react";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import Page from "./Page";

import "../../styles/global.scss";

interface Props {
    children: React.ReactNode;
}

function CreatePage(props:Props) {

    const { children } = props;

    return <>
        <Header />
            <Page>
                { children }
            </Page>
        <Footer />
    </>;

}

export default CreatePage;