import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Wrapper>
      <h1> Administrator</h1>

      <nav class="navbar navbar-expand-lg bg-light ">
        <div class="container-fluid">
          <Button>
            <button
              class="navbar-toggler"
              type="button"
              padding="0"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </Button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Administrator
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <div class="btn btn-secondary ">
                    <Link to="/">Home</Link>
                  </div>
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
                      <div class="dropdown-item">
                        <Link to="/PartnerActive">Partner Active</Link>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown-item">
                        <Link to="/PartnerIdle">Partner Idle</Link>
                      </div>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <div
                    class="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Structure
                  </div>
                  <ul class="dropdown-menu">
                    <li>
                      <div class="dropdown-item">
                        <Link to="/StructureActive">Structure Active</Link>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown-item">
                        <Link to="/StructureIdle">Structure Idle</Link>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
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
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const Button = styled.div``;
