import React from 'react'


// this is page is rendered as /posts/new

const page = () => {
  return (
    <div>
      New Post  
    </div>
  )
}

export default page





import React from 'react';

const Page = ({ postId }) => {
  return (
    <div>
      <h1>Post ID: {postId}</h1>
    </div>
  );
};

export default Page;
