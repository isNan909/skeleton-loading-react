import React, { useState, useEffect } from 'react';
import './App.css'
import dummyData from './dummyData.js';
import BlogList from './components/BlogList';
import SkeletonCard from './components/SkeletonCard';

const App = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setBlog(dummyData);
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timing);
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Skeleton Loading with React ...</h2>
      </div>
      {loading && <SkeletonCard />}
      {!loading &&
        blog.map((list, index) => {
          return (
            <div key={index}>
              <BlogList list={list} />
              <hr />
            </div>
          );
        })}
    </div>
  );
};

export default App;
