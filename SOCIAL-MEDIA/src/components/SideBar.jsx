const SideBar = ({ SelectedTab, setSelectedTab }) => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sideBar"
      style={{ width: "240px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">SIDEBAR</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("home");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              SelectedTab === "home" && "active"
            }`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            HOME
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Create-Post");
          }}
        >
          <a
            href="#"
            className={`nav-link text-white ${
              SelectedTab === "Create-Post" && "active"
            }`}
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            CREATE POST
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a
          href="#"
          className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="src\image\profil.jpg"
            alt=""
            width="32"
            height="32"
            className="rounded-circle me-2"
          />
          <strong>SHUBHAM</strong>
        </a>
      </div>
    </div>
  );
};
export default SideBar;
