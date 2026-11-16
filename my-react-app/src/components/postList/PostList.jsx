import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import styles from './PostList.module.css'

function PostList() {

  const [postListData, setPostListData] = useState([]);
  console.log(postListData, setPostListData)

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPostListData(data))
        .catch(error => console.error('Error fetching posts:', error));
}, []);

  return (
    <div className={styles.postList}>
      {postListData.map(post => (
        <article key={post.id}>
          <h3>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </h3>  
          <p>
            {post.body.length > 50 ? post.body.slice(0,50): post.body}
          </p>
        </article>
      ))}
    </div>
  );
}

export default PostList