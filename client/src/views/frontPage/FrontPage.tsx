import React from "react";
import CreatePage from "../../lib/createPage/createPage";

function FrontPage(props:React.PropsWithChildren<object>) {

    return <>
        <CreatePage>
            <h1>Test</h1>
        </CreatePage>
    </>;

}

export default FrontPage;