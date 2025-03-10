import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import './NewsArea.css';

const NewsArea = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${selectedCategory}&q=${searchQuery}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [selectedCategory, searchQuery]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className="news-container text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-input"
        />
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="category-select"
        >
          <option value="business">Business</option>
          <option value="entertainment">Entertainment</option>
          <option value="general">General</option>
          <option value="health">Health</option>
          <option value="science">Science</option>
          <option value="sports">Sports</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      <div className="articles-container">
        {articles.map((news, index) => (
          <NewsItems
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsArea;
