import React, {Fragment, useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

const API_KEY = "1a626ca1b9774f058e74f0767641d5d8";

function App() {
    const [category, setCategory] = useState("");
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            if (category === "") return ;
            const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=${API_KEY}`;

            const response = await fetch(url);
            const news = await response.json();

            setNewsList(news.articles);
        }
        getNews();
    }, [category])

    return (
        <Fragment>
            <Header
                title="News"
            />
            <div className="container white">
                <Form
                    setCategory={setCategory}
                />
                <NewsList
                    newsList={newsList}
                />
            </div>
        </Fragment>
    );
}

export default App;
