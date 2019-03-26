const stateData = {
  articles: [
    {
      id: 'id1',
      date: new Date(),
      title: 'Some title1',
      text: 'Some text 1',
      overview: 'Some overview1',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      //category: ['Games']
      categoriesId: ['cid2']
    },
    {
      id: 'id2',
      date: new Date(),
      title: 'Some title2',
      text: 'Some text 2',
      overview: 'Some overview2',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      //category: ['IT', 'Games']
      categoriesId: ['cid1', 'cid2']
    },
    {
      id: 'id3',
      date: new Date(),
      title: 'Some title3',
      text: 'Some text 3',
      overview: 'Some overview3',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      //category: ['IT']
      categoriesId: ['cid1', 'cid2']
    }
  ],
  /* comments: [
    {
      id: '',
      articleId: '',
      date: '',
      userName: '',
      text: '',
      validate: ''
    }
  ], */
  categories: [
    {
      id: 'cid1',
      name: 'IT'
    },
    {
      id: 'cid2',
      name: 'Games'
    }
  ],
  users: [
    {
      name: 'Admin',
      password: '7123',
      email: 'vasiaobukh7@gmail.com'
    }
  ]
};

export default stateData;
