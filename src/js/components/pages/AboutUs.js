import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function AboutUs() {
  const breadcrumbs = [{name: 'About us', last: true}];
  return (
    <PageTemplate>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2>About us</h2>
    </PageTemplate>
  );
}
