import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import styled from "styled-components";

export default function StructureActive() {
  return (
    <Wrapper>
      <h1> StructureActive: </h1>

      <div className="card">
        <img
          src="https://www.selimniederhoffer.com/blog/wp-content/uploads/2019/06/C-White-1024x683.jpg"
          className="card-img-top"
          alt="sports Hall"
        />
        <div className="card-body">
          <h4 className="card-title"> Body Summer </h4>
          <h5>premises:Paris</h5>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              structure in function
            </label>
          </div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              sell drinks
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              flyer
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              send a newsletter
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlfor="flexSwitchCheckDefault"
            >
              manage the schedule
            </label>
          </div>
          <button
            type="button"
            className="btn btn-light"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            to validate
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Validation of changes
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p> You have modified the permissions of the structure</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Back
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
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
  width: 18rem;
  color: black;
`;
