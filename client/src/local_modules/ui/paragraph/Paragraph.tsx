import React from "react";

import "./paragraph.scss";

interface Props {
    children: React.ReactNode;
}

function Paragraph(props:Props) {

    const { children }:Props = props;

    return <>
        <p className="paragraph">
            { children }
        </p>
    </>;

}

export default Paragraph;