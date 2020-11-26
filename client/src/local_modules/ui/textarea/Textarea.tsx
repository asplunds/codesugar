import React from "react";
import "./textarea.scss";

interface Props {
    children?: React.ReactNode;
    defaultValue?: string|number;
}

function Textarea(props:Props) {

    const { defaultValue } = props;

    return <>
        <textarea className="ui-textarea" defaultValue={defaultValue}></textarea>
    </>;

}

export default Textarea;