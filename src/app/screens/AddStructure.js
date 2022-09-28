import React from "react";
import styled from "styled-components";

export default function AddStructure() {
  return (
    <Wrapper>
      <h1> Add Structure</h1>

      <div class="card w-auto">
        <img
          src="https://www.selimniederhoffer.com/blog/wp-content/uploads/2019/06/C-White-1024x683.jpg"
          class="card-img-top"
          alt="sports Hall"
        />
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            active partenaire
          </label>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Name
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon1">
            town
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="town"
            aria-label="town"
            aria-describedby="basic-addon1"
          />
        </div>

        <div class="input-group">
          <span class="input-group-text">information </span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Number of structures</span>
          <select
            class="form-select"
            id="inputGroupSelect05"
            aria-label="select with button addon"
          >
            <option selected>zero</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="3">four</option>
            <option value="3">five</option>
          </select>
        </div>
      </div>

      <h3>Partner Global Permission</h3>
      <div class="card">
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            sell drinks
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            flyer
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            send a newsletter
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            manage the schedule
          </label>
        </div>
        <button
          type="button"
          class="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          to validate
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Validation of changes
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p> You have modified the permissions of the structure</p>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  padding: auto;
  color: black;
  padding-top: 1rem;
`;
