import React, { useContext } from 'react';
import Time from './Time';
import { AuthContext } from './auth';

const Comment = ({ comment }) => {
  const auth = useContext(AuthContext)
  return (
    <div className="alert alert-info" role="alert">
       {comment.content} por: {comment.use.name} em: <Time timestamp={comment.createdAt} />
    </div>
  )
}

export default Comment;