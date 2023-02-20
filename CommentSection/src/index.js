import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import CommentDetails from './CommentDetails'
import ApprovalCard from './ApprovalCard'

  
  const App = () => {
    return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetails
        author="sam"
        TimeAgo="Today At 04:10AM"
        TextWritten="good"
        avatar={faker.image.image()}
        />
      </ApprovalCard>
      
      <ApprovalCard>
      <CommentDetails
      author="alex"
      TimeAgo="Today At 08:10AM"
      TextWritten="great"
      avatar={faker.image.image()}
      />
      </ApprovalCard>

      <ApprovalCard>
      <CommentDetails
      author="jane" 
      TimeAgo="Yestreday At 5:10AM" 
      TextWritten="Nice Blog!" 
      avatar={faker.image.image()}
      />
      </ApprovalCard>
      </div>
    );
  };

ReactDOM.render(<App/>,document.querySelector('#root'));
