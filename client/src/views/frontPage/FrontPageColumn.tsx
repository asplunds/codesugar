import React from "react";

interface Props {
    children?: React.ReactNode;
    columns: number;
    id: string;
}

function FrontPageColumn(props:Props) {

    const { children, columns, id } = props;

    const style = {
        width: `${100 / columns}%`
    }

    return <>
        <div className="front-page-column" style={style} id={ id }>
            <div className="front-page-column-inner">
                {children}
            </div>
        </div>
    </>;

}

export default FrontPageColumn;