import React from "react";

interface Props {
    children: React.ReactNode;
}

function Page(props:Props) {

    const { children }:Props = props;

    return <>
        <div className="page">
            { children }
        </div>
    </>;

}

export default Page;