const stateData = {
  articles: [
    {
      id: '',
      date: '',
      title: '',
      text: '',
      overview: '',
      thumbnailUrl: '',
      commentsNumber: '',
      category: []
    }
  ],
  comments: [
    {
      id: '',
      articleId: '',
      date: '',
      userName: '',
      text: '',
      validate: ''
    }
  ],
  categories: [
    {
      id: '',
      name: ''
    }
  ],
  users: [
    {
      name: 'admin',
      login: 'eterry',
      password: '7123',
      email: 'vasiaobukh7@gmail.com'
    },
    {
      name: '',
      login: '',
      password: '',
      email: ''
    }
  ],
//  userType: 'NON_AUTHORIZED',
//  visibility: 'SHOW_ALL',
//  filter: 'DATE_DOWN'
};

export default stateData;