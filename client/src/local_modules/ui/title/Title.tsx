import React from "react";

import "./title.scss";

interface Props {
    level: number,
    applyMargin?: number | string;
    removeTopMargin?: boolean;
    removeBottomMargin?: boolean;
    children?: React.ReactNode;
}

function Title(props:Props) {

    const {
        removeTopMargin,
        removeBottomMargin,
        applyMargin,
        level,
        ...rest
    }:Props = props;

    const className:string = "title";

    const style = {
        margin: `${applyMargin || 0}${typeof applyMargin === "number" ? "px" : ""} 0`,
        marginTop: removeTopMargin ? "0" : "unset"
    }

    if (level < 1 || level > 6)
        throw Error("Range error");

    return React.createElement(`h${level || 1}`, { ...rest, ...{ className, style }});

}

export default Title;