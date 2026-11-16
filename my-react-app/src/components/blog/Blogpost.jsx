import Comment from '../comment/Comment'
import Content from './Content'
import styles from './Blogpost.module.css'
import { useTheme } from '../common/ThemeContext';
import { useParams } from 'react-router';
import { use, useEffect, useState } from 'react';
import axios from 'axios';

function Blogpost() {
    const {theme} = useTheme();
    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState();
    const [authorData, setAuthorData] = useState();
    console.log(postData, authorData)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`)
                setPostData(postRes.data)

                const authorData = await axios.get (`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`)
                setAuthorData(authorData.data)
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, []);
    
    return <div className={styles.Blogpost}>
        {loading ? (
            <p>Loading</p> 
        ) : (<>
            {theme}
            <Content 
                title={postData.title} 
                author={authorData.name} 
                content={postData.body}
            />
            <Comment />
        </>)}
    </div>
}

export default Blogpost;