import React from "react";
import { Post as PostTypes } from "../../types/Post";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import "./code-theme.css";
import "./override-code-theme.scss";


interface Props extends PostTypes.postSnippet {
    children?: React.ReactNode;
    parentAge?: string;
}

function PostCodeParse(props:Props) {

    const { content, language }:Props = props;



    return <>
        <SyntaxHighlighter language={ language } style={ a11yDark }>
            { content }
        </SyntaxHighlighter>
    </>;

}

export default PostCodeParse;