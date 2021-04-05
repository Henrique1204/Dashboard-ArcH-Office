import React from "react";

const Head = ({ title, description }) => {
    React.useEffect(() => {
        document.title = `Dashboard ArcH Office | ${title}`;

        document.querySelector("meta[name='description'")
        .setAttribute(
            "content",
            `Dashboard ArcH | ${title}, ${description}` || ""
        );
    }, [title, description]);
    
    return <></>;
};

export default Head;
