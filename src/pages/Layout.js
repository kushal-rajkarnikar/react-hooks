import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="container">
        <ul>
          <li>
            <Link to="/">React Hooks</Link>
          </li>
          <li>
            <Link to="/context">useContext</Link>
          </li>
          <li>
            <Link to="/ref">useRef</Link>
          </li>
          <li>
            <Link to="/reducer">useReducer</Link>
          </li>
          <li>
            <Link to="/callback">useCallback</Link>
          </li>
          <li>
            <Link to="/memo">useMemo</Link>
          </li>
        </ul>
      </nav>

      <section>
        <div className="container">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
