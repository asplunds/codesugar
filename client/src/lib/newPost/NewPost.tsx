import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";

import NewPostSnippets, { codeSnippetsState } from "./NewPostCodeSnippets";

import "../../styles/new-post.scss";

import {
    Button,
    TextField as Textarea
} from "@material-ui/core";

import {
    Title,
    Paragraph as P
} from "ui";


interface Props {
    children?: React.ReactNode;
}

function NewPost(props:Props) {

    const codeSnippets = useRecoilValue(codeSnippetsState);

    useEffect(() => {
        //console.log(codeSnippets);
    },[ codeSnippets ]);

    return <>
        <div className="new-post">
            <div className="new-post-inner">
                <div className="new-post-content">
                    <Title level={1}>
                        New code sugar
                    </Title>
                    <P>
                        Show off your sugary syntax
                    </P>
                    <div className="new-post-form-element">
                        <Textarea variant="outlined" fullWidth label="Title"></Textarea>
                    </div>
                    
                    <NewPostSnippets />

                    <div className="new-post-form-element">
                        <Textarea
                            variant="outlined"
                            fullWidth
                            label="Short description"
                            multiline
                            rows={2}
                            rowsMax={7}
                        ></Textarea>
                    </div>

                    <div className="new-post-form-element new-post-align-right">
                        <Button color="primary" variant="contained">Post</Button>
                    </div>
                </div>
            </div>
        </div>
    </>;

}

export default NewPost;