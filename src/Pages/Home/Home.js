import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
   const allNews = useLoaderData();
   return (
      <div className='App'>
         <h2>Dragon News Home: {allNews.length}</h2>
      </div>
   );
};

export default Home;