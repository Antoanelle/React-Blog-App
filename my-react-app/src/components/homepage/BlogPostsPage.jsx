import React from 'react'
import styles from './BlogPostsPage.module.css'
import PostList from '../postList/PostList'

function BlogPostsPage(){
    return(
        <div className={styles.blogPostsPage}>
            <h3>Homepage</h3>
            <PostList />
        </div>
    )


}

export default BlogPostsPage;