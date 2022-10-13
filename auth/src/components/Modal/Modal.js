import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  // set to false because do not want to see modal at first
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  // keeps background from scrolling when the modal is open
  modal
    ? document.body.classList.add("active-modal")
    : document.body.classList.remove("active-modal");

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>This is what's in the modal popup cool beans</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
