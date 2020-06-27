import React from "react";
import styled from "styled-components";
import ShowMoreText from 'react-show-more-text';


const Image = styled.img`
    height: 215px; 
    overflow: hidden;
`;

const News = ({news}) => {

    const {urlToImage, url, title, description, source} = news;

    const image = (urlToImage) ?
        <div className="card-image">
            <Image
                src={urlToImage}
                alt={title}
            />
            <span className="card-title">{source.name}</span>
        </div>
        : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card large">
                {image}
                <div className="card-content">
                    <span className="card-title">
                        <ShowMoreText
                            lines={3}
                            more=""
                            expanded={false}
                            width={330}
                        >
                            {title}
                        </ShowMoreText>
                    </span>
                    <ShowMoreText
                        lines={3}
                        more=""
                        expanded={false}
                        width={330}
                    >
                        <p>{description}</p>
                    </ShowMoreText>
                    <div className="card-action">
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="waves-effect waves-light btn"
                        >View News</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;