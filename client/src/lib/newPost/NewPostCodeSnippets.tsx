import React, { useEffect, useState } from "react";
import { atomFamily, atom, useRecoilState } from "recoil";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import CodeTextField from "./CodeTextField";

import { Button } from "@material-ui/core";
import "../../styles/new-post.scss";

const generateSnippetAtom = ():ISnippetAtom => ({
    id: performance.now(),
    displayed: true,
    value: ""
});

export const codeSnippetsState = atom<ISnippetAtom[]>({
    key: "codeSnippetsState",
    default: []
});

/* this array is not filtered to prevent weird react array behaviour */
export const snippetsAtom = atom<ISnippetAtom[]>({
    key: "codeSnippetsState",
    default: [ generateSnippetAtom() ]
});

export const codeSnippets = atomFamily({
    key: "newCodeSnippet",
    default: ""
});

interface Props {
    children?: React.ReactNode;
}

export interface ISnippetAtom {
    id: number;
    displayed: boolean;
    value: string;
};

function NewPostSnippets(props:Props) {

    const [ snippets, setSnippets ] = useRecoilState(snippetsAtom);

    const [ snippetsMin, snippetsMax ]:[number, number] = [ 1, 3 ];

    const addSnippetAtom = () =>
        setSnippets([ ...snippets, generateSnippetAtom() ]);

    const canMutateSnippetCount = (range:number) => {
        
        const activeSnippets = snippets.slice(0).filter(({ displayed }) => displayed);

        return {
            decrease: activeSnippets.length > range,
            increase: activeSnippets.length < range
        }
        
    };

    const removeSnippetAtom = (id:number) =>
        setSnippets(snippets.map((snippet:ISnippetAtom) => snippet.id === id ?
            { id, displayed: false, value: "" } : snippet
        ));

    return <>
        {snippets.map(({ id, displayed }) =>
            <CodeTextField
                id={id}
                onRemove={ canMutateSnippetCount(snippetsMin).decrease && (() => removeSnippetAtom(id)) }
                shown={displayed}
            />
        )}
        <div className="new-post-form-element">
            <Button
                disabled={!canMutateSnippetCount(snippetsMax).increase}
                onClick={addSnippetAtom}
                startIcon={<FontAwesomeIcon icon={ faPlus } />}
                fullWidth
                variant="outlined"
            >
                Add snippet
            </Button>
        </div>
    </>;

}

export default NewPostSnippets;