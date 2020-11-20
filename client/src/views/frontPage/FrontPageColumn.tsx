import React from "react";

interface Props {
    children?: React.ReactNode;
}

function FrontPageColumn(props:Props) {

    const { children } = props;

    return <>
        <div className="front-page-column">
            <div className="front-page-column-inner">
                {children}
            </div>
        </div>
    </>;

}

export default FrontPageColumn;