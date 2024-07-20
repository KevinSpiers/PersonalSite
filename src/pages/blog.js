// pages/blog.js
import { useEffect, useState } from 'react';
import styles from '../styles/Blog.module.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/blog')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className={styles.blog}>
      {posts.map((post, index) => (
        <div key={index} className={styles.post}>
          <div><b><font size="+1">{post.Title}</font></b></div>
          <div>{post.DateTime}</div>
          <p>{post.Content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;