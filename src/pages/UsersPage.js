import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsersSelector} from "../redux/reducers/users/usersSelector";
import {useEffect} from "react";
import axios from "axios";
import {setUsers} from "../redux/reducers/users/usersReducer";

export const UsersPage = () => {

  const dispatch = useDispatch()

  const usersList = useSelector(getUsersSelector)

  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch(setUsers(response.data))
    }
    loadUsers()
  }, [])

  return (
    <div className="Users" data-testid='users'>
      ПОЛЬЗОВАТЕЛИ
      <hr/>
      {usersList.length === 0 && <div>Loading users...</div>}
      {usersList.map((user, index) => {
        return (
          <div key={index} data-testid='users-item'>
            {user.name} ({user.username}) <Link to={`/users/${user.id}`}>Подробнее</Link>
            <hr/>
          </div>
        )
      })}
    </div>
  );
}