import React, { useState, useContext } from 'react';
import { useDatabasePush } from './database';
import firebase from './firebase';
import { AuthContext } from './auth';

const NewComment = () => {
  const [, save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')
  const auth = useContext(AuthContext)
  if (auth.user === null) {
    return null
  }
  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')


  const createComment = () => {
    if (comment !== '') {
      save({ 
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        use: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      })
      setComment('')
    }   
  }

  return (
    <>
        <div>
            <div className="form-group">
              <label htmlFor="NovoComentarioFormControlTextarea">Novo comentário</label>
              <textarea className="form-control" rows="3"
              value={comment} onChange={evt => setComment(evt.target.value)}></textarea>
            </div>

        <div style={{paddingBottom: '10px'}}>
        <button className='btn btn-success' onClick={createComment}>
          Comentar!
          </button>
          </div>
  </div>
  </>
  )
}

export default NewComment;