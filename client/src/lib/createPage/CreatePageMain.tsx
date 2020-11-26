import React from "react";
import Page from "./Page";


interface Props {
    children?: React.ReactNode;
}

function CrearePageMain(props:Props) {

    const { children } = props;

    return <>
        <Page>
            { children }
        </Page>
    </>;

}

export default CrearePageMain;