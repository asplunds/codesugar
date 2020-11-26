import React from "react";
import "../../styles/new-post.scss";

import styles from "../../styles/config.scss";

import { Title, Paragraph as P, Textarea } from "ui";


interface Props {
    children?: React.ReactNode;
}

function NewPost(props:Props) {

    console.log(styles);

    return <>
        <div className="new-post">
            <div className="new-post-inner">
                <Title level={1}>
                    New code sugar
                </Title>
                <P>
                    Show off your sugary syntax
                </P>
                <Textarea></Textarea>
            </div>
        </div>
    </>;

}

export default NewPost;