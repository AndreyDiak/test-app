import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {setComments, setPosts, setProfile} from "../redux/reducers/users/usersReducer";
import {getPostsCommentsSelector, getPostsSelector, getProfileSelector} from "../redux/reducers/users/usersSelector";

export const AboutPage = () => {

  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    async function loadProfile() {
      try {
        const [user, posts] = await Promise.all([
          axios.get(`https://jsonplaceholder.typicode.com/users/${id}`),
          axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`),
        ])
        dispatch(setProfile(user.data))
        dispatch(setPosts(posts.data))
      } catch (e) {
        console.log(e)
      }
    }
    loadProfile()
  }, [])

  async function loadComments(postId) {
    try {
      const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      dispatch(setComments(comments.data))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className='About' data-testid='about'>
      <AboutProfile userId={id} />
      <AboutPosts loadComments={loadComments}/>
    </div>
  )
}

const AboutProfile = ({userId}) => {
  const profile = useSelector(getProfileSelector)
  return (
      <div data-testid='about-profile'>
        ABOUT PAGE: ID - {userId}
        <hr/>
        {!profile.name && <div>Loading profile...</div>}

        <div>
          {profile.name} {profile.username}
          <br/>
          {profile.email}
          <br/>
          <b>ADDRESS:</b>
          <br/>
        </div>

        {/*{profile.address.street}*/}
        {/*{` `}({profile.address.city})*/}
        <br/>
      </div>
  )
}
const AboutPosts = ({loadComments}) => {

  const dispatch = useDispatch()

  const posts = useSelector(getPostsSelector)
  const comments = useSelector(getPostsCommentsSelector)

  const [isShown, setIsShown] = useState(Array(posts.length).fill(false))

  const updateIsPostShown = (id) => {
    let isShownCopy = [...isShown]
    isShownCopy[id] = !isShownCopy[id]
    return isShownCopy
  }

  const onButtonClick = (id) => {
    dispatch(setComments([]))
    loadComments(id)
    setIsShown(updateIsPostShown(id))
  }

  return (
    <div data-testid='about-posts'>
      POSTS:
      {posts.length === 0 && <div>Loading posts...</div>}
      <div data-testid='about-post' className='about-posts'>
        {posts.map((post, index) => {
          return (
            <div data-testid='post-item' key={index} className='about-post'>
              <div className='about-title'>
                <b>{post.id}</b>
                <h3>{post.title}</h3>
              </div>
              <div className='about-text'>{post.body}</div>
              <button onClick={() => onButtonClick(post.id)} data-testid='about-button'>
                {isShown[post.id]
                  ? 'Закрыть комментарии'
                  : 'Открыть комментарии'
                }
              </button>
              {isShown[post.id] &&
              <div className='about-comments'>

                {comments.length === 0 && <div>Loading comments...</div>}

                {comments.map((c, i) => {
                  return (
                    <div key={i} data-testid='comments-item'>
                      <h4>{c.id} - {c.name}</h4>
                      <p>{c.body}</p>
                      <div className='about-comments-author'><b>{c.email}</b></div>
                    </div>
                  )
                })}
              </div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}