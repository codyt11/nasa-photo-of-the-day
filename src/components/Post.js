  
import React from "react";
import styled from 'styled-components';

const Post = (props) => {
    const { nasa } = props;

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        flex-direction: row;
        background: rgb(4, 4, 31);
        color: rgb(255, 255, 255);
        width: 90%;
        margin: auto;
        padding: 2em;
    `;
    const ImageOfTheDay = styled.img`
    display: flex;
    margin: auto;
    width: 50%;
    `;
    const Text = styled.div`
    margin: 1%;
    padding: 1em;
    line-height: 2em;
    `;

    const OptionalInfo = styled.span`
    display: flex;
    justify-content: center;
    margin: auto;
    `;

    const Date = styled.span`
    display: flex;
    justify-content: center;
    `;

    if (!nasa.url) {
        return <h3 className="loading">Loading...</h3>;
    } else {
        return(
            <Container>
                <section className="title">
                <h2 className="nasaTitle">{nasa.title}</h2>
                </section>
                
                <div className="column--half">
                    <ImageOfTheDay src={nasa.url} alt="Nasa image of the day" />
                    <OptionalInfo>{nasa.copyright}</OptionalInfo>
                </div>
                <Text>
                    <p>{nasa.explanation}</p>
                    <Date>{nasa.date}</Date>
                </Text>
            </Container>
        );
    }
}

export default Post;
