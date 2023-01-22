import React, { useEffect, useState } from 'react';


//data loaded for the help of corse , fetch done and chech  <h4>All Category: {categories.length}</h4>

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/news-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])


    return (
        <div>
          <h4>All Category: {categories.length}</h4>
        </div>
    );
};

export default LeftSideNav;