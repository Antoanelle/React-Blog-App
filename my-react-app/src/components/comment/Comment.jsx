import React, { useEffect, useState } from 'react'
import styles from './Comment.module.css'
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios'

function Comments(){
    const params = useParams();
    const [comment, setComment] = useState({
        name: "",
        content: ""
    });
    const [commentList, setCommentList] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
            .then(({data}) => {
                setCommentList(data.map(({id, name, body}) => ({
                    id, 
                    name, 
                    content: body
                })));
            }).catch(error => console.error('Could not load comments:', error));
    }, [params.post_id]);


    const addComment = (comment) => {
        setCommentList([...commentList, comment])
    };

    const postComment = () => {
        if (comment.name.length < 3){
            console.error("Name needs to be at least 3 characters long")
            return;
        }
        if(comment.content.length === 0){
            console.error("Comment should not be empty")
            return;
            }
        axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`, {
            name: comment.name,
            body: comment.content
        })
        .then(({data}) => {
            addComment({
                id: data.id,
                name: data.name,
                content: data.body
            });
        });
    };

    return(
        <section className={styles.comment}>
            <h2>Comment</h2>
            <input 
                value={comment.name}
                onChange={(e) => setComment({...comment, name: e.target.value})}
                placeholder='Name'></input>
            <textarea 
                value = {comment.content}
                onChange={(e) => setComment({...comment, content: e.target.value})}
                placeholder="Add a comment" />
            <button
                onClick={postComment}
                type='submit'>
                Submit
            </button>
            
            {commentList.length === 0 ? <p>No comments yet. Be the first to comment!</p> : 
            <div>
                <h3>Existing Comments</h3>
                <ul>
                    {commentList.map((value, index) => (
                        <IndividualComment value={value} key={index}/>
                    ))}
                </ul>
            </div>}
        </section>
    );
}

export default Comments;