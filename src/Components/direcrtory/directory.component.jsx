import React, {useContext} from "react";
import "./directory.styles.css";

import MenuItem from "../menu-item/menu-item.component";

import DirectoryContext from "../../Context/Directory/directory.context";

const Directory = () => {
    const directoryCollection = useContext(DirectoryContext);
    const {sections} = directoryCollection;

    return(
        <div className="directory-menu">
            {sections.map(({id, ...otherProps}) => <MenuItem key={id} {...otherProps} />)}
        </div>
    );
}

export default Directory;