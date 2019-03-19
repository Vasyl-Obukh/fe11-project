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
      category: ['Games']
    },
    {
      id: 'id2',
      date: new Date(),
      title: 'Some title2',
      text: 'Some text 2',
      overview: 'Some overview2',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      category: ['IT', 'Games']
    },
    {
      id: 'id3',
      date: new Date(),
      title: 'Some title3',
      text: 'Some text 3',
      overview: 'Some overview3',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      category: ['IT']
    },
    {
      id: 'id4',
      date: new Date(),
      title: 'Some title4',
      text: 'Some text 4',
      overview: 'Some overview4',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      category: ['IT']
    },
    {
      id: 'id5',
      date: new Date(),
      title: 'Some title5',
      text: 'Some text 5',
      overview: 'Some overview5',
      thumbnailUrl: '/dist/img/post-test.gif',
      commentsNumber: 0,
      category: ['IT']
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
      name: 'admin',
      login: 'eterry',
      password: '7123',
      email: 'vasiaobukh7@gmail.com'
    }
  ]
  //  currentUser: 'NON_AUTHORIZED',
};

export default stateData;