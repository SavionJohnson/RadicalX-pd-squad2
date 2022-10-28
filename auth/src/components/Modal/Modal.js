import React, { useState } from "react";
import "./Modal.css";
import Select from "react-select";
import { roleOptions, skillOptions, locationOptions } from "./options";


export default function Modal() {
  // set to false because do not want to see modal at first
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const roleChange = (selectedRole) => {
    console.log("roleChange", selectedRole);
  };

  const skillChange = (selectedSkill) => {
    console.log("skillChange", selectedSkill);
  };

  const softSkillChange = (selectedSoftSkill) => {
    console.log("softSkillChange", selectedSoftSkill);
  };

  const locationChange = (selectedLocation) => {
    console.log("locationChange", selectedLocation);
  };

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
              <div className="add-role">Add Role</div>
              <button
                className="save-modal" 
              >
                Save
              </button>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>

            <form>
              <Select
                className="select-box"
                placeholder="Select Role"
                options={roleOptions}
                onChange={roleChange}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary: '#793EF5',
                  },
                })}
              ></Select>

              <div>
                <label className="titles">
                  <div className="titles">Role Description</div>
                  <input className="role-description-box" type="text" />
                </label>
              </div>

              <div className="titles">Required Skills (Select any 3)</div>
              <Select
                placeholder="Select Skills"
                options={skillOptions}
                onChange={skillChange}
                isMulti
                closeMenuOnSelect={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary: '#793EF5',
                  },
                })}
              ></Select>

              <div className="titles">Complimentary Skills (Select any 3)</div>
              <Select
                placeholder="Select Skills"
                options={skillOptions}
                onChange={softSkillChange}
                isMulti
                closeMenuOnSelect={false}
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary: '#793EF5',
                  },
                })}
              ></Select>
              <div>
                <label className="titles">
                <div className="titles">Minimum Hours Per Week</div>
                  <input className="minimum-hours-per-week-box" type="text" />
                </label>
              </div>

              <div className="titles">Location Preferences</div>
              <Select
                placeholder="Select Location"
                options={locationOptions}
                onChange={locationChange}
                isMulti
                closeMenuOnSelect={false}
                menuPlacement="top"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 10,
                  colors: {
                    ...theme.colors,
                    primary: '#793EF5',
                  },
                })}
              ></Select>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
