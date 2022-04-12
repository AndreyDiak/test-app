import usersReducer, {setUsers} from "./usersReducer";
import {getPostsCommentsSelector, getPostsSelector, getProfileSelector, getUsersSelector} from "./usersSelector";

describe('getUsersValue', () => {

  test('getUsers with empty state', () => {
    expect(getUsersSelector({})).toEqual([])
  })

  test('getUsers with filled state', () => {
    expect(getUsersSelector({
      usersPage: {users: [1,2,3]}
    })).toEqual([1,2,3])
  })

  test('getProfile with empty state', () => {
    expect(getProfileSelector({})).toEqual({})
  })

  test('getProfile with filled state', () => {
    expect(getProfileSelector({
      usersPage: {profile: {id: 1, name: 'Mark'}}
    })).toEqual({id: 1, name: 'Mark'})
  })

  test('getPosts with empty state', () => {
    expect(getPostsSelector({})).toEqual([])
  })

  test('getPosts with filled state', () => {
    expect(getPostsSelector({
      usersPage: {posts: [1,2,3]}
    })).toEqual([1,2,3])
  })

  test('getComments with empty state', () => {
    expect(getPostsCommentsSelector({})).toEqual([])
  })

  test('getComments with filled state', () => {
    expect(getPostsCommentsSelector({
      usersPage: {comments: [1,2,3]}
    })).toEqual([1,2,3])
  })

})