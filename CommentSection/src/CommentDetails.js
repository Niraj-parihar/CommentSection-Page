import React from 'react';
//import faker from 'faker';

const CommentDetail= props => {
  return(
    <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" src={props.avatar}/>
    </a>
    <div className="content">
      <a href="/" className="author" style={{fontsize:'5 px'}}>
       {props.author}
      </a>
      <div className="metadata">
        <span className="date">{props.TimeAgo}</span>
      </div>
      <div className="text">{props.TextWritten}</div>
    </div>
  </div>

  );
};

export default CommentDetail;