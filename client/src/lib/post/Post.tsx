import React from "react";
import PostCodeParser from "./PostCodeParser";
import { Title, Paragraph as P } from "ui";

import "../../styles/post.scss";
import { Post as PostTypes } from "../../types/Post";



interface Props extends PostTypes.post {
    children?: React.ReactNode;
    width?: number;
}

function Post(props:Props) {

    const { description, title, snippets, width }:Props = props;

    return <>
        <div className="post post-animation" style={{
            width: width || "unset"
        }}>
            <div className="post-inner">
                <Title applyMargin={15} removeTopMargin level={1}>{ title }</Title>
                <P>{ description }</P>
                { snippets && snippets.map((snippet: PostTypes.postSnippet, i) => <PostCodeParser {...snippet} />) }
            </div>
        </div>
    </>;

}

export default Post;