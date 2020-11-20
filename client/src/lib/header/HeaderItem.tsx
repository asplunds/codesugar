import React from "react";
import { Link } from "react-router-dom";
import { IHeaderItem } from "../../types/Header";


interface Props extends IHeaderItem {
    children?: React.ReactNode;
}

function HeaderItem(props:Props) {

    const { content, path }: IHeaderItem = props;

    return <>

        <div className="header-item">
            <Link to={ path }>
                <div className="header-content">
                    { content }
                </div>
            </Link>
        </div>
    </>;

}

export default HeaderItem;