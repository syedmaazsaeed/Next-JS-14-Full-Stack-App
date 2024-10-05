import React from 'react'

const page = () => {
  return (
    <div>
      {postId}
    </div>
  )
}

export default page




import React from 'react';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const { postId } = router.query; // Fetches the postId from the URL

  return (
    <div>
      {postId ? <h1>Post ID: {postId}</h1> : <p>Loading...</p>}
    </div>
  );
};

export default Page;
