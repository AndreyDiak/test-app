import './App.css';
import {MainPage} from "./pages/MainPage";
import {UsersPage} from "./pages/UsersPage";
import {AboutPage} from "./pages/AboutPage";
import {Link, useRoutes} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <button>
        <Link to='/main'>
          ГЛАВНАЯ
        </Link>
      </button>
      <button>
        <Link to='/users'>
          ПОЛЬЗОВАТЕЛИ
        </Link>
      </button>
      <hr/>
      <AppRouter />
    </div>
  );
}

export function AppRouter() {
  return useRoutes(
    [
      {
        index: true,
        path: '/',
        element: <MainPage />
      },
      {
        path: '/main',
        element: <MainPage />
      },
      {
        path: '/users',
        element: <UsersPage />
      },
      {
        path: '/users/:id',
        element: <AboutPage />
      },
      {
        path: '*',
        element: <div>NO MATCHES: (</div>
      }
    ]
  )
}

export default App;
