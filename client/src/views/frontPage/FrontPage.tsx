import React from "react";
import CreatePage, { Main } from "../../lib/createPage/CreatePage";

import Post from "../../lib/post/Post";

import { CSSGrid, measureItems, makeResponsive, layout } from 'react-stonecutter';

import NewPost from "../../lib/newPost/NewPost";

import "../../styles/front-page.scss";

import testPosts from "./posts.test";
import { Post as PostTypes } from "../../types/Post";

const Grid = makeResponsive(measureItems(CSSGrid), {
    maxWidth: 3000,
    minPadding: 100,
    defaultColumns: 3
});

function FrontPage(props:React.PropsWithChildren<object>) {

    const posts = testPosts;
    const postWidth = 590;


    return <>
        <CreatePage>
            <Main>
                <div className="front-page">             
                    <Grid
                        columns={3}
                        columnWidth={postWidth}
                        gutterWidth={16}
                        gutterHeight={16}
                        layout={layout.pinterest}
                        duration={250}
                        easing="ease-out"
                    >
                        {posts.map((post:PostTypes.post, i) => (
                            <li key={i} className="post-container">
                                <Post {...post} />
                            </li>
                        ))}
                    </Grid>
                    
                    <NewPost />
                </div>
            </Main>
        </CreatePage>
    </>;

}

export default FrontPage;