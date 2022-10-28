import styled from "styled-components";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";

export default function StructureIdle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://administrtor/addstructure");

      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1> StructureActive: </h1>
      <Fragment>
        <div className="card ">
          <img
            src="https://www.selimniederhoffer.com/blog/wp-content/uploads/2019/06/C-White-1024x683.jpg"
            className="card-img-top"
            alt="sports Hall"
          />
          <div className="card-body">
            <h4 className="card-title">
              {data.map((item) => item.structureName)}
            </h4>
            <h5>premises:Paris</h5>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchkInFunction"
              />
              <label
                className="form-check-label"
                htmlfor="flexSwitchkInFunction"
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
                id="flexSwitchCheckSellDrinks"
              />
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckSellDrinks"
              >
                sell drinks
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckFlyer"
              />
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckFlyer"
              >
                flyer
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckNewsletter"
              />
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckNewsletter"
              >
                send a newsletter
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckSchedule"
              />
              <label
                className="form-check-label"
                htmlfor="flexSwitchCheckSchedule"
              >
                manage the schedule
              </label>
            </div>
            <button
              type="button"
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#Modal"
            >
              to validate
            </button>

            <div
              className="modal fade"
              id="Modal"
              tabindex="-1"
              aria-labelledby="ModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="ModalLabel">
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
      </Fragment>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: auto;
  padding: auto;
  width: 18rem;
  color: black;
`;
