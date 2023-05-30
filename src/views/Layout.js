import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="App">
      <header className="App-header">
        <nav  >
          <ul className="topnav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </header>
      </div>
    </>
  )
};

export default Layout;