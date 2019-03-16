import React from 'react';
import PageTemplate from './PageTemplate';
import Articles from './Articles';

const Home = () => {
  const articles = [
    {
      id: '1',
      title: 'Some amazing title1',
      thumbnailUrl: './dist/img/post-test.gif',
      overview: 'Parturient suspendisse Risus adipiscing iaculis leo cras taciti natoque dis. Blandit turpis etiam porta Leo elementum parturient sodales accumsan suscipit bibendum praesent primis adipiscing non. Sagittis vitae hymenaeos ridiculus ultricies. Interdum volutpat aliquam montes curae; Hendrerit nascetur nonummy tellus, facilisi sapien pulvinar natoque eu pede nostra mollis rhoncus. Feugiat sed.',
      //date: new Date(),
      commentsNumber: 5,
      categories: ['IT', 'Games', 'Music']
    },
    {
      id: '1',
      title: 'Some amazing title2',
      thumbnailUrl: './dist/img/post-test.gif',
      overview: 'Parturient suspendisse Risus adipiscing iaculis leo cras taciti natoque dis. Blandit turpis etiam porta Leo elementum parturient sodales accumsan suscipit bibendum praesent primis adipiscing non. Sagittis vitae hymenaeos ridiculus ultricies. Interdum volutpat aliquam montes curae; Hendrerit nascetur nonummy tellus, facilisi sapien pulvinar natoque eu pede nostra mollis rhoncus. Feugiat sed.',
      //date: new Date(),
      commentsNumber: 5,
      categories: ['IT', 'Games', 'Music']
    },
    {
      id: '1',
      title: 'Some amazing title3',
      thumbnailUrl: './dist/img/post-test.gif',
      overview: 'Parturient suspendisse Risus adipiscing iaculis leo cras taciti natoque dis. Blandit turpis etiam porta Leo elementum parturient sodales accumsan suscipit bibendum praesent primis adipiscing non. Sagittis vitae hymenaeos ridiculus ultricies. Interdum volutpat aliquam montes curae; Hendrerit nascetur nonummy tellus, facilisi sapien pulvinar natoque eu pede nostra mollis rhoncus. Feugiat sed.',
      //date: new Date(),
      commentsNumber: 5,
      categories: ['IT', 'Games', 'Music']
    },
    {
      id: '1',
      title: 'Some amazing title4',
      thumbnailUrl: './dist/img/post-test.gif',
      overview: 'Parturient suspendisse Risus adipiscing iaculis leo cras taciti natoque dis. Blandit turpis etiam porta Leo elementum parturient sodales accumsan suscipit bibendum praesent primis adipiscing non. Sagittis vitae hymenaeos ridiculus ultricies. Interdum volutpat aliquam montes curae; Hendrerit nascetur nonummy tellus, facilisi sapien pulvinar natoque eu pede nostra mollis rhoncus. Feugiat sed.',
      //date: new Date(),
      commentsNumber: 5,
      categories: ['IT', 'Games', 'Music']
    }
  ];
  return (
    <PageTemplate>
      <Articles articles={articles}/>
    </PageTemplate>
  );
};

export default Home;
