import "./Navbar.css";

function Navbar({ option }) {
  return (
    <>
      <nav className="navbar_Section">
        <ul type="none">
          <li>
            <a className={option === "requisition" && "active"} href="/">
              Requisition Details
            </a>
          </li>
          <li>
            <a className={option === "job" && "active"} href="/">
              Job Details
            </a>
          </li>
          <li>
            <a className={option === "interview" && "active"} href="/">
              Interview Settings
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
