import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>React Quiz ⚡</h1>
      </header>

      <nav className="navbar">
        <Link to="/" className="nav-link">
          전체 퀴즈
        </Link>

        <Link to="/quiz/1" className="nav-link">
          퀴즈 1
        </Link>

        <Link to="/quiz/2" className="nav-link">
          퀴즈 2
        </Link>

        <Link to="/quiz/3" className="nav-link">
          퀴즈 3
        </Link>
      </nav>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
