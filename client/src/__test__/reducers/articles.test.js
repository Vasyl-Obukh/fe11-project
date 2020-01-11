import {
  ADD_ARTICLE,
  DELETE_ARTICLE,
  CHANGE_ARTICLE,
  CHANGE_COMMENTS_NUMBER
} from '../../js/constants/actionTypes';
import articles from '../../js/reducers/articles';
import deepFreeze from 'deep-freeze';

describe('articles reducer', () => {
  it('ADD_ARTICLE succes', () => {
    const state = [];

    const action = {
      type: ADD_ARTICLE,
      id: 'id1',
      date: new Date(),
      title: 'test title',
      text: 'test text',
      overview: 'test overview',
      thumbnailUrl: 'test thumbnail url',
      categoriesId: ['id1', 'id2']
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(articles(state, action)).toEqual([{
      id: 'id1',
      date: action.date,
      commentsNumber: 0,
      title: 'test title',
      text: 'test text',
      overview: 'test overview',
      thumbnailUrl: 'test thumbnail url',
      categoriesId: ['id1', 'id2']
    }]);
  });

  it('DELETE_ARTICLE success', () => {
    const state = [{
      categoriesId: ['cid1', 'cid2'],
      commentsNumber: 0,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview',
      text: 'test text',
      thumbnailUrl: 'test thumbnail url',
      title: 'test title'
    }];

    const action = {
      type: DELETE_ARTICLE,
      id: 'id1'
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(articles(state, action)).toEqual([]);
  });

  it('CHANGE_ARTICLE success', () => {
    const state = [{
      categoriesId: ['cid1', 'cid2'],
      commentsNumber: 0,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview',
      text: 'test text',
      thumbnailUrl: 'test thumbnail url',
      title: 'test title'
    }];

    const action = {
      type: CHANGE_ARTICLE,
      id: 'id1',
      categoriesId: ['cid1', 'cid3'],
      overview: 'test overview changed',
      text: 'test text changed',
      thumbnailUrl: 'test thumbnail url changed',
      title: 'test title changed'
    };

    deepFreeze(state);
    deepFreeze(action);

    expect(articles(state, action)).toEqual([{
      categoriesId: ['cid1', 'cid3'],
      commentsNumber: 0,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview changed',
      text: 'test text changed',
      thumbnailUrl: 'test thumbnail url changed',
      title: 'test title changed'
    }]);
  });

  it('CHANGE_COMMENTS_NUMBER success', () => {
    const state = [{
      categoriesId: ['cid1', 'cid2'],
      commentsNumber: 3,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview',
      text: 'test text',
      thumbnailUrl: 'test thumbnail url',
      title: 'test title'
    }];

    const action1 = {
      type: CHANGE_COMMENTS_NUMBER,
      id: 'id1',
      raise: true
    };
    const action2 = {
      type: CHANGE_COMMENTS_NUMBER,
      id: 'id1',
      raise: false
    };

    deepFreeze(state);
    deepFreeze(action1);
    deepFreeze(action2);
    
    expect(articles(state, action1)).toEqual([{
      categoriesId: ['cid1', 'cid2'],
      commentsNumber: 4,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview',
      text: 'test text',
      thumbnailUrl: 'test thumbnail url',
      title: 'test title'
    }]);
    expect(articles(state, action2)).toEqual([{
      categoriesId: ['cid1', 'cid2'],
      commentsNumber: 2,
      date: '2019-05-03T13:25:06.519Z',
      id: 'id1',
      overview: 'test overview',
      text: 'test text',
      thumbnailUrl: 'test thumbnail url',
      title: 'test title'
    }]);
  });
});
