import { Link } from "react-router-dom";
import { TodoForm } from "../../components";
import { PATHS } from "../../constants";

const Home = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={PATHS.HOME}>Home</Link>
          </li>
          <li>
            <Link to={PATHS.ABOUT}>About</Link>
          </li>
          <li>
            <Link to={PATHS.LOGIN}>login</Link>
          </li>
        </ul>
      </nav>
      <h1>home</h1>

      <TodoForm  title="Hello World"/>
    </div>
  );
};

export default Home;
