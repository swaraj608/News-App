//import { useEffect, useState } from "react";

// const Newsarea = () => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // const fetchNews = async () => {
//     //   const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
      
//     //   try {
//     //     const response = await fetch(url);
//     //     const data = await response.json();
//     //     setArticles(data.articles); // Update the state with fetched articles
//     //   } catch (error) {
//     //     console.error("Error fetching the news:", error);
//     //   }
//     // };

//     // fetchNews();
//   //}, []); // The empty array means the effect will run only once (on mount)
    
// }
//   return (
//     <div>
//       <h2 className="text-center">
//         <span className="badge bg-danger">Latest News</span>
//       </h2>
//       <div>
//         {articles.length > 0 ? (
//           <ul>
//             {articles.map((article, index) => (
//               <li key={index}>
//                 <h5>{article.title}</h5>
//                 <p>{article.description}</p>
//                 <a href={article.url} target="_blank" rel="noopener noreferrer">
//                   Read more
//                 </a>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading news...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Newsarea;
// const NewsArea = () => {
//    const [articles,setArticles] = useState([]);
   
//    useEffect( () =>{
//      let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=${
//      import.meta.env.VITE_API_KEY
//     }';
//     fetch(url)
//   })  
//   return (
//        <div>
//         <h2 className="text-center">
//           <span className="badge bg-danger">Latest News</span>
//         </h2>
//        </div>
//     );
// };

// export default NewsArea;

import React, { useState, useEffect } from 'react';
import NewsItems from "./NewsItems";

const NewsArea = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [category]);

  return (
    <div className="text-center">
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>
      {articles.map((news,index)=>{
        return(
          <NewsItems
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
          />
        )
      })}
    </div>
  );
};

export default NewsArea;
