import React from "react";
import CreatePage from "../../lib/createPage/createPage";
import FrontPageColumn from "./FrontPageColumn";

import "../../styles/front-page.scss";



function FrontPage(props:React.PropsWithChildren<object>) {

    return <>
        <CreatePage>
            <div className="front-page">
                <FrontPageColumn>Hello there!</FrontPageColumn>
                <FrontPageColumn>General Kenobi...</FrontPageColumn>
            </div>
        </CreatePage>
    </>;

}

export default FrontPage;