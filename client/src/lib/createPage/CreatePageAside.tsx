import React from "react";

interface Props {
    children?: React.ReactNode;
}

function CreatePageAside(props:Props) {

    const { children }:Props = props;

    return <>
        <div className="aside">
            { children }
        </div>
    </>;

}

export default CreatePageAside;