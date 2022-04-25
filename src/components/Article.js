import React from "react";

function Article ({ id, title, date="January 1, 1970", preview, minutes}) {
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <small>{minutes + " minute read"}</small>
        </article>
    )
}

export default Article