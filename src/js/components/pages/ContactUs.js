import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function ContactUs() {
  const breadcrumbs = [{ name: 'Contact us', last: true }];
  return (
    <PageTemplate>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <h2>Contact Us</h2>
    </PageTemplate>
  );
}
