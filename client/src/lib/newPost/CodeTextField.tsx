import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Transition } from "react-transition-group";

import { IconButton } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import "./code-text-field.scss";
import "../../styles/override-code-theme.scss";

import { codeSnippets, codeSnippetsState, snippetsAtom, ISnippetAtom } from "./NewPostCodeSnippets";

type removeCallback = () => void;

interface Props {
    children?: React.ReactNode;
    onRemove?: removeCallback;
    id: number;
    shown: boolean;
}


const duration = 200;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    transform: "scale(.8)"
}

const transitionStyles = {
    entering: { opacity: 1, transform: "scale(1.02)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 0 },
    exited: { opacity: 0, height: 0, padding: 0, overflow: "hidden", position: "relative" },
};

function CodeTextField(props: Props) {
    
    const snippets = useRecoilValue(snippetsAtom);
    const [ , setCodeSnippets ] = useRecoilState(codeSnippetsState);


    const { id, onRemove, shown } = props;

    const [ inputCode, setInputCode ] = useRecoilState(codeSnippets(id));

    const sync = (e: React.FormEvent) => {
        const { value } = e.target as HTMLTextAreaElement;

        setInputCode(value || "");
    };

    useEffect(() => {
        setCodeSnippets(snippets
            //.filter(({ displayed }: ISnippetAtom) => displayed)
            .map((snippet: ISnippetAtom) => {
                const newSnippet = JSON.parse(JSON.stringify(snippet));

                if (newSnippet.id === id)
                    newSnippet.value = inputCode;
                return newSnippet;
            })
        );
    }, [ id, inputCode, setCodeSnippets ]);

    return <>
        <Transition in={shown} timeout={200} appear classNames="animation-bounce-in">
            {state =>
                <div className="code-text-field code-theming-override-color-only" style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <div className="new-post-form-element">
                        <div className="code-text-field-inner">
                            <SyntaxHighlighter language={"js"} style={a11yDark}>
                                {inputCode || "// Type your code here"}
                            </SyntaxHighlighter>
                        </div>

                        <textarea
                            spellCheck={false}
                            autoComplete={"off"}
                            className="code-theming code-text-field-editor"
                            onInput={sync}
                            defaultValue={ inputCode }
                        ></textarea>
                        {onRemove &&
                            <div className="code-text-field-remove">
                                <IconButton onClick={ onRemove }>
                                    <FontAwesomeIcon icon={ faTimes } />
                                </IconButton>
                            </div>
                        }
                    </div>
                </div>
            }
        </Transition>
    </>;

}

export default CodeTextField;