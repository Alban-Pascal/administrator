import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light navbar-brand ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <h1>Administrator </h1>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/AddStructure"
              >
                AddStructure
              </Link>
            </li>
            <li class="nav-item dropdown">
              <div
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partner
              </div>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/PartnerActive">
                    Partner Active
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/PartnerIdle">
                    Partner Idle
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <div
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Structure
              </div>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/StructureActive">
                    Structure Active
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/StructureIdle">
                    Structure Idle
                  </Link>
                </li>
              </ul>
            </li>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-secondary" type="secondary">
                Search
              </button>
            </form>
          </ul>
        </div>
      </div>
    </nav>
  );
}
