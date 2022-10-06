import React from "react";


function ListItem(props) {

    return(
        <ul>
            <li>{props.task}</li>,
        </ul>
    );
}

export default ListItem;