import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function AddStructure() {
  const [assetReg, setAssetReg] = useState("");
  const [structureNameReg, setStructureNameReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [townReg, setTownReg] = useState("");
  const [informationReg, setInformationReg] = useState("");
  const [numberStructuresReg, setNumberStructuresReg] = useState("");
  const [newsletterReg, setNewsletterReg] = useState("");
  const [manageScheduleReg, setManageScheduleReg] = useState("");
  const [flyerReg, setFlyerReg] = useState("");
  const [drinksReg, setDrinksReg] = useState("");

  const AddStructure = () => {
    axios
      .post(
        "http://localhost:9999/administrator/addstructure",
        assetReg,
        structureNameReg,
        emailReg,
        townReg,
        informationReg,
        numberStructuresReg,
        newsletterReg,
        manageScheduleReg,
        flyerReg,
        drinksReg
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Wrapper>
      <h1> Add Structure</h1>

      <div className="card w-auto">
        <div className="image">
          <img
            src="https://www.selimniederhoffer.com/blog/wp-content/uploads/2019/06/C-White-1024x683.jpg"
            className="card-img-top"
            alt="sports Hall"
          />
        </div>
        <div className="backgroundPicture">
          <div className="form-check form-switch">
            <input
              onChange={(e) => {
                setAssetReg(e.target.value);
              }}
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckasset"
            />
            <label className="form-check-label" for="flexSwitchCheckasset">
              asset partenaire
            </label>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="structureName">
              Structure name
            </span>
            <input
              onChange={(e) => {
                setStructureNameReg(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="structureName"
              aria-label="structureName"
              aria-describedby="structureName"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="Email">
              Email
            </span>
            <input
              onChange={(e) => {
                setEmailReg(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="Email"
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="town">
              town
            </span>
            <input
              onChange={(e) => {
                setTownReg(e.target.value);
              }}
              type="text"
              className="form-control"
              placeholder="town"
              aria-label="town"
              aria-describedby="town"
            />
          </div>

          <div clasclassNames="input-group">
            <span className="input-group-text">information </span>
            <textarea
              className="form-control"
              aria-label="information"
              onChange={(e) => {
                setInformationReg(e.target.value);
              }}
            ></textarea>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Number of structures</span>
            <select
              className="form-select"
              id="inputGroupSelectNumber"
              aria-label="select with button addon"
              onChange={(e) => {
                setNumberStructuresReg(e.target.value);
              }}
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
      </div>

      <h3>Partner Global Permission</h3>
      <div className="card">
        <div className="form-check form-switch">
          <input
            onChange={(e) => {
              setDrinksReg(e.target.value);
            }}
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
            onChange={(e) => {
              setFlyerReg(e.target.value);
            }}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckFlyer"
          />
          <label className="form-check-label" htmlfor="flexSwitchCheckFlyer">
            flyer
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            onChange={(e) => {
              setNewsletterReg(e.target.value);
            }}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckSendNewsletter"
          />
          <label
            className="form-check-label"
            htmlfor="flexSwitchCheckSendNewsletter"
          >
            send a newsletter
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            onChange={(e) => {
              setManageScheduleReg(e.target.value);
            }}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckManageSchedule"
          />
          <label
            className="form-check-label"
            htmlfor="flexSwitchCheckManageSchedule"
          >
            manage the schedule
          </label>
        </div>
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#confirmationModal"
        >
          to validate
        </button>

        <div
          className="modal fade"
          id="confirmationModal"
          tabindex="-1"
          aria-labelledby="confirmationModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmationModalLabel">
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
                <p> you will create a structure</p>
              </div>
              <div className="modal-footer">
                <button
                  className="button btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={AddStructure}
                >
                  Save
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
  width: 60rem;
  color: black;

  .image {
    width: 60rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .card {
    justif
  }
`;
