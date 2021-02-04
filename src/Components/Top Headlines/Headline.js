import React, { useEffect, useState } from 'react';
import News from '../News/News';
const Headline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        
        fetch('http://newsapi.org/v2/everything?q=bitcoin&from=2020-12-01&sortBy=publishedAt&apiKey=cc4043e5c25a4cbc8dfbe41550decebc')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    },[])
    return (
        <div>
            <h1>Top Headline : {articles.length}</h1>
            {
                articles.map(article => <News article={ article} key={ article.url}></News>)
            }
        </div>
    );
};

export default Headline;