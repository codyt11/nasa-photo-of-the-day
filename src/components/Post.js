  
import React from "react";

const Post = (props) => {
    const { nasa } = props;

    if (!nasa.url) {
        return <h3 className="loading">Loading...</h3>;
    } else {
        return(
            <div className="container">
                <section className="title">
                <h2 className="nasaTitle">{nasa.title}</h2>
                </section>
                
                <div className="column--half">
                    <img className="image-of-the-day" src={nasa.url} alt="Nasa image of the day" />
                    <span className="optional-info">{nasa.copyright}</span>
                </div>
                <div className="text">
                    <p>{nasa.explanation}</p>
                    <span className="date">{nasa.date}</span>
                </div>
            </div>
        );
    }
}

export default Post;
