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

import { Fragment } from 'react';
import Helmet from 'helmet';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Security-Policy" content="default-src 'self';" />
      </Helmet>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

