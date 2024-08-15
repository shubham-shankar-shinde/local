const Navbar = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
        <h1>Fashion Shop.</h1>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" className="nav-link px-2 fs-5">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 fs-5">
            Shop
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 fs-5">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 fs-5">
            Contact
          </a>
        </li>
        <li>
          <a href="#" className="nav-link px-2 fs-5">
            About
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <button type="button" className="btn btn-outline-primary me-2 fs-5">
          Login
        </button>
        <button type="button" className="btn btn-primary fs-5">
          Sign-up
        </button>
      </div>
    </header>
  );
};
export default Navbar;
