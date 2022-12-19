import React, { useState } from "react";
import { AddTransactionComponent } from "./AddTransactionComponent";

export const ModalsBarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleIsOpen(e) {
    setIsOpen((current) => !current);
  }

  return (
    <div className="modals-container">
      {isOpen && <AddTransactionComponent />}
      <div className="modal">
        <div className="modal-wrapper">
          <ul className="list">
            <li className="list-item">
              <button
                type="button"
                className="btn-secondary btn-info"
                onClick={toggleIsOpen}
              >
                add transaction
              </button>
            </li>
            <li className="list-item">
              <button className="btn-secondary btn-drop">coming soon</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
