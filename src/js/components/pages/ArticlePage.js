import React from 'react';
import PageTemplate from '../PageTemplate';

export default function PostPage({match: {params: {articleId}}}) {
  return (
    <PageTemplate>
      <h2>{articleId}</h2>
    </PageTemplate>
  );
}
