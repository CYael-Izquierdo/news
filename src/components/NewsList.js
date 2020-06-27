import React from "react";
import News from "./News";
import PropTypes from "prop-types";

const NewsList = ({newsList}) => (
    <div className="row">
        {newsList.map(news => (
            <News
                key={news.url}
                news={news}
            />
        ))}
    </div>
);

NewsList.propTypes = {
    newsList: PropTypes.arrayOf(PropTypes.object)
};


export default NewsList;