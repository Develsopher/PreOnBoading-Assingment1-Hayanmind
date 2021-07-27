import axios from 'axios';
import { useState, useEffect } from 'react';
import Comment from './Comment';

function CommentList({ page }) {
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const loadComments = async page => {
    setIsLoading(true);
    try {
      const { data: loadedComments } = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
      );
      setComments(comments => {
        const newComments = Array.from(comments);
        newComments.push(...loadedComments);

        return newComments;
      });

      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const renderComments = () => {
    return comments.map(comment => (
      <Comment
        key={comment.id}
        id={comment.id}
        email={comment.email}
        body={comment.body}
      />
    ));
  };

  useEffect(() => {
    loadComments(page);
  }, [page]);

  return (
    <ul className="comment-list">
      {renderComments()}
      {/* {isLoading ? <div>Loading...</div> : ''} */}
    </ul>
  );
}

export default CommentList;
