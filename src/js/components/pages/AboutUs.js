import React from 'react';
import PageTemplate from '../PageTemplate';
import Breadcrumbs from '../Breadcrumbs';

export default function AboutUs({gallery = [], text = ''}) {
  const breadcrumbs = [{name: 'About us', last: true}];
  return (
    <PageTemplate>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <div className='gallery'>
        <h2>Some photos of us</h2>
        <div>
          {gallery.map((_, id) => (
            <div role='img' key={id} style={{backgroundImage: `url('${_}')`, width: '300px', height: '300px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundColor: '#ccc' , display:'inline-block'}}></div>
          ))}
        </div>
      </div>
      <div>
        <h2>Who we are:</h2>
        <p>{text}</p>
      </div>

    </PageTemplate>
  );
}
