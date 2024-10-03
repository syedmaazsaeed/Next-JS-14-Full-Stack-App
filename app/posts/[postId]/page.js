import React from 'react'

const page = () => {
  return (
    <div>
      {postId}
    </div>
  )
}

export default page




import DOMPurify from 'dompurify';

export default function SanitizeInput({ userInput }) {
  const cleanHtml = DOMPurify.sanitize(userInput);

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
  );
}

