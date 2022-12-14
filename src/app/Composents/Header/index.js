import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper>
      <h1>Administrator </h1>
      <nav className="navbar navbar-expand-lg bg-light navbar-brand  ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/AddStructure"
              >
                AddStructure
              </Link>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Partner
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/PartnerActive">
                    Partner Active
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/PartnerIdle">
                    Partner Idle
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Structure
              </div>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/StructureActive">
                    Structure Active
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/StructureIdle">
                    Structure Idle
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-secondary" type="secondary">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h1 {
    text-align: center;
  }
`;
