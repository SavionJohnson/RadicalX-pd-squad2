import React, { useState } from "react";
import "./Modal.css";
// import { Dropdown, DropdownButton } from "react-bootstrap";
// import "react-dropdown/style.css";
import Select from "react-select";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function Modal() {
  // set to false because do not want to see modal at first
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const roleOptions = [
    { label: "iOS Developer", value: "iosDev" },
    { label: "Android Developer", value: "androidDev" },
    { label: "Full Stack Developer", value: "fullStackDev" },
    { label: "Back-end Developer", value: "backEndDev" },
    { label: "Front-end Developer", value: "frontEndDev" },
  ];

  const skillOptions = [
    { label: "Swift", value: "swift" },
    { label: "iOS", value: "iOS" },
    { label: "Objective-C", value: "objC" },
    { label: "ARM", value: "arm" },
  ];

  const locationOptions = [
    { label: "North America", value: "northAmerica" },
    { label: "South America", value: "southAmerica" },
    { label: "Europe", value: "europe" },
    { label: "Africa", value: "africa" },
    { label: "Asia", value: "asia" },
  ];

  // keeps background from scrolling when the modal is open
  modal
    ? document.body.classList.add("active-modal")
    : document.body.classList.remove("active-modal");

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Add Team Member
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="addrole-save-x">
              <h2>Add Role</h2>
              <button
                className="save-modal" /* onClick={ Add function to save }*/
              >
                Save
              </button>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>

            <form>
              <div>
                <Select
                  placeholder="Select Role"
                  options={roleOptions}
                ></Select>
              </div>
              <div>
                <label className="titles">
                  Role Description
                  <input className="role-description-box" type="text" />
                </label>
              </div>

              <div className="titles">Required Skills (Select any 3)</div>
              <Select
                placeholder="Select Skills"
                options={skillOptions}
                isMulti
              ></Select>

              <div className="titles">Complimentary Skills (Select any 3)</div>
              <Select
                placeholder="Select Skills"
                options={skillOptions}
                isMulti
              ></Select>
              <div>
                <label className="titles">
                  Minimum Hours Per Week
                  <input className="minimum-hours-per-week-box" type="text" />
                </label>
              </div>

              <div className="titles">Location Preferences</div>
              <Select
                placeholder="Select Location"
                options={locationOptions}
              ></Select>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
