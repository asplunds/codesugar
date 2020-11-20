import React from "react";
import { IHeaderItem } from "../../types/Header";
import HeaderItem from "./HeaderItem";

import headerItems from "./headerItems";

function Header(props:Object) {

    return <>
        <header className="header">
            Enable firefox grid-area names!
            <nav className="header-inner">
                { headerItems.map((v:IHeaderItem) => <HeaderItem {...v} />) }
            </nav>
        </header>
    </>;

}

export default Header;