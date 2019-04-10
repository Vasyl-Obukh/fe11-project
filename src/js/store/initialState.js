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
      id: 'comid1',
      articleId: 'id1',
      date: new Date(),
      userId: '0',
      text: 'some comment1',
      validate: true
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
      userType: 'ADMIN',
      id: '0',
      name: 'Admin',
      password: '1111',
      email: 'admin@gmail.com'
    }
  ],
  settings: {
    socialLinks: {
      gitHub: 'aaa',
      facebook: 'aaa',
      linkedIn: 'aaa',
      twitter: 'aaa'
    },
    pageLimit: 3,
    pageNeighbours: 1,
    slidesNumber: 5,
    address: 'somewhere',
    phoneNumber: '+380999999999'
  },
  aboutUs: {
    gallery: [
      {
        url: '/dist/img/post-test.gif'
      },
      {
        url: '/dist/img/post-test.gif'
      },
      {
        url: '/dist/img/post-test.gif'
      },
      {
        url: '/dist/img/post-test.gif'
      },
      {
        url: '/dist/img/post-test.gif'
      }
    ],
    text: 'some information about us'
  }
};

export default stateData;
